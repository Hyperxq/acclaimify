// libs/ui-components/tailwind.config.js
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.{js,jsx,ts,tsx}'),  // Include all files in the UI library
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Add Flowbite paths for Tree Shaking
  ],
  theme: {
    extend: {
      borderRadius: {
        custom: '15.136px',
      },
      borderWidth: {
        custom: '2.4px',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(314.45% 139.15% at 3.59% 3.24%, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.07) 100%)',
      },
      boxShadow: {
        custom: '0px 24.889px 29.867px -4.978px rgba(28, 20, 44, 0.08), 0px 9.956px 9.956px -4.978px rgba(29, 20, 47, 0.03)',
      },
      backdropBlur: {
        custom: '14.3939px',
      },
      colors: {
        primary: '#5900FF',    // Primary color
        white: '#FFFFFF',
        gray: '#667085',
        yellow: {
          DEFAULT: '#FFDE7D',  // Yellow base color
          100: '#FAF2AD',
          200: '#FFCF45',
          300: '#FFD633',
          400: '#FFE366',
        },
        black: '#000000',
        orange: {
          DEFAULT: '#F09E36',
          100: '#FFAB3D',
          200: '#FF5729',
        },
        purple: {
          DEFAULT: '#8C66DB',
          light: '#C29CFF',
        },
        teal: '#96E8D9',
        red: '#CC3314',
        blue: {
          light: '#1CA1F2',
          dark: '#0A66C2',
        },
        neutral: {
          light: '#FAFAFF',
          100: '#6E6E6E',
          200: '#B3B3B3',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),  // Include Flowbite plugin for Tailwind
  ],
};
