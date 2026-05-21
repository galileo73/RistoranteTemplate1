/**
 * Featured Dishes Section Component
 *
 * Displays featured dishes from menu config.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { menu, getFeaturedDishes } from '../../config/menu';
import { restaurant } from '../../config/restaurant';

export const FeaturedDishes = ({
  title,
  subtitle,
  showViewAll = true,
  limit = 3,
  className = ''
}) => {
  const { t, language } = useLanguage();

  // Get featured dishes
  const dishes = getFeaturedDishes(limit).map(dish => ({
    name: dish.name[language] || dish.name.en,
    description: dish.description[language] || dish.description.en,
    price: dish.price,
    image: dish.image || restaurant.story.foodImage // Use food image as fallback
  }));

  const sectionTitle = title || t('featured.title');
  const sectionSubtitle = subtitle || t('featured.subtitle');

  return (
    <section data-testid="featured-section" className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#6A1E2E] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            {sectionSubtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2F3A2F]">
            {sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              data-testid={`featured-dish-${index}`}
              className="group relative overflow-hidden rounded-sm shadow-lg cursor-pointer"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl font-semibold text-white mb-1">
                  {dish.name}
                </h3>
                <p className="text-[#F5EFE6]/80">
                  {dish.price} {menu.currency.symbol}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/menu"
              data-testid="view-full-menu"
              className="inline-flex items-center gap-2 text-[#6A1E2E] font-medium hover:gap-3 transition-all"
            >
              {t('hero.viewMenu')}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedDishes;