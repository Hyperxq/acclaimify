/// <reference types='vitest' />
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd());


  const urlMap =  {
    production: '/applaudify/',
    cloudflare: './'
  }

  return {
    root: __dirname,
    base: urlMap[mode] ?? '/',
    cacheDir: '../../node_modules/.vite/apps/applaudify',
    server: {
      port: 4200,
      host: 'localhost',
    },
    preview: {
      port: 4300,
      host: 'localhost',
    },
    plugins: [react({
      jsxRuntime: 'classic'
    }), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    optimizeDeps: {
      include: ['react-canvas-confetti/dist/presets/Pride', '@tanstack/react-query', 'react-dom/client'],
    },
    build: {
      outDir: '../../dist/apps/applaudify',
      emptyOutDir: true,
      reportCompressedSize: true,
      include: [/node_modules/],
      transformMixedEsModules: true,
      commonjsOptions: {
        transformMixedEsModules: true,
        include: [],
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime', 'flowbite-react', '@tanstack/react-query', '@tanstack/react-store', 'react-dom/client', 'react-canvas-confetti/dist/presets/Pride'],
      },
    },
    define: {
      'process.env': env,
    },
    resolve: {
      alias: {
        'react-canvas-confetti/dist/presets/Pride': 'react-canvas-confetti/dist/presets/index.js',
      },
    },
  }
});
