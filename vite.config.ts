import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = path;
// 是否为开发环境
const isDev = process.env.BUILD_ENV === 'development';

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  base: './',
  mode: isDev ? 'development' : 'production',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    minify: isDev ? false : 'terser', 
    outDir: path.resolve('./crx'),
    assetsDir: './', 
    rollupOptions: {
      inlineDynamicImports: true, 
      input: {
        main: resolve(__dirname, 'src/popup.html'),
        content: resolve(__dirname, 'src/content/content.ts'),
        background: resolve(__dirname, 'src/background.js'),
        guopin_home: resolve(__dirname, 'src/popup/guopin_home.js'),
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
})
