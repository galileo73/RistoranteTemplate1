/**
 * Menu Configuration
 *
 * All menu items organized by category.
 * Prices are in the restaurant's local currency.
 */

export const menu = {
  categories: [
    {
      id: "antipasti",
      name: {
        cs: "Antipasti",
        en: "Antipasti",
        it: "Antipasti"
      },
      description: {
        cs: "Italské předkrjmy",
        en: "Italian appetizers",
        it: "Antipasti italiani"
      },
      icon: "Utensils",
      items: [
        {
          id: "bruschetta",
          name: { cs: "Bruschetta Classica", en: "Bruschetta Classica", it: "Bruschetta Classica" },
          description: {
            cs: "Pomodori freschi, basilico, aglio",
            en: "Fresh tomatoes, basil, garlic",
            it: "Pomodori freschi, basilico, aglio"
          },
          price: 180
        },
        {
          id: "carpaccio",
          name: { cs: "Carpaccio di Manzo", en: "Carpaccio di Manzo", it: "Carpaccio di Manzo" },
          description: {
            cs: "Rucola, parmigiano, capperi",
            en: "Arugula, parmesan, capers",
            it: "Rucola, parmigiano, capperi"
          },
          price: 320
        },
        {
          id: "burrata",
          name: { cs: "Burrata Pugliese", en: "Burrata Pugliese", it: "Burrata Pugliese" },
          description: {
            cs: "Pomodorini, basilico, olio EVO",
            en: "Cherry tomatoes, basil, EVO oil",
            it: "Pomodorini, basilico, olio EVO"
          },
          price: 280
        },
        {
          id: "vitello",
          name: { cs: "Vitello Tonnato", en: "Vitello Tonnato", it: "Vitello Tonnato" },
          description: {
            cs: "Vitello, salsa tonnata, capperi",
            en: "Veal, tonnato sauce, capers",
            it: "Vitello, salsa tonnata, capperi"
          },
          price: 290
        }
      ]
    },
    {
      id: "primi",
      name: {
        cs: "Primi Piatti",
        en: "Primi Piatti",
        it: "Primi Piatti"
      },
      description: {
        cs: "Těstoviny a rizota",
        en: "Pasta and risotto",
        it: "Pasta e risotti"
      },
      icon: "Utensils",
      items: [
        {
          id: "spaghetti",
          name: { cs: "Spaghetti alle Vongole", en: "Spaghetti alle Vongole", it: "Spaghetti alle Vongole" },
          description: {
            cs: "Vongole veraci, aglio, prezzemolo",
            en: "Fresh clams, garlic, parsley",
            it: "Vongole veraci, aglio, prezzemolo"
          },
          price: 380
        },
        {
          id: "risotto",
          name: { cs: "Risotto ai Porcini", en: "Risotto ai Porcini", it: "Risotto ai Porcini" },
          description: {
            cs: "Funghi porcini, parmigiano",
            en: "Porcini mushrooms, parmesan",
            it: "Funghi porcini, parmigiano"
          },
          price: 360
        },
        {
          id: "tagliatelle",
          name: { cs: "Tagliatelle al Ragù", en: "Tagliatelle al Ragù", it: "Tagliatelle al Ragù" },
          description: {
            cs: "Ragù bolognese tradizionale",
            en: "Traditional Bolognese ragù",
            it: "Ragù bolognese tradizionale"
          },
          price: 320
        },
        {
          id: "gnocchi",
          name: { cs: "Gnocchi alla Sorrentina", en: "Gnocchi alla Sorrentina", it: "Gnocchi alla Sorrentina" },
          description: {
            cs: "Pomodoro, mozzarella, basilico",
            en: "Tomato, mozzarella, basil",
            it: "Pomodoro, mozzarella, basilico"
          },
          price: 290
        }
      ]
    },
    {
      id: "secondi",
      name: {
        cs: "Secondi Piatti",
        en: "Secondi Piatti",
        it: "Secondi Piatti"
      },
      description: {
        cs: "Hlavní chody",
        en: "Main courses",
        it: "Secondi piatti"
      },
      icon: "Utensils",
      items: [
        {
          id: "branzino",
          name: { cs: "Branzino al Forno", en: "Branzino al Forno", it: "Branzino al Forno" },
          description: {
            cs: "Patate, olive, pomodorini",
            en: "Potatoes, olives, cherry tomatoes",
            it: "Patate, olive, pomodorini"
          },
          price: 520
        },
        {
          id: "tagliata",
          name: { cs: "Tagliata di Manzo", en: "Tagliata di Manzo", it: "Tagliata di Manzo" },
          description: {
            cs: "Rucola, pomodorini, parmigiano",
            en: "Arugula, cherry tomatoes, parmesan",
            it: "Rucola, pomodorini, parmigiano"
          },
          price: 580
        },
        {
          id: "ossobuco",
          name: { cs: "Ossobuco alla Milanese", en: "Ossobuco alla Milanese", it: "Ossobuco alla Milanese" },
          description: {
            cs: "Gremolata, risotto giallo",
            en: "Gremolata, saffron risotto",
            it: "Gremolata, risotto giallo"
          },
          price: 490
        },
        {
          id: "saltimbocca",
          name: { cs: "Saltimbocca alla Romana", en: "Saltimbocca alla Romana", it: "Saltimbocca alla Romana" },
          description: {
            cs: "Prosciutto, salvia, vino bianco",
            en: "Prosciutto, sage, white wine",
            it: "Prosciutto, salvia, vino bianco"
          },
          price: 420
        }
      ]
    },
    {
      id: "dolci",
      name: {
        cs: "Dolci",
        en: "Dolci",
        it: "Dolci"
      },
      description: {
        cs: "Dezerty",
        en: "Desserts",
        it: "Dolci"
      },
      icon: "Utensils",
      items: [
        {
          id: "tiramisu",
          name: { cs: "Tiramisù", en: "Tiramisù", it: "Tiramisù" },
          description: {
            cs: "Mascarpone, caffè, cacao",
            en: "Mascarpone, coffee, cocoa",
            it: "Mascarpone, caffè, cacao"
          },
          price: 180
        },
        {
          id: "panna-cotta",
          name: { cs: "Panna Cotta", en: "Panna Cotta", it: "Panna Cotta" },
          description: {
            cs: "Frutti di bosco",
            en: "Berry compote",
            it: "Frutti di bosco"
          },
          price: 160
        },
        {
          id: "cannoli",
          name: { cs: "Cannoli Siciliani", en: "Cannoli Siciliani", it: "Cannoli Siciliani" },
          description: {
            cs: "Ricotta, pistacchio",
            en: "Ricotta, pistachio",
            it: "Ricotta, pistacchio"
          },
          price: 170
        },
        {
          id: "affogato",
          name: { cs: "Affogato", en: "Affogato", it: "Affogato" },
          description: {
            cs: "Gelato, espresso",
            en: "Ice cream, espresso",
            it: "Gelato, espresso"
          },
          price: 140
        }
      ]
    },
    {
      id: "vini",
      name: {
        cs: "Vína",
        en: "Wines",
        it: "Vini"
      },
      description: {
        cs: "Italská vína",
        en: "Italian wines",
        it: "Vini italiani"
      },
      icon: "Wine",
      items: [
        {
          id: "chianti",
          name: { cs: "Chianti Classico DOCG", en: "Chianti Classico DOCG", it: "Chianti Classico DOCG" },
          description: {
            cs: "Toscana, rosso",
            en: "Tuscany, red",
            it: "Toscana, rosso"
          },
          price: 890,
          type: "bottle"
        },
        {
          id: "prosecco",
          name: { cs: "Prosecco DOC", en: "Prosecco DOC", it: "Prosecco DOC" },
          description: {
            cs: "Veneto, spumante",
            en: "Veneto, sparkling",
            it: "Veneto, spumante"
          },
          price: 690,
          type: "bottle"
        },
        {
          id: "pinot-grigio",
          name: { cs: "Pinot Grigio IGT", en: "Pinot Grigio IGT", it: "Pinot Grigio IGT" },
          description: {
            cs: "Alto Adige, bianco",
            en: "Alto Adige, white",
            it: "Alto Adige, bianco"
          },
          price: 150,
          type: "glass"
        },
        {
          id: "montepulciano",
          name: { cs: "Montepulciano d'Abruzzo", en: "Montepulciano d'Abruzzo", it: "Montepulciano d'Abruzzo" },
          description: {
            cs: "Abruzzo, rosso",
            en: "Abruzzo, red",
            it: "Abruzzo, rosso"
          },
          price: 140,
          type: "glass"
        }
      ]
    }
  ],

  // Currency settings
  currency: {
    code: "CZK",
    symbol: "Kč"
  }
};

// Helper function to get featured dishes (for homepage)
export const getFeaturedDishes = (limit = 3) => {
  const featured = [];
  for (const category of menu.categories) {
    if (category.items && featured.length < limit) {
      const firstItem = category.items[0];
      if (firstItem) {
        featured.push({
          ...firstItem,
          category: category.id,
          categoryName: category.name
        });
      }
    }
    if (featured.length >= limit) break;
  }
  return featured;
};

export default menu;