const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const flowbite = require('flowbite-react/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{js,jsx,ts,tsx,html}'),
    join(__dirname, '../../dist/ui-components/**/*.{js,jsx,ts,tsx,html}'),
    './node_modules/flowbite-react/**/*.js',
    ...createGlobPatternsForDependencies(__dirname), flowbite.content()
  ],
  theme: {
    extend: {
      perspective: {
        '500': '500px',
        '1000': '1000px',
        '1500': '1500px',
      },
      borderRadius: {
        custom: '15.136px',
        input: '10.064px',
      },
      gridTemplateColumns: {
        'min-content-2': 'min-content min-content',
      },
      gridTemplateRows: {
        'min-content': 'min-content',
      },
      borderWidth: {
        custom: '2.4px',
        input: '1.261px',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(314.45% 139.15% at 3.59% 3.24%, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.07) 100%)',
      },
      boxShadow: {
        custom: '0px 24.889px 29.867px -4.978px rgba(28, 20, 44, 0.08), 0px 9.956px 9.956px -4.978px rgba(29, 20, 47, 0.03)',
        input: '0px 1.261px 2.523px rgba(16, 24, 40, 0.05)',
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
        },
        inputBorder: '#D0D5DD',
        inputBg: '#FFFFFF',
        screens: {
          xl: '1600px',
          lg: '1440px',
          md: '1024px',
          sm: '768px',
          xs: '480px',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.2s ease-out',
        slideIn: 'slideIn 1.2s ease-out',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),  // Include Flowbite plugin for Tailwind
    plugin(function ({ matchUtilities }) {
      matchUtilities(
        {
           // Class name
          'perspective': (value) => {
            return {
              perspective: value, // Desired CSS properties here
            }
          },
        }
      )
    }),
  ],
  safelist: [
    {
      pattern: /^(w|h|text|pt|p|max-h|m|max-w)-\[\d+(\.\d+)?vw\]$/,
      variants: ['md', 'lg'],
    },
  ],
};
