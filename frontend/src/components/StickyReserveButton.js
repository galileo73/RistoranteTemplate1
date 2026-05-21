import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarPlus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const StickyReserveButton = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-4 bg-gradient-to-t from-[#2F3A2F] to-transparent pointer-events-none">
      <Link
        to="/reservation"
        data-testid="sticky-reserve-btn"
        className="pointer-events-auto flex items-center justify-center gap-2 w-full bg-[#6A1E2E] text-white py-4 rounded-sm font-medium uppercase tracking-wide shadow-lg transition-all active:scale-95"
      >
        <CalendarPlus className="w-5 h-5" />
        {t('nav.reserve')}
      </Link>
    </div>
  );
};

export default StickyReserveButton;