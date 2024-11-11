import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd()) ?? 'development';


  const urlMap: Record<string, string> = {
    production: '/acclaimify/',
    cloudflare: '/',
    development: '/'
  }

  return {
    root: __dirname,
    base: urlMap[mode] ?? '/',
    cacheDir: '../../node_modules/.vite/apps/acclaimify',
    server: {
      port: 4200,
      host: 'localhost',
    },
    preview: {
      port: 4300,
      host: 'localhost',
    },
    plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md']), tsconfigPaths()],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [ nxViteTsPaths() ],
    // },
    build: {
      outDir: '../../dist/apps/acclaimify',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
        include: [/node_modules/],
      },
      rollupOptions: {
        external: [],
      },
    },
    define: {
      'process.env': env, // allows access to process.env in code
    }
  }
});
