/**
 * Theme Configuration
 *
 * Customize colors, fonts, and design tokens for each client.
 * These values should be used consistently across all components.
 */

export const theme = {
  // Color Palette
  colors: {
    // Primary colors (Olive)
    primary: {
      DEFAULT: "#2F3A2F",
      light: "#3D4D3D",
      dark: "#1F281F"
    },

    // Secondary/Background colors (Cream)
    secondary: {
      DEFAULT: "#F5EFE6",
      light: "#FAF8F5",
      dark: "#E5DACE"
    },

    // Accent color (Wine)
    accent: {
      DEFAULT: "#6A1E2E",
      light: "#8A2E3E",
      dark: "#501622"
    },

    // Text colors
    text: {
      primary: "#1C1C1C",
      secondary: "#2F3A2F",
      muted: "#6B7B6B"
    },

    // UI colors
    background: "#F5EFE6",
    surface: "#FFFFFF",
    border: "rgba(47, 58, 47, 0.2)",

    // Status colors
    success: "#22C55E",
    error: "#EF4444",
    warning: "#F59E0B"
  },

  // Typography
  fonts: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'Lato', -apple-system, BlinkMacSystemFont, sans-serif"
  },

  // Font sizes (rem)
  fontSizes: {
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    base: "1rem",     // 16px
    lg: "1.125rem",   // 18px
    xl: "1.25rem",    // 20px
    "2xl": "1.5rem",  // 24px
    "3xl": "1.875rem",// 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem",    // 48px
    "6xl": "3.75rem"  // 60px
  },

  // Border radius
  borderRadius: {
    none: "0",
    sm: "0.125rem",  // 2px - subtle rounding
    DEFAULT: "0.25rem", // 4px
    md: "0.375rem",  // 6px
    lg: "0.5rem",    // 8px
    full: "9999px"
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
  },

  // Spacing
  spacing: {
    container: "container mx-auto px-4 md:px-6 lg:px-8",
    section: "py-16 md:py-24 lg:py-32",
    element: "gap-6 md:gap-8 lg:gap-12"
  },

  // Breakpoints (matches Tailwind defaults)
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },

  // Animation defaults
  animation: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms"
    },
    easing: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  }
};

// Tailwind CSS class helpers
export const classes = {
  // Background colors
  bg: {
    primary: "bg-[#2F3A2F]",
    secondary: "bg-[#F5EFE6]",
    accent: "bg-[#6A1E2E]",
    surface: "bg-white"
  },

  // Text colors
  text: {
    heading: "text-[#2F3A2F]",
    body: "text-[#1C1C1C]",
    muted: "text-[#2F3A2F]/80",
    accent: "text-[#6A1E2E]"
  },

  // Button styles
  button: {
    primary: "bg-[#6A1E2E] text-white hover:bg-[#501622] hover:scale-105",
    secondary: "bg-transparent border-2 border-[#2F3A2F] text-[#2F3A2F] hover:bg-[#2F3A2F] hover:text-white",
    outline: "bg-transparent border border-[#2F3A2F]/20 text-[#2F3A2F] hover:border-[#6A1E2E] hover:text-[#6A1E2E]"
  },

  // Card styles
  card: {
    DEFAULT: "bg-white rounded-sm shadow-md",
    hover: "hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
  },

  // Section container
  container: "container mx-auto px-4 md:px-6 lg:px-8",

  // Section padding
  section: "py-16 md:py-24 lg:py-32"
};

export default theme;