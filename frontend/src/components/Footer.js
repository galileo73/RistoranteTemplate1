import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { restaurant } from '../config/restaurant';
import { Hours } from './sections';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-[#2F3A2F] text-[#F5EFE6]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl font-bold text-[#F5EFE6]">
              {restaurant.name}
            </Link>
            <p className="mt-4 text-[#F5EFE6]/80 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4 mt-6">
              {restaurant.social.instagram && (
                <a
                  href={restaurant.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="social-instagram"
                  className="text-[#F5EFE6]/60 hover:text-[#F5EFE6] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {restaurant.social.facebook && (
                <a
                  href={restaurant.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="social-facebook"
                  className="text-[#F5EFE6]/60 hover:text-[#F5EFE6] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
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
                  {restaurant.address.street}<br />
                  {restaurant.address.district}
                </span>
              </div>
              <a
                href={`tel:${restaurant.contact.phone}`}
                data-testid="footer-phone"
                className="flex items-center gap-3 text-sm text-[#F5EFE6]/80 hover:text-[#F5EFE6] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F5EFE6]/60" />
                {restaurant.contact.phone}
              </a>
              <a
                href={`mailto:${restaurant.contact.email}`}
                data-testid="footer-email"
                className="flex items-center gap-3 text-sm text-[#F5EFE6]/80 hover:text-[#F5EFE6] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F5EFE6]/60" />
                {restaurant.contact.email}
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[#F5EFE6]">
              {t('hours.title')}
            </h4>
            <Hours showIcon={false} className="text-[#F5EFE6]" />
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
            © {currentYear} {restaurant.name}. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;