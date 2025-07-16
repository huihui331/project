<template>
  <div class="picture">
    <!-- 上方图片展示区域 -->
    <Top></Top>
    <!-- 下方设置展示区域 -->
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

  &::-webkit-scrollbar {
    width: 0.4em;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.75);
    //
  }
}

// 电脑端
@media screen and (min-width: 768px) {
  .picture {
    height: 95vh;
  }
}
</style>
