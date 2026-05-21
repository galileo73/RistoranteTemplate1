import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { restaurant } from '../config/restaurant';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const languageLabels = {
  cs: 'CZ',
  en: 'EN',
  it: 'IT'
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/menu', label: t('nav.menu') },
    { to: '/about', label: t('nav.about') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-[#F5EFE6]/95 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              data-testid="navbar-logo"
              className={`font-serif text-xl md:text-2xl font-bold transition-colors ${
                isScrolled || !isHomePage ? 'text-[#2F3A2F]' : 'text-white'
              }`}
            >
              {restaurant.name}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-testid={`nav-link-${link.to.replace('/', '') || 'home'}`}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#6A1E2E] ${
                    isScrolled || !isHomePage
                      ? 'text-[#2F3A2F]'
                      : 'text-white/90 hover:text-white'
                  } ${location.pathname === link.to ? 'text-[#6A1E2E]' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Section: Language + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  data-testid="language-switcher"
                  className={`flex items-center gap-1 text-sm font-medium uppercase transition-colors ${
                    isScrolled || !isHomePage
                      ? 'text-[#2F3A2F] hover:text-[#6A1E2E]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {languageLabels[language]}
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-[#F5EFE6] border-[#2F3A2F]/20">
                  {Object.entries(languageLabels).map(([code, label]) => (
                    <DropdownMenuItem
                      key={code}
                      data-testid={`lang-option-${code}`}
                      onClick={() => setLanguage(code)}
                      className={`cursor-pointer ${
                        language === code ? 'text-[#6A1E2E] font-semibold' : 'text-[#2F3A2F]'
                      }`}
                    >
                      {label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Reserve Button */}
              <Link
                to="/reservation"
                data-testid="nav-reserve-btn"
                className="bg-[#6A1E2E] text-white px-5 py-2.5 rounded-sm text-sm font-medium uppercase tracking-wide transition-all hover:bg-[#501622] hover:scale-105"
              >
                {t('nav.reserve')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled || !isHomePage ? 'text-[#2F3A2F]' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute right-0 top-0 h-full w-72 bg-[#F5EFE6] shadow-xl"
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      data-testid={`mobile-nav-${link.to.replace('/', '') || 'home'}`}
                      className={`text-lg font-medium text-[#2F3A2F] py-2 border-b border-[#2F3A2F]/10 transition-colors hover:text-[#6A1E2E] ${
                        location.pathname === link.to ? 'text-[#6A1E2E]' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Mobile Language Switcher */}
                  <div className="flex gap-2 py-4 border-b border-[#2F3A2F]/10">
                    {Object.entries(languageLabels).map(([code, label]) => (
                      <button
                        key={code}
                        data-testid={`mobile-lang-${code}`}
                        onClick={() => setLanguage(code)}
                        className={`px-3 py-1 text-sm font-medium rounded-sm transition-colors ${
                          language === code
                            ? 'bg-[#6A1E2E] text-white'
                            : 'bg-[#2F3A2F]/10 text-[#2F3A2F] hover:bg-[#2F3A2F]/20'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  {/* Mobile Reserve Button */}
                  <Link
                    to="/reservation"
                    data-testid="mobile-reserve-btn"
                    className="bg-[#6A1E2E] text-white text-center px-5 py-3 rounded-sm text-base font-medium uppercase tracking-wide transition-all hover:bg-[#501622] mt-4"
                  >
                    {t('nav.reserve')}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;