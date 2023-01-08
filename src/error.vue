<template>
  <div class="error">
    <div class="img-wrapper">
      <Exception-404 v-if="error.statusCode === '404'" />
      <Exception-500 v-if="error.statusCode === '500'" />
    </div>
    <div class="title">{{ error.statusCode }}</div>
    <div class="desc">
      {{ isDev ? error.message : errorTip }}
    </div>
    <code v-if="isDev && error.stack" class="stack-wrapper" v-html="error.stack"> </code>
    <div class="button-wrapper">
      <el-button type="primary" @click="onClickButton">{{ buttonText }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'

import { getIsDev } from '@/utils/get'

const props = defineProps({
  error: {
    type: Object,
    default: () => {
      return {
        message: '',
        stack: '',
        statusCode: '',
        statusMessage: '',
        url: '',
      }
    },
  },
})

const router = useRouter()
// 当前环境是否为开发环境
const isDev = getIsDev()

// 错误提示
const errorTip = computed(() => {
  let str = ''
  const { statusCode } = props.error

  switch (statusCode) {
    case '403':
      str = '抱歉，您无权访问此页面。'
      break
    case '404':
      str = '抱歉，您访问的页面不存在。'
      break
    case '500':
      str = '抱歉，服务器报告错误。'
      break
    case '5001':
      str = '抱歉，您的网络连接已断开，请检查您的网络！'
      break
    case '5002':
      str = '抱歉，当前页面暂无数据！'
      break
    default:
      str = '未知错误'
      break
  }

  return str
})

// 按钮文字
const buttonText = computed(() => {
  let str = ''
  const { statusCode } = props.error

  switch (statusCode) {
    case '403':
      str = '返回首页'
      break
    case '404':
      str = '返回首页'
      break
    case '500':
      str = '返回首页'
      break
    case '5001':
      str = '刷新'
      break
    case '5002':
      str = '刷新'
      break
    default:
      str = '返回首页'
      break
  }

  return str
})

// 错误处理
const onClickButton = () => {
  const { statusCode } = props.error

  switch (statusCode) {
    case '403':
      break
    case '404':
      router.push('/')
      break
    case '500':
      clearError({ redirect: '/' })
      break
    case '5001':
      break
    case '5002':
      break
    default:
      break
  }
}
</script>

<style lang="scss" scoped>
.error {
  width: 100%;
  min-height: 100%;
  padding: 48px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .img-wrapper {
    padding-bottom: 24px;
  }
  .title {
    color: #000000d9;
    font-size: 24px;
    line-height: 1.8;
    text-align: center;
  }
  .desc {
    color: #00000073;
    font-size: 14px;
    line-height: 1.6;
    text-align: center;
  }
  .stack-wrapper {
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    :deep(> pre) {
      $color: #333;
      background-color: #fff;
      color: $color;
      font-family: Consolas;
      text-align: left;
      padding: 1em;
      padding-left: 0.8em;
      margin: 1em auto;
      border-radius: 5px;
      counter-reset: line;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.4;
      span {
        display: block;
        line-height: 1.4;
        white-space: pre;
        &::before {
          counter-increment: line;
          content: counter(line);
          display: inline-block;
          width: 2em;
          text-align: right;
          border-right: 2px solid $color;
          padding-right: 0.8em;
          margin-right: 1em;
          color: rgb(237, 50, 50);
        }
      }
    }
  }
  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 24px;
  }
}
</style>
