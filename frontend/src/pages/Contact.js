import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Car, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  const hours = [
    { day: t('hours.monday'), time: t('hours.closed'), closed: true },
    { day: t('hours.tuesday'), time: '12:00 - 22:00' },
    { day: t('hours.wednesday'), time: '12:00 - 22:00' },
    { day: t('hours.thursday'), time: '12:00 - 22:00' },
    { day: t('hours.friday'), time: '12:00 - 23:00' },
    { day: t('hours.saturday'), time: '12:00 - 23:00' },
    { day: t('hours.sunday'), time: '12:00 - 21:00' },
  ];

  return (
    <div data-testid="contact-page" className="min-h-screen bg-[#F5EFE6]">
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
                      Milady Horákové 42<br />
                      Praha 7 - Letná<br />
                      170 00, Czech Republic
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
                      href="tel:+420123456789"
                      data-testid="contact-phone"
                      className="text-[#6A1E2E] text-lg font-medium hover:underline"
                    >
                      +420 123 456 789
                    </a>
                    <p className="text-[#2F3A2F]/60 text-sm mt-1">
                      Click to call
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
                      href="mailto:info@ristorantinodamatteo.cz"
                      data-testid="contact-email"
                      className="text-[#6A1E2E] font-medium hover:underline"
                    >
                      info@ristorantinodamatteo.cz
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
                      href="https://wa.me/420123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-whatsapp"
                      className="inline-block bg-green-500 text-white px-4 py-2 rounded-sm font-medium hover:bg-green-600 transition-colors"
                    >
                      Messaggio via WhatsApp
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
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-[#6A1E2E]" />
                  <h3 className="font-serif text-lg font-semibold text-[#2F3A2F]">
                    {t('hours.title')}
                  </h3>
                </div>
                <div className="space-y-3">
                  {hours.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between py-2 border-b border-[#2F3A2F]/10 last:border-0 ${
                        item.closed ? 'text-[#6A1E2E]' : ''
                      }`}
                    >
                      <span className="text-[#2F3A2F]/70">{item.day}</span>
                      <span className={item.closed ? 'font-medium' : 'text-[#2F3A2F]'}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-4 rounded-sm shadow-md">
                <div className="w-full h-80 rounded-sm overflow-hidden">
                  <iframe
                    title="Restaurant Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.0!2d14.428!3d50.1005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA2JzAxLjgiTiAxNMKwMjUnNDAuOCJF!5e0!3m2!1sen!2scz!4v1600000000000!5m2!1sen!2scz"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    data-testid="contact-map"
                  />
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="directions-link"
                    className="text-[#6A1E2E] font-medium hover:underline"
                  >
                    Ottieni indicazioni stradali
                  </a>
                </div>
              </div>
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
            data-testid="contact-reserve-btn"
            className="inline-block bg-[#6A1E2E] text-white px-8 py-4 rounded-sm font-medium uppercase tracking-wide transition-all hover:bg-[#501622]"
          >
            {t('nav.reserve')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
