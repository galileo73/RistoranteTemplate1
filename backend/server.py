from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Reservation Models
class ReservationCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    phone: str = Field(..., min_length=6, max_length=20)
    email: Optional[EmailStr] = None
    date: str = Field(..., pattern=r'^\d{4}-\d{2}-\d{2}$')
    time: str = Field(..., pattern=r'^\d{2}:\d{2}$')
    guests: int = Field(..., ge=1, le=20)
    notes: Optional[str] = Field(None, max_length=500)

class Reservation(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    date: str
    time: str
    guests: int
    notes: Optional[str] = None
    status: str = "pending"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Contact Form Model
class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=10, max_length=1000)

class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Routes
@api_router.get("/")
async def root():
    return {"message": "Ristorantino da Matteo API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

# Reservation endpoints
@api_router.post("/reservations", response_model=Reservation)
async def create_reservation(input: ReservationCreate):
    """Create a new reservation"""
    reservation_dict = input.model_dump()
    reservation_obj = Reservation(**reservation_dict)
    doc = reservation_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.reservations.insert_one(doc)
    return reservation_obj

@api_router.get("/reservations", response_model=List[Reservation])
async def get_reservations():
    """Get all reservations"""
    reservations = await db.reservations.find({}, {"_id": 0}).to_list(1000)
    for res in reservations:
        if isinstance(res.get('created_at'), str):
            res['created_at'] = datetime.fromisoformat(res['created_at'])
    return reservations

# Contact endpoint
@api_router.post("/contact", response_model=Contact)
async def create_contact(input: ContactCreate):
    """Submit a contact form"""
    contact_dict = input.model_dump()
    contact_obj = Contact(**contact_dict)
    doc = contact_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contacts.insert_one(doc)
    return contact_obj

# Menu endpoint (static data)
@api_router.get("/menu")
async def get_menu():
    """Get the restaurant menu"""
    return {
        "antipasti": [
            {"name": "Bruschetta Classica", "description": "Pomodori freschi, basilico, aglio", "price": 180},
            {"name": "Carpaccio di Manzo", "description": "Rucola, parmigiano, capperi", "price": 320},
            {"name": "Burrata Pugliese", "description": "Pomodorini, basilico, olio EVO", "price": 280},
            {"name": "Vitello Tonnato", "description": "Vitello, salsa tonnata, capperi", "price": 290}
        ],
        "primi": [
            {"name": "Spaghetti alle Vongole", "description": "Vongole veraci, aglio, prezzemolo", "price": 380},
            {"name": "Risotto ai Porcini", "description": "Funghi porcini, parmigiano", "price": 360},
            {"name": "Tagliatelle al Ragù", "description": "Ragù bolognese tradizionale", "price": 320},
            {"name": "Gnocchi alla Sorrentina", "description": "Pomodoro, mozzarella, basilico", "price": 290}
        ],
        "secondi": [
            {"name": "Branzino al Forno", "description": "Patate, olive, pomodorini", "price": 520},
            {"name": "Tagliata di Manzo", "description": "Rucola, pomodorini, parmigiano", "price": 580},
            {"name": "Ossobuco alla Milanese", "description": "Gremolata, risotto giallo", "price": 490},
            {"name": "Saltimbocca alla Romana", "description": "Prosciutto, salvia, vino bianco", "price": 420}
        ],
        "dolci": [
            {"name": "Tiramisù", "description": "Mascarpone, caffè, cacao", "price": 180},
            {"name": "Panna Cotta", "description": "Frutti di bosco", "price": 160},
            {"name": "Cannoli Siciliani", "description": "Ricotta, pistacchio", "price": 170},
            {"name": "Affogato", "description": "Gelato, espresso", "price": 140}
        ],
        "vini": [
            {"name": "Chianti Classico DOCG", "description": "Toscana, rosso", "price": 890, "bottle": True},
            {"name": "Prosecco DOC", "description": "Veneto, spumante", "price": 690, "bottle": True},
            {"name": "Pinot Grigio IGT", "description": "Alto Adige, bianco", "price": 150, "glass": True},
            {"name": "Montepulciano d'Abruzzo", "description": "Abruzzo, rosso", "price": 140, "glass": True}
        ]
    }

# Restaurant info endpoint
@api_router.get("/info")
async def get_restaurant_info():
    """Get restaurant information"""
    return {
        "name": "Ristorantino da Matteo",
        "address": "Milady Horákové 42, Praha 7 - Letná",
        "phone": "+420 123 456 789",
        "email": "info@ristorantinodamatteo.cz",
        "rating": 4.7,
        "reviews": 303,
        "hours": {
            "monday": "Chiuso",
            "tuesday": "12:00 - 22:00",
            "wednesday": "12:00 - 22:00",
            "thursday": "12:00 - 22:00",
            "friday": "12:00 - 23:00",
            "saturday": "12:00 - 23:00",
            "sunday": "12:00 - 21:00"
        },
        "coordinates": {"lat": 50.1005, "lng": 14.4280}
    }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
