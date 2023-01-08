import { createI18n } from 'vue-i18n'

import messages from '@/locales'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn',
  missingWarn: false,
  fallbackWarn: false,
  messages,
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n)
})
