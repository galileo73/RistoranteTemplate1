/**
 * CTA Section Component
 *
 * Reusable call-to-action section.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const CTA = ({
  title,
  subtitle,
  buttonText,
  buttonLink = '/reservation',
  className = '',
  dark = true
}) => {
  const { t } = useLanguage();

  const ctaTitle = title || t('cta.title');
  const ctaSubtitle = subtitle || t('cta.subtitle');
  const ctaButton = buttonText || t('nav.reserve');

  return (
    <section
      data-testid="cta-section"
      className={`py-16 md:py-24 ${dark ? 'bg-[#2F3A2F]' : 'bg-white'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center"
      >
        <h2
          className={`font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${
            dark ? 'text-[#F5EFE6]' : 'text-[#2F3A2F]'
          }`}
        >
          {ctaTitle}
        </h2>

        {ctaSubtitle && (
          <p
            className={`mb-8 ${
              dark ? 'text-[#F5EFE6]/80' : 'text-[#2F3A2F]/70'
            }`}
          >
            {ctaSubtitle}
          </p>
        )}

        <Link
          to={buttonLink}
          data-testid="cta-button"
          className={`inline-block px-10 py-4 rounded-sm font-medium uppercase tracking-wide transition-all hover:scale-105 ${
            dark
              ? 'bg-[#6A1E2E] text-white hover:bg-[#501622]'
              : 'bg-[#6A1E2E] text-white hover:bg-[#501622]'
          }`}
        >
          {ctaButton}
        </Link>
      </motion.div>
    </section>
  );
};

export default CTA;