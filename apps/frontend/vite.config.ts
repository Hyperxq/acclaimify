import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { defineConfig, loadEnv } from 'vite';
import path from 'path';

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
    cacheDir: '../../node_modules/.vite/apps/frontend',
    server: {
      port: 4200,
      host: 'localhost',
    },
    preview: {
      port: 4300,
      host: 'localhost',
    },
    plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components/index.ts'),
        '@consts': path.resolve(__dirname, 'src/consts/index.ts'),
        '@contexts': path.resolve(__dirname, 'src/contexts/index.ts'),
        '@enums': path.resolve(__dirname, 'src/enums/index.ts'),
        '@hooks': path.resolve(__dirname, 'src/hooks/index.ts'),
        '@interceptors': path.resolve(__dirname, 'src/interceptors/index.ts'),
        '@pages': path.resolve(__dirname, 'src/pages/index.ts'),
        '@providers': path.resolve(__dirname, 'src/providers/index.ts'),
        '@services': path.resolve(__dirname, 'src/services/index.ts'),
        '@types': path.resolve(__dirname, 'src/types/index.ts'),
        '@utilities': path.resolve(__dirname, 'src/utilities/index.ts'),
        '@acclaimify/ui-components': path.resolve(__dirname, '../../ui-components/src/index.ts'),
      },
    },
    build: {
      outDir: '../../dist/apps/frontend',
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
