import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Car, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { restaurant } from '../config/restaurant';
import { SEO } from '../components/SEO';
import { Hours, GoogleMap, CTA } from '../components/sections';

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="contact-page" className="min-h-screen bg-[#F5EFE6]">
      <SEO
        title={t('contact.title')}
        description={t('contact.subtitle')}
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
              {t('contact.subtitle')}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F3A2F]">
              {t('contact.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Address */}
              <div className="bg-white p-6 rounded-sm shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#6A1E2E]/10 rounded-sm">
                    <MapPin className="w-6 h-6 text-[#6A1E2E]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#2F3A2F] mb-2">
                      {t('contact.address')}
                    </h3>
                    <p className="text-[#2F3A2F]/80">
                      {restaurant.address.street}<br />
                      {restaurant.address.district}<br />
                      {restaurant.address.postal}, Czech Republic
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-sm shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#6A1E2E]/10 rounded-sm">
                    <Phone className="w-6 h-6 text-[#6A1E2E]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#2F3A2F] mb-2">
                      {t('contact.phone')}
                    </h3>
                    <a
                      href={`tel:${restaurant.contact.phone}`}
                      data-testid="contact-phone"
                      className="text-[#6A1E2E] text-lg font-medium hover:underline"
                    >
                      {restaurant.contact.phone}
                    </a>
                    <p className="text-[#2F3A2F]/60 text-sm mt-1">
                      {t('contact.clickToCall')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-sm shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#6A1E2E]/10 rounded-sm">
                    <Mail className="w-6 h-6 text-[#6A1E2E]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#2F3A2F] mb-2">
                      {t('contact.email')}
                    </h3>
                    <a
                      href={`mailto:${restaurant.contact.email}`}
                      data-testid="contact-email"
                      className="text-[#6A1E2E] font-medium hover:underline"
                    >
                      {restaurant.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white p-6 rounded-sm shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-sm">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#2F3A2F] mb-2">
                      {t('contact.whatsapp')}
                    </h3>
                    <a
                      href={`https://wa.me/${restaurant.contact.whatsapp?.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-whatsapp"
                      className="inline-block bg-green-500 text-white px-4 py-2 rounded-sm font-medium hover:bg-green-600 transition-colors"
                    >
                      {t('contact.whatsappButton')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Parking */}
              <div className="bg-[#2F3A2F]/5 p-4 rounded-sm flex items-center gap-3">
                <Car className="w-5 h-5 text-[#2F3A2F]/60" />
                <p className="text-[#2F3A2F]/70 text-sm">
                  {t('contact.parking')}
                </p>
              </div>
            </motion.div>

            {/* Hours & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Opening Hours */}
              <div className="bg-white p-6 rounded-sm shadow-md">
                <Hours title={t('hours.title')} />
              </div>

              {/* Map */}
              <div className="bg-white p-4 rounded-sm shadow-md">
                <GoogleMap height="320px" showLink />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Contact;