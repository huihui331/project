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
    #6e5494 0%,
    #605fa1 32.6%,
    #4e6db3 68.54%,
    #4078c0 100%
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
    padding: 50px 15px 120px 15px;
  }
}
// 电脑端
@media screen and (min-width: 768px) {
  .app {
    display: flex;
    justify-content: space-around;
    .left {
      .footer {
        position: relative;
        left: 0;
        bottom: -100px;
        bottom: 0px;
      }
    }
    .right {
      padding-bottom: 0px;
    }
  }
}
</style>
