// libs/ui-components/tailwind.config.js
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.{js,jsx,ts,tsx,html}'),
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
        'custom-circle': '0px 32.233px 38.68px -6.447px rgba(28, 20, 44, 0.08), 0px 12.893px 12.893px -6.447px rgba(29, 20, 47, 0.03)',
      },
      backdropBlur: {
        custom: '14.3939px',
        'custom-circle': '18.64px',
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
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),  // Include Flowbite plugin for Tailwind
    function ({ addUtilities, theme, e }) {
      const perspectives = theme('perspective');
      const utilities = Object.fromEntries(
        Object.entries(perspectives).map(([key, value]) => [
          `.${e(`perspective-${key}`)}`,
          { perspective: value },
        ])
      );

      addUtilities(utilities);
    },
  ],
};
