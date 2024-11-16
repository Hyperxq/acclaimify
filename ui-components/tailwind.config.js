// libs/ui-components/tailwind.config.js
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/lib/**/*.{js,jsx,ts,tsx,html}'),
  ],
  presets: [require('../frontend/tailwind.config.js')], // Use the frontend Tailwind config as a preset
};
