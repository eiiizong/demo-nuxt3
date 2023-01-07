<template>
  <div class="use-pinia">
    <div class="demo-title">Pinia 使用示例</div>
    <div class="demo-content">用户名：{{ userInfo.userName }}</div>
    <div class="demo-toolbar">
      <el-button @click="storeUserInfo.updateStoreUserInfo({ userName: '测试' })">
        设置用户名
      </el-button>
      <el-button type="primary" @click="storeUserInfo.$reset()"> 清除用户名</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useStoreUserInfo } from '@/stores/modules'

const storeUserInfo = useStoreUserInfo()
const { userInfo } = toRefs(storeUserInfo)
</script>

<style lang="scss" scoped>
.use-element-plus {
  width: 100%;
}
</style>
