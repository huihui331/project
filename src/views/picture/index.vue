<template>
  <div class="picture">
    <Top></Top>
    <Bottom></Bottom>
  </div>
</template>

<script setup lang="ts">
import Top from './top/index.vue'
import Bottom from './bottom/index.vue'
</script>

<style scoped lang="scss">
// 手机端
.picture {
  // grid-area: section2;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.25);
  overflow: auto;
}
</style>
