// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: './src',
  // 全局引入element-plus样式
  css: ['normalize.css/normalize.css', 'element-plus/dist/index.css'],
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  app: {
    head: {
      title: '蓉易贷',
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/styles/variables/_index.scss" as *;
        `,
        },
      },
    },
  },
})
