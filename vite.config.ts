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
      minify: false, 
      outDir: path.resolve('./crx'),
      assetsDir: './', 
      rollupOptions: {
        inlineDynamicImports: true, 
        input: {
          main: resolve(__dirname, 'src/popup.html'),
          background: resolve(__dirname, 'src/background.js'),
          job_management: resolve(__dirname, 'src/modules/guopin/job_management.ts'),
          guopin_home: resolve(__dirname, 'src/modules/guopin/guopin_home.ts'),
          social_recruitment: resolve(__dirname, 'src/modules/guopin/social_recruitment.ts'),
          school_recruitment: resolve(__dirname, 'src/modules/guopin/school_recruitment.ts'),
          resume_home: resolve(__dirname, 'src/modules/guopin/resume_home.ts'),
          new_career_home: resolve(__dirname, 'src/modules/24365/new_career_home.ts'),
          new_career_collect: resolve(__dirname, 'src/modules/24365/new_career_collect.ts'),
          new_career_checkout: resolve(__dirname, 'src/modules/24365/new_career_checkout.ts'),
          publish_school_job: resolve(__dirname, 'src/modules/nuike/publish_school_job.ts'),
          nuike_collect_resumes: resolve(__dirname, 'src/modules/nuike/nuike_collect_resumes.ts'),
          shixiseng_publish_practice_job: resolve(__dirname, 'src/modules/shixiseng/shixiseng_publish_practice_job.ts'),
          shixiseng_publish_school_job: resolve(__dirname, 'src/modules/shixiseng/shixiseng_publish_school_job.ts'),
          shixiseng_collect_resumes: resolve(__dirname, 'src/modules/shixiseng/shixiseng_collect_resumes.ts'),
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
