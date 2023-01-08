import type { Ref } from 'vue'
import type { Store } from '@/stores/types'
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
 * store 主题
 */
const useStoreTheme = defineStore(
  'storeTheme',
  () => {
    const theme: Ref<Store.StoreTheme> = ref({})

    const getStoreTheme = computed(() => theme.value)

    function updateStoreTheme(data: Store.StoreTheme) {
      theme.value = { ...theme.value, ...data }
    }

    return { theme, getStoreTheme, updateStoreTheme }
  },
  {
    persist: {
      storage: localStorage,
    },
  },
)

export { useStoreTheme }
