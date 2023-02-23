import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vitePluginForArco from '@arco-plugins/vite-vue'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
// https://vitejs.dev/config/


export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const { VITE_API_PREFIX, VITE_BASE_URL } = env
  console.log(env)
  return {
    server: {
      host: '0.0.0.0', // 解决不能通过ip访问
      proxy: {
        [VITE_API_PREFIX]: {
          target: VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        // '/ws': {
        //   target: 'http://api.beehub.paradeum.com',
        //   ws: true
        // }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      vitePluginForArco({
        theme: '@arco-themes/vue-pldd',
        style: 'css'
      }),
      mockDevServerPlugin({
        include: 'mocks/**/*.mock.{ts,js,cjs,mjs,json,json5}',
        formidableOptions: {
          // 配置上传资源存放目录
          uploadDir: fileURLToPath(new URL('./uploads', import.meta.url)),
          // 可修改上传资源名称
          // @ts-ignore
          filename: (name, ext, part) => {
            return part.originalFilename!
          },
        },
        build: true,
      }),
      AutoImport({
        eslintrc: {
          enabled: true, // Default `false`
        },
        imports: ['vue', 'vue-router', 'pinia', 'vue-i18n', '@vueuse/core'],

        // Auto import for module exports under directories
        // by default it only scan one level of modules under the directory
        dirs: [
          './src/stores/**',
          './src/composables/**',// all nested modules
          './src/utils/**',
          './src/apis/**',
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
