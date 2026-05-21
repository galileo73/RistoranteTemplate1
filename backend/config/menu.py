"""
Backend Menu Configuration

This file mirrors the frontend menu configuration for API responses.
Edit this file to update the menu served by the API.
"""

# Menu data - mirrors frontend/src/config/menu.js
MENU_DATA = {
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

# Restaurant info - mirrors frontend/src/config/restaurant.js
RESTAURANT_INFO = {
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


def get_menu():
    """Return the menu data."""
    return MENU_DATA


def get_restaurant_info():
    """Return the restaurant info."""
    return RESTAURANT_INFO