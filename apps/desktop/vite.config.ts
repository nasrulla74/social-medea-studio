import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import path from 'node:path';
import electron from 'vite-plugin-electron/simple';
import react from '@vitejs/plugin-react';

import {
  developmentCSP,
  productionCSP,
} from './config/security/csp';

export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  plugins: [
    {
      name: 'social-medea-content-security-policy',

      transformIndexHtml: {
        order: 'pre',

        handler() {
          const policy = command === 'serve'
            ? developmentCSP
            : productionCSP;

          return [
            {
              tag: 'meta',
              attrs: {
                'http-equiv': 'Content-Security-Policy',
                content: policy,
              },
              injectTo: 'head-prepend',
            },
          ];
        },
      },
    },

    react(),
    tailwindcss(),

    electron({
      main: {
        entry: 'electron/main.ts',
      },

      preload: {
        input: path.join(__dirname, 'electron/preload.ts'),
      },
    }),
  ],
}));
