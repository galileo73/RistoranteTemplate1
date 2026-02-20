import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Phone, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Home = () => {
  const { t } = useLanguage();

  const featuredDishes = [
    {
      name: 'Spaghetti alle Vongole',
      price: '380 Kč',
      image: 'https://images.pexels.com/photos/16195015/pexels-photo-16195015.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Risotto ai Porcini',
      price: '360 Kč',
      image: 'https://images.pexels.com/photos/29039070/pexels-photo-29039070.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Tiramisù',
      price: '180 Kč',
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

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
    <div data-testid="home-page" className="bg-[#F5EFE6]">
      {/* Hero Section */}
      <section
        data-testid="hero-section"
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/35133248/pexels-photo-35133248.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Restaurant interior"
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
            Prague 7 • Letná
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          >
            {t('hero.headline')}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F5EFE6]/90 italic mb-8"
          >
            {t('hero.subheadline')}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/reservation"
              data-testid="hero-reserve-btn"
              className="bg-[#6A1E2E] text-white px-8 py-4 rounded-sm font-medium uppercase tracking-wide transition-all hover:bg-[#501622] hover:scale-105"
            >
              {t('hero.cta')}
            </Link>
            <Link
              to="/menu"
              data-testid="hero-menu-btn"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-medium uppercase tracking-wide transition-all hover:bg-white hover:text-[#2F3A2F]"
            >
              {t('hero.viewMenu')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
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
      </section>

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
            <span data-testid="rating-score" className="text-2xl font-bold text-[#2F3A2F]">4.7</span>
          </div>
          <div className="h-6 w-px bg-[#2F3A2F]/20 hidden md:block" />
          <p className="text-[#2F3A2F]/70">
            <span data-testid="review-count" className="font-semibold text-[#2F3A2F]">303</span> {t('rating.reviews')} • {t('rating.tagline')}
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
                  src="https://images.pexels.com/photos/35760002/pexels-photo-35760002.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Chef Matteo"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-sm shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#6A1E2E] rounded-sm hidden md:block" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section data-testid="featured-section" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#6A1E2E] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              {t('featured.subtitle')}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2F3A2F]">
              {t('featured.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                data-testid={`featured-dish-${index}`}
                className="group relative overflow-hidden rounded-sm shadow-lg cursor-pointer"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-semibold text-white mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-[#F5EFE6]/80">{dish.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/menu"
              data-testid="view-full-menu"
              className="inline-flex items-center gap-2 text-[#6A1E2E] font-medium hover:gap-3 transition-all"
            >
              {t('hero.viewMenu')}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

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
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-[#6A1E2E]" />
                <h3 className="font-serif text-2xl font-semibold text-[#2F3A2F]">
                  {t('hours.title')}
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between py-2 border-b border-[#2F3A2F]/10 ${
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
                <p className="text-[#2F3A2F] mb-2 font-medium">Milady Horákové 42</p>
                <p className="text-[#2F3A2F]/70 mb-4">Praha 7 - Letná, 170 00</p>
                <a
                  href="tel:+420123456789"
                  data-testid="home-phone-link"
                  className="flex items-center gap-2 text-[#6A1E2E] hover:underline mb-4"
                >
                  <Phone className="w-4 h-4" />
                  +420 123 456 789
                </a>
                {/* Google Maps Embed */}
                <div className="w-full h-48 bg-[#E5DACE] rounded-sm overflow-hidden">
                  <iframe
                    title="Restaurant Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.5!2d14.428!3d50.1005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA2JzAxLjgiTiAxNMKwMjUnNDAuOCJF!5e0!3m2!1sen!2scz!4v1600000000000!5m2!1sen!2scz"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section" className="py-16 md:py-24 bg-[#2F3A2F]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#F5EFE6] mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-[#F5EFE6]/80 mb-8">
            {t('cta.subtitle')}
          </p>
          <Link
            to="/reservation"
            data-testid="cta-reserve-btn"
            className="inline-block bg-[#6A1E2E] text-white px-10 py-4 rounded-sm font-medium uppercase tracking-wide transition-all hover:bg-[#501622] hover:scale-105"
          >
            {t('nav.reserve')}
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
