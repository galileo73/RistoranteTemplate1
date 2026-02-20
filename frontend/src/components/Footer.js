import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const hours = [
    { day: t('hours.monday'), time: t('hours.closed') },
    { day: t('hours.tuesday'), time: '12:00 - 22:00' },
    { day: t('hours.wednesday'), time: '12:00 - 22:00' },
    { day: t('hours.thursday'), time: '12:00 - 22:00' },
    { day: t('hours.friday'), time: '12:00 - 23:00' },
    { day: t('hours.saturday'), time: '12:00 - 23:00' },
    { day: t('hours.sunday'), time: '12:00 - 21:00' },
  ];

  return (
    <footer data-testid="footer" className="bg-[#2F3A2F] text-[#F5EFE6]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl font-bold text-[#F5EFE6]">
              Ristorantino da Matteo
            </Link>
            <p className="mt-4 text-[#F5EFE6]/80 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-instagram"
                className="text-[#F5EFE6]/60 hover:text-[#F5EFE6] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-facebook"
                className="text-[#F5EFE6]/60 hover:text-[#F5EFE6] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[#F5EFE6]">
              {t('contact.title')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-[#F5EFE6]/60 flex-shrink-0" />
                <span className="text-sm text-[#F5EFE6]/80">
                  Milady Horákové 42<br />Praha 7 - Letná
                </span>
              </div>
              <a
                href="tel:+420123456789"
                data-testid="footer-phone"
                className="flex items-center gap-3 text-sm text-[#F5EFE6]/80 hover:text-[#F5EFE6] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F5EFE6]/60" />
                +420 123 456 789
              </a>
              <a
                href="mailto:info@ristorantinodamatteo.cz"
                data-testid="footer-email"
                className="flex items-center gap-3 text-sm text-[#F5EFE6]/80 hover:text-[#F5EFE6] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F5EFE6]/60" />
                info@ristorantinodamatteo.cz
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[#F5EFE6]">
              {t('hours.title')}
            </h4>
            <div className="space-y-2">
              {hours.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-[#F5EFE6]/60">{item.day}</span>
                  <span className={`text-[#F5EFE6]/80 ${item.time === t('hours.closed') ? 'text-[#6A1E2E]' : ''}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[#F5EFE6]">
              {t('nav.menu')}
            </h4>
            <div className="space-y-2">
              <Link
                to="/menu"
                className="block text-sm text-[#F5EFE6]/80 hover:text-[#F5EFE6] transition-colors"
              >
                {t('nav.menu')}
              </Link>
              <Link
                to="/about"
                className="block text-sm text-[#F5EFE6]/80 hover:text-[#F5EFE6] transition-colors"
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/gallery"
                className="block text-sm text-[#F5EFE6]/80 hover:text-[#F5EFE6] transition-colors"
              >
                {t('nav.gallery')}
              </Link>
              <Link
                to="/reservation"
                className="block text-sm text-[#F5EFE6]/80 hover:text-[#F5EFE6] transition-colors"
              >
                {t('nav.reserve')}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#F5EFE6]/10 text-center">
          <p className="text-sm text-[#F5EFE6]/60">
            © {currentYear} Ristorantino da Matteo. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
