<template>
  <div class="error">error</div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
  },
})

console.log(props, 987)
</script>

<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100%;
}
</style>
