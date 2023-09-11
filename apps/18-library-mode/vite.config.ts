import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { qwikNxVite } from 'qwik-nx/plugins';
import dts from 'vite-plugin-dts';


export default defineConfig({
  build: {
    target: 'es2020',
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format: string) => `index.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    outDir: './dist'
  },
  cacheDir: '../../node_modules/.vite/apps/18-library-mode',
  plugins: [
    qwikNxVite(),
    qwikCity(),
    qwikVite({
      client: {
        outDir: '../../dist/apps/18-library-mode/client',
      },
      ssr: {
        outDir: '../../dist/apps/18-library-mode/server',
      },
    }),
    tsconfigPaths({ root: '../../' }),
    dts()
  ],
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['../../'],
    },
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
