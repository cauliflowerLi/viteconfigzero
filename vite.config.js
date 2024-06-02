// vite.config.js 或 vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      rollupOptions: {
        output: {
          // 对静态资源进行单独打包
          assetFileNames: 'static/[ext]/[name].[hash].[ext]',
          // 对项目依赖进行单独打包
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vandor'
            }
          }
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  })