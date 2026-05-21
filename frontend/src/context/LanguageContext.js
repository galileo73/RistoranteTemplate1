import React, { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  cs: {
    nav: {
      home: 'Domů',
      menu: 'Menu',
      about: 'O nás',
      gallery: 'Galerie',
      contact: 'Kontakt',
      reserve: 'Rezervovat stůl'
    },
    hero: {
      headline: 'Autentica cucina italiana',
      subheadline: 'nel cuore di Letná',
      cta: 'Rezervovat stůl',
      viewMenu: 'Zobrazit menu'
    },
    story: {
      title: 'Příběh Mattea',
      subtitle: 'Tradice & Vášeň',
      text: 'Matteo přinesl do srdce Prahy autentickou chuť Itálie. S láskou k tradičním receptům a nejkvalitnějším ingrediencím vytváříme pokrmy, které vypráví příběh generací italských kuchařů.',
      philosophy: 'Každé jídlo je cestou do Itálie. Používáme pouze ty nejčerstvější ingredience, importované přímo z italských regionů.'
    },
    featured: {
      title: 'Naše speciality',
      subtitle: 'Chef doporučuje'
    },
    rating: {
      reviews: 'recenzí',
      tagline: 'Oceňováno místními i turisty'
    },
    hours: {
      title: 'Otevírací doba',
      closed: 'Zavřeno',
      monday: 'Pondělí',
      tuesday: 'Úterý',
      wednesday: 'Středa',
      thursday: 'Čtvrtek',
      friday: 'Pátek',
      saturday: 'Sobota',
      sunday: 'Neděle'
    },
    reservation: {
      title: 'Rezervovat stůl',
      subtitle: 'Těšíme se na vás',
      name: 'Jméno',
      phone: 'Telefon',
      email: 'E-mail',
      date: 'Datum',
      time: 'Čas',
      guests: 'Počet hostů',
      notes: 'Poznámky',
      submit: 'Odeslat rezervaci',
      success: 'Děkujeme! Vaše rezervace byla přijata. Brzy vás budeme kontaktovat.',
      error: 'Omlouváme se, došlo k chybě. Zkuste to prosím znovu.',
      required: 'Povinné pole',
      selectDate: 'Vyberte datum',
      selectTime: 'Vyberte čas',
      selectGuests: 'Počet osob',
      guest: 'host',
      guests_plural: 'hostů'
    },
    menu: {
      title: 'Naše Menu',
      subtitle: 'Autentické italské recepty',
      antipasti: 'Antipasti',
      primi: 'Primi Piatti',
      secondi: 'Secondi Piatti',
      dolci: 'Dolci',
      vini: 'Vína',
      download: 'Stáhnout PDF',
      currency: 'Kč',
      glass: 'sklenička',
      bottle: 'láhev'
    },
    about: {
      title: 'O nás',
      subtitle: 'Příběh vášně a tradice',
      matteoStory: 'Matteo se narodil v malém městečku v Toskánsku, kde se naučil vařit od své babičky. Po letech práce v prestižních italských restauracích se rozhodl přinést autentickou italskou kuchyni do Prahy.',
      philosophy: 'Naše filosofie',
      philosophyText: 'Věříme, že nejlepší jídlo vzniká z nejlepších ingrediencí. Proto každý den pečlivě vybíráme čerstvé suroviny a připravujeme vše s láskou a respektem k italské tradici.',
      whyPrague: 'Proč Praha?',
      whyPragueText: 'Praha nás okouzlila svou krásou a pohostinností. Letná je dokonalým místem pro náš malý kousek Itálie.',
      ourSpace: 'Náš prostor'
    },
    gallery: {
      title: 'Galerie',
      subtitle: 'Atmosféra a speciality',
      instagram: 'Sledujte nás na Instagramu',
      instagramButton: 'Přejít na profil'
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Najdete nás',
      address: 'Adresa',
      phone: 'Telefon',
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      whatsappButton: 'Napsat na WhatsApp',
      clickToCall: 'Klikněte pro volání',
      parking: 'Parkování v okolí k dispozici'
    },
    footer: {
      tagline: 'Autentická italská kuchyně v srdci Prahy',
      rights: 'Všechna práva vyhrazena'
    },
    cta: {
      title: 'Připraveni na výjimečný gastronomický zážitek?',
      subtitle: 'Rezervujte si stůl ještě dnes'
    }
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      gallery: 'Gallery',
      contact: 'Contact',
      reserve: 'Reserve a Table'
    },
    hero: {
      headline: 'Autentica cucina italiana',
      subheadline: 'in the heart of Letná',
      cta: 'Reserve a Table',
      viewMenu: 'View Menu'
    },
    story: {
      title: "Matteo's Story",
      subtitle: 'Tradition & Passion',
      text: 'Matteo brought the authentic taste of Italy to the heart of Prague. With love for traditional recipes and the finest ingredients, we create dishes that tell the story of generations of Italian chefs.',
      philosophy: 'Every dish is a journey to Italy. We use only the freshest ingredients, imported directly from Italian regions.'
    },
    featured: {
      title: 'Our Specialties',
      subtitle: 'Chef recommends'
    },
    rating: {
      reviews: 'reviews',
      tagline: 'Appreciated by locals and tourists'
    },
    hours: {
      title: 'Opening Hours',
      closed: 'Closed',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday'
    },
    reservation: {
      title: 'Reserve a Table',
      subtitle: 'We look forward to seeing you',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      date: 'Date',
      time: 'Time',
      guests: 'Number of Guests',
      notes: 'Notes',
      submit: 'Submit Reservation',
      success: 'Thank you! Your reservation has been received. We will contact you soon.',
      error: 'Sorry, an error occurred. Please try again.',
      required: 'Required field',
      selectDate: 'Select date',
      selectTime: 'Select time',
      selectGuests: 'Number of guests',
      guest: 'guest',
      guests_plural: 'guests'
    },
    menu: {
      title: 'Our Menu',
      subtitle: 'Authentic Italian recipes',
      antipasti: 'Antipasti',
      primi: 'Primi Piatti',
      secondi: 'Secondi Piatti',
      dolci: 'Dolci',
      vini: 'Wines',
      download: 'Download PDF',
      currency: 'CZK',
      glass: 'glass',
      bottle: 'bottle'
    },
    about: {
      title: 'About Us',
      subtitle: 'A story of passion and tradition',
      matteoStory: 'Matteo was born in a small town in Tuscany, where he learned to cook from his grandmother. After years of working in prestigious Italian restaurants, he decided to bring authentic Italian cuisine to Prague.',
      philosophy: 'Our Philosophy',
      philosophyText: 'We believe the best food comes from the best ingredients. That is why we carefully select fresh produce every day and prepare everything with love and respect for Italian tradition.',
      whyPrague: 'Why Prague?',
      whyPragueText: 'Prague charmed us with its beauty and hospitality. Letná is the perfect place for our little piece of Italy.',
      ourSpace: 'Our Space'
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Atmosphere and specialties',
      instagram: 'Follow us on Instagram',
      instagramButton: 'Visit Profile'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Find us',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      whatsappButton: 'Message on WhatsApp',
      clickToCall: 'Click to call',
      parking: 'Parking available nearby'
    },
    footer: {
      tagline: 'Authentic Italian cuisine in the heart of Prague',
      rights: 'All rights reserved'
    },
    cta: {
      title: 'Ready for an exceptional dining experience?',
      subtitle: 'Reserve your table today'
    }
  },
  it: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      about: 'Chi Siamo',
      gallery: 'Galleria',
      contact: 'Contatti',
      reserve: 'Prenota un Tavolo'
    },
    hero: {
      headline: 'Autentica cucina italiana',
      subheadline: 'nel cuore di Letná',
      cta: 'Prenota un Tavolo',
      viewMenu: 'Vedi Menu'
    },
    story: {
      title: 'La Storia di Matteo',
      subtitle: 'Tradizione & Passione',
      text: 'Matteo ha portato il gusto autentico dell\'Italia nel cuore di Praga. Con amore per le ricette tradizionali e gli ingredienti più pregiati, creiamo piatti che raccontano la storia di generazioni di chef italiani.',
      philosophy: 'Ogni piatto è un viaggio in Italia. Utilizziamo solo gli ingredienti più freschi, importati direttamente dalle regioni italiane.'
    },
    featured: {
      title: 'Le Nostre Specialità',
      subtitle: 'Lo chef consiglia'
    },
    rating: {
      reviews: 'recensioni',
      tagline: 'Apprezzato da locali e turisti'
    },
    hours: {
      title: 'Orari di Apertura',
      closed: 'Chiuso',
      monday: 'Lunedì',
      tuesday: 'Martedì',
      wednesday: 'Mercoledì',
      thursday: 'Giovedì',
      friday: 'Venerdì',
      saturday: 'Sabato',
      sunday: 'Domenica'
    },
    reservation: {
      title: 'Prenota un Tavolo',
      subtitle: 'Vi aspettiamo',
      name: 'Nome',
      phone: 'Telefono',
      email: 'Email',
      date: 'Data',
      time: 'Ora',
      guests: 'Numero di Ospiti',
      notes: 'Note',
      submit: 'Invia Prenotazione',
      success: 'Grazie! La tua prenotazione è stata ricevuta. Ti contatteremo presto.',
      error: 'Spiacenti, si è verificato un errore. Per favore riprova.',
      required: 'Campo obbligatorio',
      selectDate: 'Seleziona data',
      selectTime: 'Seleziona ora',
      selectGuests: 'Numero ospiti',
      guest: 'ospite',
      guests_plural: 'ospiti'
    },
    menu: {
      title: 'Il Nostro Menu',
      subtitle: 'Ricette italiane autentiche',
      antipasti: 'Antipasti',
      primi: 'Primi Piatti',
      secondi: 'Secondi Piatti',
      dolci: 'Dolci',
      vini: 'Vini',
      download: 'Scarica PDF',
      currency: 'CZK',
      glass: 'bicchiere',
      bottle: 'bottiglia'
    },
    about: {
      title: 'Chi Siamo',
      subtitle: 'Una storia di passione e tradizione',
      matteoStory: 'Matteo è nato in un piccolo paese della Toscana, dove ha imparato a cucinare dalla nonna. Dopo anni di lavoro in prestigiosi ristoranti italiani, ha deciso di portare l\'autentica cucina italiana a Praga.',
      philosophy: 'La Nostra Filosofia',
      philosophyText: 'Crediamo che il cibo migliore nasca dai migliori ingredienti. Per questo ogni giorno selezioniamo con cura prodotti freschi e prepariamo tutto con amore e rispetto per la tradizione italiana.',
      whyPrague: 'Perché Praga?',
      whyPragueText: 'Praga ci ha incantato con la sua bellezza e ospitalità. Letná è il luogo perfetto per il nostro piccolo angolo d\'Italia.',
      ourSpace: 'Il Nostro Spazio'
    },
    gallery: {
      title: 'Galleria',
      subtitle: 'Atmosfera e specialità',
      instagram: 'Seguici su Instagram',
      instagramButton: 'Vai al profilo'
    },
    contact: {
      title: 'Contatti',
      subtitle: 'Dove trovarci',
      address: 'Indirizzo',
      phone: 'Telefono',
      email: 'Email',
      whatsapp: 'WhatsApp',
      whatsappButton: 'Messaggio via WhatsApp',
      clickToCall: 'Clicca per chiamare',
      parking: 'Parcheggio disponibile nelle vicinanze'
    },
    footer: {
      tagline: 'Autentica cucina italiana nel cuore di Praga',
      rights: 'Tutti i diritti riservati'
    },
    cta: {
      title: 'Pronti per un\'esperienza gastronomica eccezionale?',
      subtitle: 'Prenota il tuo tavolo oggi'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('cs');

  const t = useCallback((key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }, [language]);

  const changeLanguage = useCallback((lang) => {
    if (['cs', 'en', 'it'].includes(lang)) {
      setLanguage(lang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
