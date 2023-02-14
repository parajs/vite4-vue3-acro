import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      eslintrc: {
        enabled: true, // Default `false`
      },
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n', '@vueuse/core'],

      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: [
        './src/stores',
        './src/stores/**',
        './src/composables',
        './src/composables/**',
        './src/router',
        // './composables' // only root modules
        // './composables/**', // all nested modules
        // ...
      ],

    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true
        })
      ]
    }),
    VueI18nPlugin({ /* options */ }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
