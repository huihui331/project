<template>
  <div class="app">
    <div class="left">
      <Introduce></Introduce>
      <div class="footer">
        <Filings></Filings>
      </div>
    </div>
    <div class="right">
      <Picture></Picture>
    </div>
  </div>
</template>

<script setup lang="ts">
import Introduce from './views/introduce/index.vue'
import Picture from './views/picture/index.vue'
import Filings from './views/filings/index.vue'
</script>

<style lang="scss">
// 手机端
.app {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(18, 18, 22, 1) 0%,
    rgba(22, 23, 26, 1) 8.333%,
    rgba(26, 27, 31, 1) 16.667%,
    rgba(31, 32, 35, 1) 25%,
    rgba(35, 36, 39, 1) 33.333%,
    rgba(39, 40, 43, 1) 41.667%,
    rgba(43, 44, 47, 1) 50%,
    rgba(47, 48, 51, 1) 58.333%,
    rgba(50, 51, 55, 1) 66.667%,
    rgba(54, 55, 58, 1) 75%,
    rgba(56, 57, 61, 1) 83.333%,
    rgba(59, 60, 64, 1) 91.667%,
    rgba(61, 62, 66, 1) 100%
  );
  .left {
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0px;
      bottom: 0px;
      margin-bottom: 30px;
      width: 100%;
    }
  }

  .right {
    padding: 50px 18px 120px 18px;
  }
}
// 电脑端
@media screen and (min-width: 768px) {
  .app {
    display: flex;
    justify-content: center;
    .left {
      flex: 1;
      margin-left: 60px;
      // background-color: rgb(168, 215, 234);
      .footer {
        position: relative;
        left: 0;
        bottom: -100px;
      }
    }
    .right {
      flex: 1.5;
      margin-right: 100px;
      padding: 25px 15px 0px 15px;
      // background-color: rgb(240, 200, 207);
    }
  }
}
</style>
