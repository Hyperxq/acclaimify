const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const flowbite = require('flowbite-react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname), flowbite.content()
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Poppins', 'sans-serif'],
      // },
    },
  },
  plugins: [flowbite.plugin()],
};
