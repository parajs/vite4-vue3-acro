import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/


export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  console.log(env)
  return {
    server: {
      host: '0.0.0.0', // 解决不能通过ip访问
      proxy: {
        '/api': {
          target: 'http://api.beehub.paradeum.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/ws': {
          target: 'http://api.beehub.paradeum.com',
          ws: true
        }
      }
    },
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
          './src/composables',// only root modules
          './src/composables/**',// all nested modules
          './src/router',
          './src/utils',
          './src/apis',
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
  }
})
