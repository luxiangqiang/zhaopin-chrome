import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = path;

// 服务器地址
// const SERVER_URL = process.env.VUE_APP_PROXY_API_TARGET;

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // build/dev
  return {
    root: './src',
    base: './',
    mode: 'development' ,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    build: {
      minify: false, // "terser"
      outDir: path.resolve('./crx'),
      assetsDir: './', 
      rollupOptions: {
        inlineDynamicImports: true, 
        input: {
          main: resolve(__dirname, 'src/popup.html'),
          background: resolve(__dirname, 'src/background.js'),
          common: resolve(__dirname, 'src/modules/common.ts'),
          job_management: resolve(__dirname, 'src/modules/guopin/job_management.ts'),
          guopin_home: resolve(__dirname, 'src/modules/guopin/guopin_home.ts'),
          jquery: resolve(__dirname, 'src/utils/jquery.js'),
        },
        output: {
          assetFileNames: "[name].[ext]",
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
        },
      },
    },
    plugins: [
      vue(),
    ]
  }
})
