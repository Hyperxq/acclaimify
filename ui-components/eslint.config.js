const nx = require('@nx/eslint-plugin');
const baseConfig = require('../eslint.config.js');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    settings: {
      'import/resolver': {
        typescript: {
          // Use the main `tsconfig.base.json` file for path resolution
          project: ['./tsconfig.json'],
        },
      },
    },
    // Override or add rules here
    rules: {},
  },
];
