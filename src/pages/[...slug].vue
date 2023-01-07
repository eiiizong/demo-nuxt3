<template>
  <div class="error">
    <div class="img-wrapper">
      <Component403 />
      <Component404 />
      <Component500 />
      <ComponentNetworkError />
      <ComponentNoData />
    </div>
    <div class="title">404</div>
    <div class="desc">
      <span>抱歉，您访问的页面不存在。</span>
      <!-- <span>抱歉，服务器报告错误。</span> -->
    </div>

    <div class="button-wrapper">
      <el-button type="primary">返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Component403 from '@/components/403/403.vue'
import Component404 from '@/components/404/404.vue'
import Component500 from '@/components/500/500.vue'
import ComponentNetworkError from '@/components/network-error/network-error.vue'
import ComponentNoData from '@/components/no-data/no-data.vue'

// console.log(props, 987)
</script>

<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100%;
  padding: 48px 32px;
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
  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 24px;
  }
}
</style>
