import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 命名规则：
 * 数据字段如: test
 * 方法名则为： useStoreTest
 * getter方法名则为： getStoreTest
 * actions方法名则为： updateStoreTest
 */
//
/**
 * store 语言
 */
const useStoreLanguage = defineStore(
  'storeLanguage',
  () => {
    const language = ref('zhCn')

    const getStoreLanguage = computed(() => language.value)

    function updateStoreLanguage(data: string) {
      language.value = data
    }

    return { language, getStoreLanguage, updateStoreLanguage }
  },
  {
    persist: process.client && {
      storage: sessionStorage,
    },
  },
)

export { useStoreLanguage }
