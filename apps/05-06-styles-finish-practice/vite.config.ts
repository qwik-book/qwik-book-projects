import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { qwikNxVite } from 'qwik-nx/plugins';
import { vanillaExtractPlugin } from "styled-vanilla-extract/vite";

export default defineConfig({
  cacheDir: '../../node_modules/.vite/apps/05-06-styles-finish-practice',
  plugins: [
    qwikNxVite(),
    qwikCity(),
    qwikVite({
      client: {
        outDir: '../../dist/apps/05-06-styles-finish-practice/client',
      },
      ssr: {
        outDir: '../../dist/apps/05-06-styles-finish-practice/server',
      },
    }),
    tsconfigPaths({ root: '../../' }),
    vanillaExtractPlugin()
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
