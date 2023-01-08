import * as ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

// import { getEnvData } from '@/utils/get'

const configProviderData = reactive({
  // 翻译文本对象
  locale: en || zhCn,
  // 全局组件大小  large / default /small
  size: 'large',
  // 全局初始化 zIndex 的值
  zIndex: 2000,
  // 全局组件类名称前缀 (需要配合 $namespace 使用)
  namespace: 'el',
  // 按钮相关的配置
  button: {
    // 自动在两个中文字符之间插入空格
    autoInsertSpace: false,
  },
  // 消息相关配置
  message: {
    // 可同时显示的消息最大数量
    max: 3,
  },
  // 添加的实验阶段的功能，所有功能都是默认设置为 false
  experimentalFeatures: {},
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus, configProviderData)
})
