import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { restaurant } from '../config/restaurant';
import { Hero, Hours, FeaturedDishes, CTA, GoogleMap } from '../components/sections';
import { SEO, StructuredData } from '../components/SEO';

export const Home = () => {
  const { t, language } = useLanguage();

  return (
    <div data-testid="home-page" className="bg-[#F5EFE6]">
      <SEO
        title=""
        description={restaurant.seo.description[language] || restaurant.seo.description.en}
      />
      <StructuredData />

      {/* Hero Section */}
      <Hero
        headline={restaurant.hero.headline[language] || restaurant.hero.headline.en}
        subheadline={restaurant.hero.subheadline[language] || restaurant.hero.subheadline.en}
        primaryCta={t('hero.cta')}
        secondaryCta={t('hero.viewMenu')}
        backgroundImage={restaurant.hero.backgroundImage}
      />

      {/* Google Rating Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white py-8"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400 fill-yellow-400'}`}
                />
              ))}
            </div>
            <span data-testid="rating-score" className="text-2xl font-bold text-[#2F3A2F]">
              {restaurant.rating.score}
            </span>
          </div>
          <div className="h-6 w-px bg-[#2F3A2F]/20 hidden md:block" />
          <p className="text-[#2F3A2F]/70">
            <span data-testid="review-count" className="font-semibold text-[#2F3A2F]">
              {restaurant.rating.count}
            </span>{' '}
            {t('rating.reviews')} • {t('rating.tagline')}
          </p>
        </div>
      </motion.section>

      {/* Story Section */}
      <section data-testid="story-section" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <p className="text-[#6A1E2E] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                {t('story.subtitle')}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F3A2F] mb-6">
                {t('story.title')}
              </h2>
              <p className="text-[#1C1C1C]/80 leading-relaxed mb-6 text-base md:text-lg">
                {t('story.text')}
              </p>
              <p className="text-[#1C1C1C]/70 leading-relaxed italic">
                "{t('story.philosophy')}"
              </p>
              <Link
                to="/about"
                data-testid="story-learn-more"
                className="inline-flex items-center gap-2 mt-8 text-[#6A1E2E] font-medium hover:gap-3 transition-all"
              >
                {t('nav.about')}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src={restaurant.story.chefImage}
                  alt="Chef"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-sm shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#6A1E2E] rounded-sm hidden md:block" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <FeaturedDishes />

      {/* Hours & Location */}
      <section data-testid="location-section" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Hours title={t('hours.title')} />
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-[#6A1E2E]" />
                <h3 className="font-serif text-2xl font-semibold text-[#2F3A2F]">
                  {t('contact.subtitle')}
                </h3>
              </div>
              <div className="bg-white p-6 rounded-sm shadow-lg">
                <p className="text-[#2F3A2F] mb-2 font-medium">{restaurant.address.street}</p>
                <p className="text-[#2F3A2F]/70 mb-4">
                  {restaurant.address.district}, {restaurant.address.postal}
                </p>
                <a
                  href={`tel:${restaurant.contact.phone}`}
                  data-testid="home-phone-link"
                  className="flex items-center gap-2 text-[#6A1E2E] hover:underline mb-4"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {restaurant.contact.phone}
                </a>
                <GoogleMap height="192px" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Home;