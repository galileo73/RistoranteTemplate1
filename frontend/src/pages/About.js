import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { restaurant } from '../config/restaurant';
import { SEO } from '../components/SEO';
import { CTA } from '../components/sections';

export const About = () => {
  const { t, language } = useLanguage();

  return (
    <div data-testid="about-page" className="min-h-screen bg-[#F5EFE6]">
      <SEO
        title={t('about.title')}
        description={t('about.subtitle')}
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
              {t('about.subtitle')}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F3A2F]">
              {t('about.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Chef's Story */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src={restaurant.story.chefImage}
                  alt="Chef"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-sm shadow-xl"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#6A1E2E] rounded-sm hidden md:block" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2F3A2F] mb-6">
                {t('story.title')}
              </h2>
              <p className="text-[#1C1C1C]/80 leading-relaxed mb-6 text-base md:text-lg">
                {t('about.matteoStory')}
              </p>
              <p className="text-[#1C1C1C]/70 leading-relaxed">
                {t('story.text')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2F3A2F] mb-6">
                {t('about.philosophy')}
              </h2>
              <p className="text-[#1C1C1C]/80 leading-relaxed mb-6 text-base md:text-lg">
                {t('about.philosophyText')}
              </p>
              <blockquote className="border-l-4 border-[#6A1E2E] pl-6 italic text-[#1C1C1C]/70">
                "{t('story.philosophy')}"
              </blockquote>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img
                src={restaurant.story.foodImage}
                alt="Fresh ingredients"
                className="w-full h-[350px] md:h-[400px] object-cover rounded-sm shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Prague */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={restaurant.story.locationImage}
                alt="Location"
                className="w-full h-[350px] md:h-[400px] object-cover rounded-sm shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2F3A2F] mb-6">
                {t('about.whyPrague')}
              </h2>
              <p className="text-[#1C1C1C]/80 leading-relaxed text-base md:text-lg">
                {t('about.whyPragueText')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2F3A2F]">
              {t('about.ourSpace')}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2"
            >
              <img
                src={restaurant.story.interiorImage}
                alt="Restaurant interior"
                className="w-full h-64 md:h-80 object-cover rounded-sm"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src={restaurant.gallery[1]?.src}
                alt="Food detail"
                className="w-full h-64 md:h-80 object-cover rounded-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default About;