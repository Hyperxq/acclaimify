const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join, resolve } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/backend'),
  },
  module: {
    rules: [
      // CSS handling
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Image files handling
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              name: '[name].[hash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      // SVG files handling
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              name: '[name].[hash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
    }),
  ],
  resolve: {
    alias: {
      '@acclaimify/ui-components': resolve(__dirname, '../../dist/ui-components/src/index.ts'),
    },
  },
};
