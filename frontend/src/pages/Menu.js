import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Utensils, Wine } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const Menu = () => {
  const { t } = useLanguage();
  const [menu, setMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState('antipasti');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`${API}/menu`);
        setMenu(response.data);
      } catch (error) {
        console.error('Error fetching menu:', error);
        // Fallback menu data
        setMenu({
          antipasti: [
            { name: 'Bruschetta Classica', description: 'Pomodori freschi, basilico, aglio', price: 180 },
            { name: 'Carpaccio di Manzo', description: 'Rucola, parmigiano, capperi', price: 320 },
            { name: 'Burrata Pugliese', description: 'Pomodorini, basilico, olio EVO', price: 280 },
            { name: 'Vitello Tonnato', description: 'Vitello, salsa tonnata, capperi', price: 290 }
          ],
          primi: [
            { name: 'Spaghetti alle Vongole', description: 'Vongole veraci, aglio, prezzemolo', price: 380 },
            { name: 'Risotto ai Porcini', description: 'Funghi porcini, parmigiano', price: 360 },
            { name: 'Tagliatelle al Ragù', description: 'Ragù bolognese tradizionale', price: 320 },
            { name: 'Gnocchi alla Sorrentina', description: 'Pomodoro, mozzarella, basilico', price: 290 }
          ],
          secondi: [
            { name: 'Branzino al Forno', description: 'Patate, olive, pomodorini', price: 520 },
            { name: 'Tagliata di Manzo', description: 'Rucola, pomodorini, parmigiano', price: 580 },
            { name: 'Ossobuco alla Milanese', description: 'Gremolata, risotto giallo', price: 490 },
            { name: 'Saltimbocca alla Romana', description: 'Prosciutto, salvia, vino bianco', price: 420 }
          ],
          dolci: [
            { name: 'Tiramisù', description: 'Mascarpone, caffè, cacao', price: 180 },
            { name: 'Panna Cotta', description: 'Frutti di bosco', price: 160 },
            { name: 'Cannoli Siciliani', description: 'Ricotta, pistacchio', price: 170 },
            { name: 'Affogato', description: 'Gelato, espresso', price: 140 }
          ],
          vini: [
            { name: 'Chianti Classico DOCG', description: 'Toscana, rosso', price: 890, bottle: true },
            { name: 'Prosecco DOC', description: 'Veneto, spumante', price: 690, bottle: true },
            { name: 'Pinot Grigio IGT', description: 'Alto Adige, bianco', price: 150, glass: true },
            { name: 'Montepulciano d\'Abruzzo', description: 'Abruzzo, rosso', price: 140, glass: true }
          ]
        });
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const categories = [
    { key: 'antipasti', label: t('menu.antipasti'), icon: Utensils },
    { key: 'primi', label: t('menu.primi'), icon: Utensils },
    { key: 'secondi', label: t('menu.secondi'), icon: Utensils },
    { key: 'dolci', label: t('menu.dolci'), icon: Utensils },
    { key: 'vini', label: t('menu.vini'), icon: Wine },
  ];

  const handleDownloadPDF = () => {
    // In a real implementation, this would generate/download a PDF
    alert('PDF download would be implemented here');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5EFE6] pt-20 flex items-center justify-center">
        <div className="animate-pulse text-[#2F3A2F]">Loading...</div>
      </div>
    );
  }

  return (
    <div data-testid="menu-page" className="min-h-screen bg-[#F5EFE6]">
      {/* Header */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-[#6A1E2E] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              {t('menu.subtitle')}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F3A2F] mb-6">
              {t('menu.title')}
            </h1>
            <button
              onClick={handleDownloadPDF}
              data-testid="download-pdf-btn"
              className="inline-flex items-center gap-2 bg-[#2F3A2F] text-[#F5EFE6] px-6 py-3 rounded-sm font-medium transition-all hover:bg-[#1C1C1C]"
            >
              <Download className="w-4 h-4" />
              {t('menu.download')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 md:top-20 z-30 bg-[#F5EFE6] border-b border-[#2F3A2F]/10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-2 md:justify-center scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                data-testid={`menu-tab-${cat.key}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.key
                    ? 'bg-[#6A1E2E] text-white'
                    : 'bg-white text-[#2F3A2F] hover:bg-[#2F3A2F]/10'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              key={activeCategory}
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.05 } }
              }}
              className="space-y-6"
            >
              {menu?.[activeCategory]?.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={fadeInUp}
                  data-testid={`menu-item-${activeCategory}-${index}`}
                  className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-[#2F3A2F] mb-1">
                        {item.name}
                      </h3>
                      <p className="text-[#2F3A2F]/60 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-[#6A1E2E] text-lg">
                        {item.price} {t('menu.currency')}
                      </span>
                      {(item.glass || item.bottle) && (
                        <p className="text-xs text-[#2F3A2F]/50 mt-1">
                          {item.glass ? t('menu.glass') : t('menu.bottle')}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2F3A2F] mb-4">
            {t('cta.title')}
          </h2>
          <a
            href="/reservation"
            data-testid="menu-reserve-btn"
            className="inline-block bg-[#6A1E2E] text-white px-8 py-4 rounded-sm font-medium uppercase tracking-wide transition-all hover:bg-[#501622]"
          >
            {t('nav.reserve')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Menu;
