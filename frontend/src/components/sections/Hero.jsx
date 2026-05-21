/**
 * Hero Section Component
 *
 * Reusable hero section for landing pages.
 * Configurable headline, subheadline, and CTA buttons.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../config/restaurant';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const Hero = ({
  headline,
  subheadline,
  primaryCta,
  primaryCtaLink = '/reservation',
  secondaryCta,
  secondaryCtaLink = '/menu',
  backgroundImage,
  showScrollIndicator = true,
  className = ''
}) => {
  const { t, language } = useLanguage();

  // Use config defaults if not provided
  const bgImage = backgroundImage || restaurant.hero.backgroundImage;
  const heroHeadline = headline || restaurant.hero.headline[language] || restaurant.hero.headline.en;
  const heroSubheadline = subheadline || restaurant.hero.subheadline[language] || restaurant.hero.subheadline.en;

  return (
    <section
      data-testid="hero-section"
      className={`relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Hero Content */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <motion.p
          variants={fadeInUp}
          className="text-[#F5EFE6]/80 text-xs md:text-sm uppercase tracking-[0.3em] mb-4"
        >
          {restaurant.address.district}
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
        >
          {heroHeadline}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F5EFE6]/90 italic mb-8"
        >
          {heroSubheadline}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {primaryCta && (
            <Link
              to={primaryCtaLink}
              data-testid="hero-primary-cta"
              className="bg-[#6A1E2E] text-white px-8 py-4 rounded-sm font-medium uppercase tracking-wide transition-all hover:bg-[#501622] hover:scale-105"
            >
              {primaryCta}
            </Link>
          )}

          {secondaryCta && (
            <Link
              to={secondaryCtaLink}
              data-testid="hero-secondary-cta"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-medium uppercase tracking-wide transition-all hover:bg-white hover:text-[#2F3A2F]"
            >
              {secondaryCta}
            </Link>
          )}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;