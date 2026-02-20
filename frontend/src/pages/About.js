import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="about-page" className="min-h-screen bg-[#F5EFE6]">
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

      {/* Matteo's Story */}
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
                  src="https://images.pexels.com/photos/35760002/pexels-photo-35760002.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Chef Matteo"
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
                src="https://images.pexels.com/photos/16195015/pexels-photo-16195015.jpeg?auto=compress&cs=tinysrgb&w=800"
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
                src="https://images.unsplash.com/photo-1757004955131-3d8a4ff32b68?crop=entropy&cs=srgb&fm=jpg&w=800"
                alt="Prague view"
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
              Il Nostro Spazio
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
                src="https://images.pexels.com/photos/3570071/pexels-photo-3570071.jpeg?auto=compress&cs=tinysrgb&w=800"
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
                src="https://images.pexels.com/photos/29039070/pexels-photo-29039070.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Food detail"
                className="w-full h-64 md:h-80 object-cover rounded-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2F3A2F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#F5EFE6] mb-4">
            {t('cta.title')}
          </h2>
          <a
            href="/reservation"
            data-testid="about-reserve-btn"
            className="inline-block bg-[#6A1E2E] text-white px-8 py-4 rounded-sm font-medium uppercase tracking-wide transition-all hover:bg-[#501622]"
          >
            {t('nav.reserve')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
