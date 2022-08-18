import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = path;
// 是否为开发环境
// const isDev = process.env.BUILD_ENV === 'development';

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
      minify: false,
      outDir: path.resolve('./crx'),
      assetsDir: './', 
      rollupOptions: {
        inlineDynamicImports: true, 
        input: {
          main: resolve(__dirname, 'src/popup.html'),
          background: resolve(__dirname, 'src/background.js'),
          contants: resolve(__dirname, 'src/contants/guopin/contants.js'),
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
