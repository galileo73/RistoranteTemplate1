/**
 * Optimized Image Component
 *
 * Provides lazy loading, dimensions, and placeholder fallback
 * for all images in the application.
 */

import React from 'react';

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  fallback = null,
  onLoad,
  onError,
  ...props
}) => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleLoad = (e) => {
    setLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setError(true);
    onError?.(e);
  };

  // Fallback for broken images
  if (error && fallback) {
    return (
      <div
        className={`bg-muted flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={`${className} ${!loaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImage;