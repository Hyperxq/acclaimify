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
    plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    build: {
      outDir: '../../dist/apps/applaudify',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
        include: [/node_modules/, /react-canvas-confetti/],
      },
      rollupOptions: {
        external: [],
      },
    },
    define: {
      'process.env': env, // allows access to process.env in code
    },
  }
});
