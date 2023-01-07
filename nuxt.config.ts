// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: './src',
  // 全局引入element-plus样式
  css: ['element-plus/dist/index.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use  "@/assets/styles/default.scss" as *;',
        },
      },
    },
  },
})
