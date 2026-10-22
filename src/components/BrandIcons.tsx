import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// Meta (Facebook) Official Vector
export const MetaIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
  </svg>
);

// Google Ads Official Triangle Mark
export const GoogleAdsIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path
      d="M3.7 13.9 8.9 4.8c.8-1.4 2.6-1.9 4-1.1l3 1.7c1.4.8 1.9 2.6 1.1 4L11.8 18.5c-.8 1.4-2.6 1.9-4 1.1l-3-1.7c-1.4-.8-1.9-2.6-1.1-4z"
      fill="#FBBC04"
    />
    <path
      d="M17.8 15.3c-.8 1.4-2.6 1.9-4 1.1l-3-1.7c-1.4-.8-1.9-2.6-1.1-4l5.2-9.1c.8-1.4 2.6-1.9 4-1.1l3 1.7c1.4.8 1.9 2.6 1.1 4l-5.2 9.1z"
      fill="#4285F4"
    />
    <circle cx="6.5" cy="18.5" r="3.5" fill="#34A853" />
  </svg>
);

// Google Analytics (GA4) Mark
export const GoogleAnalyticsIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M20 20h-3V4h3v16z" fill="#E37400" />
    <path d="M13.5 20h-3V9h3v11z" fill="#F4B400" />
    <path d="M7 20H4v-6h3v6z" fill="#F9AB00" />
    <circle cx="5.5" cy="9.5" r="2.5" fill="#E37400" />
  </svg>
);

// Google Search Console Mark
export const SearchConsoleIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-3.09c1.78-.4 3.12-1.94 3.24-3.83.14-2.12-1.47-3.92-3.56-4.06-2.16-.14-4.02 1.58-4.02 3.73 0 .73.22 1.41.6 1.98l-2.09 2.09c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l2.09-2.09c.57.38 1.25.6 1.98.6v3.26c0 .55.45 1 1 1s1-.45 1-1z"
      fill="#0F9D58"
    />
  </svg>
);

// Canva Mark
export const CanvaIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10.5" fill="#00C4CC" />
    <path
      d="M14.5 14.8c-.8.8-1.8 1.2-2.9 1.2-2.3 0-3.9-1.7-3.9-4 0-2.5 1.8-4.2 4.3-4.2 1.2 0 2.2.4 2.8 1.1l-1.1 1.2c-.4-.5-1-.8-1.7-.8-1.4 0-2.4 1-2.4 2.5 0 1.4.9 2.5 2.3 2.5.7 0 1.3-.3 1.7-.7l.9 1.2z"
      fill="#FFFFFF"
    />
  </svg>
);

// Figma Mark
export const FigmaIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M8 12a4 4 0 0 1 4-4h4v4h-4a4 4 0 0 1-4 0z" fill="#0ACF83" />
    <path d="M4 16a4 4 0 0 1 4-4h4v4a4 4 0 0 1-4 4 4 4 0 0 1-4-4z" fill="#A259FF" />
    <path d="M4 8a4 4 0 0 1 4-4h4v4H8a4 4 0 0 1-4 0z" fill="#F24E1E" />
    <path d="M12 4h4a4 4 0 0 1 0 8h-4V4z" fill="#FF7262" />
    <path d="M12 12h4a4 4 0 0 1 0 8h-4v-8z" fill="#1ABCFE" />
  </svg>
);

// HTML5 Mark
export const HtmlIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="m4 3 1.5 17L12 22l6.5-2L20 3H4zm13.3 5.4H9.6l.2 2.3h7.1l-.7 7-4.2 1.2-4.2-1.2-.3-3.3h2.3l.2 1.7 2 .5 2-.5.3-3.2H6.9l-.6-6.7h11.2l-.2 2.2z" fill="#E44D26" />
  </svg>
);

// CSS3 Mark
export const CssIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="m4 3 1.5 17L12 22l6.5-2L20 3H4zm13.3 5.4H9.6l.2 2.3h7.1l-.7 7-4.2 1.2-4.2-1.2-.3-3.3h2.3l.2 1.7 2 .5 2-.5.3-3.2H6.9l-.6-6.7h11.2l-.2 2.2z" fill="#264DE4" />
  </svg>
);
