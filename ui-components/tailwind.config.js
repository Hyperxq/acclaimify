// libs/ui-components/tailwind.config.js
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.{js,jsx,ts,tsx}'),  // Include all files in the UI library
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Add Flowbite paths for Tree Shaking
  ],
  theme: {
    extend: {
      // Add any customizations to Tailwind here
    },
  },
  plugins: [
    require('flowbite/plugin'),  // Include Flowbite plugin for Tailwind
  ],
};
