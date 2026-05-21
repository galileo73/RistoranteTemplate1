/**
 * Environment Validation
 *
 * Validates required environment variables at runtime.
 * Provides clear error messages for missing configuration.
 */

const requiredEnvVars = [
  'REACT_APP_BACKEND_URL'
];

const optionalEnvVars = [
  'REACT_APP_GOOGLE_MAPS_KEY',
  'REACT_APP_GA_TRACKING_ID'
];

export function validateEnvironment() {
  const missing = [];

  for (const varName of requiredEnvVars) {
    if (!process.env[varName]) {
      missing.push(varName);
    }
  }

  if (missing.length > 0) {
    console.warn(
      `⚠️ Missing required environment variables:\n${missing.map(v => `  - ${v}`).join('\n')}\n\n` +
      `Some features may not work correctly. Copy .env.example to .env and configure your values.`
    );
  }

  return {
    isValid: missing.length === 0,
    missing,
    config: {
      backendUrl: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000',
      googleMapsKey: process.env.REACT_APP_GOOGLE_MAPS_KEY || '',
      gaTrackingId: process.env.REACT_APP_GA_TRACKING_ID || ''
    }
  };
}

// Run validation on import in development
if (process.env.NODE_ENV === 'development') {
  validateEnvironment();
}

export const env = {
  backendUrl: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000',
  googleMapsKey: process.env.REACT_APP_GOOGLE_MAPS_KEY || '',
  gaTrackingId: process.env.REACT_APP_GA_TRACKING_ID || '',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production'
};

export default env;