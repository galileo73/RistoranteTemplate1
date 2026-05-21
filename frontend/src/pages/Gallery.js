import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { restaurant } from '../config/restaurant';
import { SEO } from '../components/SEO';
import { CTA } from '../components/sections';

export const Gallery = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="gallery-page" className="min-h-screen bg-[#F5EFE6]">
      <SEO
        title={t('gallery.title')}
        description={t('gallery.subtitle')}
      />

      {/* Header */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-[#6A1E2E] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              {t('gallery.subtitle')}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F3A2F]">
              {t('gallery.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {restaurant.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                data-testid={`gallery-image-${index}`}
                className={`overflow-hidden rounded-sm shadow-lg cursor-pointer ${
                  image.span === 2 ? 'md:col-span-2' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2F3A2F] mb-4">
            {t('gallery.instagram')}
          </h2>
          <p className="text-[#2F3A2F]/70 mb-6">
            {restaurant.social.instagram?.replace('https://instagram.com/', '@') || '@ristorantinodamatteo'}
          </p>
          <a
            href={restaurant.social.instagram || 'https://instagram.com'}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="instagram-link"
            className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-3 rounded-sm font-medium transition-all hover:opacity-90"
          >
            {t('gallery.instagramButton')}
          </a>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Gallery;