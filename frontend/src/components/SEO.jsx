/**
 * SEO Component
 *
 * Dynamic SEO management for each page.
 * Updates document title, meta tags, and Open Graph data.
 */

import { useEffect } from 'react';
import { restaurant } from '../config/restaurant';

export const SEO = ({
  title,
  description,
  image,
  type = 'website',
  lang = 'en',
  url,
  noIndex = false
}) => {
  useEffect(() => {
    // Build full title
    const fullTitle = title
      ? `${title} | ${restaurant.name}`
      : `${restaurant.name} | ${restaurant.seo.title[lang] || restaurant.seo.title.en}`;

    // Get description
    const metaDescription = description || restaurant.seo.description[lang] || restaurant.seo.description.en;

    // Get image
    const ogImage = image || restaurant.hero.backgroundImage;

    // Get canonical URL
    const canonicalUrl = url || window.location.href;

    // Update document title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateOrCreateMeta = (property, content, isProperty = true) => {
      const attr = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute(attr, property);
        newTag.content = content;
        document.head.appendChild(newTag);
      }
    };

    // Update or create link elements
    const updateOrCreateLink = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (link) {
        link.setAttribute('href', href);
      } else {
        link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      }
    };

    // Meta description
    updateOrCreateMeta('description', metaDescription, false);

    // Canonical URL
    updateOrCreateLink('canonical', canonicalUrl);

    // Robots
    if (noIndex) {
      updateOrCreateMeta('robots', 'noindex, nofollow', false);
    }

    // Open Graph
    updateOrCreateMeta('og:title', fullTitle);
    updateOrCreateMeta('og:description', metaDescription);
    updateOrCreateMeta('og:image', ogImage);
    updateOrCreateMeta('og:type', type);
    updateOrCreateMeta('og:site_name', restaurant.name);
    updateOrCreateMeta('og:url', canonicalUrl);
    updateOrCreateMeta('og:locale', lang === 'cs' ? 'cs_CZ' : lang === 'it' ? 'it_IT' : 'en_US');

    // Twitter Card
    updateOrCreateMeta('twitter:card', 'summary_large_image', false);
    updateOrCreateMeta('twitter:title', fullTitle, false);
    updateOrCreateMeta('twitter:description', metaDescription, false);
    updateOrCreateMeta('twitter:image', ogImage, false);

    // Cleanup function
    return () => {
      // Could remove dynamically added tags here if needed
    };
  }, [title, description, image, type, lang, url, noIndex]);

  return null;
};

// JSON-LD Structured Data Component
export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": restaurant.name,
    "description": restaurant.seo.description.en,
    "url": window.location.origin,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": restaurant.address.street,
      "addressLocality": restaurant.address.district,
      "addressRegion": "Prague",
      "postalCode": restaurant.address.postal,
      "addressCountry": "CZ"
    },
    "telephone": restaurant.contact.phone,
    "email": restaurant.contact.email,
    "servesCuisine": "Italian",
    "priceRange": "$$",
    "aggregateRating": restaurant.rating.count > 0 ? {
      "@type": "AggregateRating",
      "ratingValue": restaurant.rating.score,
      "reviewCount": restaurant.rating.count
    } : undefined,
    "openingHoursSpecification": Object.entries(restaurant.hours)
      .filter(([_, h]) => !h.closed)
      .map(([day, h]) => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": day.charAt(0).toUpperCase() + day.slice(1),
        "opens": h.open,
        "closes": h.close
      })),
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": restaurant.address.coordinates.lat,
      "longitude": restaurant.address.coordinates.lng
    },
    "sameAs": [
      restaurant.social.instagram,
      restaurant.social.facebook
    ].filter(Boolean)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default SEO;