<template>
  <div class="use-element-plus">
    <div class="demo-title">语言切换与使用</div>

    <div class="demo-content">
      <div class="demo-content-row">
        使用：
        <br />
        {{ useI18nT(text) }}
      </div>
      <div class="demo-content-row">
        组件切换示例：
        <br />
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
      </div>
    </div>
    <div class="demo-toolbar">
      <el-button @click="handleChangeLanguage('zh-cn')">中文</el-button>
      <el-button type="primary" @click="handleChangeLanguage('en')">英文</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useStoreLanguage } from '@/stores/modules'

const { t: useI18nT, locale } = useI18n()
const storeLanguage = useStoreLanguage()

const value1 = ref('')
const text = ref('testMessage.userName')

const handleChangeLanguage = (type: string) => {
  locale.value = type
  storeLanguage.updateStoreLanguage(type)
}
</script>

<style lang="scss" scoped>
.use-element-plus {
  width: 100%;
}
</style>
