<template>
  <div class="main">装饰内容区域</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
/* 动画：透明度从 0 到 1 */
@keyframes fadeEffect {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.main {
  // 背景选项卡下方展示区域
  padding: 15px;
  animation: fadeEffect 1s; /* 透明度动画时长1s */
}
</style>
