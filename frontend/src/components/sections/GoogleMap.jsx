/**
 * Google Map Component
 *
 * Reusable embedded Google Map.
 * Uses restaurant config for coordinates.
 */

import React from 'react';
import { restaurant } from '../../config/restaurant';

export const GoogleMap = ({
  height = '300px',
  className = '',
  showLink = false
}) => {
  const { lat, lng } = restaurant.address.coordinates;
  const address = `${restaurant.address.street}, ${restaurant.address.district}`;

  // Build Google Maps embed URL
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.5!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${lat}!3d${lng}!5e0!3m2!1sen!2scz!4v1600000000000!5m2!1sen!2scz`;

  return (
    <div className={className} data-testid="google-map">
      <div
        className="w-full rounded-sm overflow-hidden bg-[#E5DACE]"
        style={{ height }}
      >
        <iframe
          title="Restaurant Location"
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {showLink && (
        <div className="mt-4 text-center">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="directions-link"
            className="text-[#6A1E2E] font-medium hover:underline"
          >
            Get Directions
          </a>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;