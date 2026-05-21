/**
 * Restaurant Configuration
 *
 * Customize this file for each client deployment.
 * All restaurant-specific data is centralized here.
 */

export const restaurant = {
  // Basic Info
  name: "Ristorantino da Matteo",
  tagline: {
    cs: "Autentická italská kuchyně v srdci Prahy",
    en: "Authentic Italian cuisine in the heart of Prague",
    it: "Autentica cucina italiana nel cuore di Praga"
  },

  // Location
  address: {
    street: "Milady Horákové 42",
    district: "Praha 7 - Letná",
    city: "Praha",
    postal: "170 00",
    country: "Czech Republic",
    coordinates: {
      lat: 50.1005,
      lng: 14.4280
    }
  },

  // Contact
  contact: {
    phone: "+420 123 456 789",
    email: "info@ristorantinodamatteo.cz",
    whatsapp: "+420 123 456 789"
  },

  // Opening Hours
  hours: {
    monday: { closed: true },
    tuesday: { open: "12:00", close: "22:00" },
    wednesday: { open: "12:00", close: "22:00" },
    thursday: { open: "12:00", close: "22:00" },
    friday: { open: "12:00", close: "23:00" },
    saturday: { open: "12:00", close: "23:00" },
    sunday: { open: "12:00", close: "21:00" }
  },

  // Social Media
  social: {
    instagram: "https://instagram.com/ristorantinodamatteo",
    facebook: "https://facebook.com/ristorantinodamatteo"
  },

  // Rating (Google or other platform)
  rating: {
    score: 4.7,
    count: 303,
    platform: "Google"
  },

  // SEO & Meta
  seo: {
    title: {
      cs: "Ristorantino da Matteo | Autentická italská restaurace Praha",
      en: "Ristorantino da Matteo | Authentic Italian Restaurant Prague",
      it: "Ristorantino da Matteo | Ristorante Italiano Autentico Praga"
    },
    description: {
      cs: "Autentická italská restaurace v srdci Letné. Domácí těstoviny, čerstvé mořské plody, italská vína. Rezervujte stůl online.",
      en: "Authentic Italian restaurant in the heart of Letná. Homemade pasta, fresh seafood, Italian wines. Reserve your table online.",
      it: "Ristorante italiano autentico nel cuore di Letná. Pasta fresca, frutti di mare, vini italiani. Prenota il tuo tavolo online."
    },
    keywords: [
      "italian restaurant prague",
      "ristorante italiano prag",
      "pasta prague",
      "italian food letna",
      "authentic italian cuisine",
      "italian restaurant praha"
    ]
  },

  // Hero Section
  hero: {
    headline: {
      cs: "Autentická italská kuchyně",
      en: "Authentic Italian Cuisine",
      it: "Autentica Cucina Italiana"
    },
    subheadline: {
      cs: "v srdci Letné",
      en: "in the heart of Letná",
      it: "nel cuore di Letná"
    },
    backgroundImage: "https://images.pexels.com/photos/35133248/pexels-photo-35133248.jpeg?auto=compress&cs=tinysrgb&w=1920"
  },

  // Story Section
  story: {
    chefName: "Matteo",
    chefImage: "https://images.pexels.com/photos/35760002/pexels-photo-35760002.jpeg?auto=compress&cs=tinysrgb&w=800",
    foodImage: "https://images.pexels.com/photos/16195015/pexels-photo-16195015.jpeg?auto=compress&cs=tinysrgb&w=800",
    locationImage: "https://images.unsplash.com/photo-1757004955131-3d8a4ff32b68?crop=entropy&cs=srgb&fm=jpg&w=800",
    interiorImage: "https://images.pexels.com/photos/3570071/pexels-photo-3570071.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  // Gallery Images
  gallery: [
    {
      src: "https://images.pexels.com/photos/35133248/pexels-photo-35133248.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Restaurant atmosphere",
      span: 2
    },
    {
      src: "https://images.pexels.com/photos/16195015/pexels-photo-16195015.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Fresh pasta",
      span: 1
    },
    {
      src: "https://images.pexels.com/photos/29039070/pexels-photo-29039070.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Italian pizza",
      span: 1
    },
    {
      src: "https://images.pexels.com/photos/35760002/pexels-photo-35760002.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Chef at work",
      span: 1
    },
    {
      src: "https://images.pexels.com/photos/3570071/pexels-photo-3570071.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Interior design",
      span: 2
    },
    {
      src: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Tiramisù dessert",
      span: 1
    },
    {
      src: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Wine selection",
      span: 1
    },
    {
      src: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Table setting",
      span: 1
    }
  ]
};

export default restaurant;