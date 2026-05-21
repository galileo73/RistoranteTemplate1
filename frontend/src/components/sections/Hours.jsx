/**
 * Hours Section Component
 *
 * Reusable opening hours display.
 * Uses restaurant config for data.
 */

import React from 'react';
import { Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { restaurant } from '../../config/restaurant';

export const Hours = ({
  title,
  showIcon = true,
  className = '',
  compact = false
}) => {
  const { t } = useLanguage();

  // Get hours from config
  const hoursData = restaurant.hours;

  // Day names in order
  const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  // Build hours array with translations
  const hours = dayOrder.map(day => ({
    day: t(`hours.${day}`),
    time: hoursData[day]?.closed
      ? t('hours.closed')
      : `${hoursData[day]?.open} - ${hoursData[day]?.close}`,
    closed: hoursData[day]?.closed || false
  }));

  if (compact) {
    return (
      <div className={className}>
        {showIcon && <Clock className="w-4 h-4 text-[#6A1E2E] inline mr-2" />}
        <span className="text-[#2F3A2F]/70 text-sm">
          {hours.filter(h => !h.closed).map(h => h.time.replace(' - ', '-'))[0]}
        </span>
      </div>
    );
  }

  return (
    <div className={className} data-testid="hours-section">
      {title && (
        <div className="flex items-center gap-3 mb-6">
          {showIcon && <Clock className="w-5 h-5 text-[#6A1E2E]" />}
          <h3 className="font-serif text-2xl font-semibold text-[#2F3A2F]">
            {title}
          </h3>
        </div>
      )}

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
  );
};

export default Hours;