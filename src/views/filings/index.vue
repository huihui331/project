<template>
  <div class="filings">
    <!-- <a class="feedback-button" href="#feedback-modal">发送反馈</a> -->
    <a
      class="feedback-button"
      href="https://support.qq.com/products/678125"
      target="_blank"
    >
      发送反馈
    </a>
    <!-- <div class="icons">
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        京ICP备2020036163号-1
      </a>
    </div> -->
  </div>
  <!-- <div class="feedback">
    <Feedback v-if="isFeedback"></Feedback>
  </div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Feedback from '../feedback/index.vue'

let isFeedback = ref<boolean>(true)
</script>

<style scoped lang="scss">
.filings {
  grid-area: footer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: flex;

    > a {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      text-decoration: none;
      color: var(--text-color);

      &:hover {
        text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
      }

      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
  .feedback-button {
    background-color: #6e5494;
    box-shadow: 1px 1px 0px rgb(0 0 0 / 20%);
    line-height: 35px !important;
    min-width: 135px;
    display: inline-block !important;
    padding: 2px 12px !important;
    text-align: center !important;
    border-radius: 7px;
    color: #fff;
    cursor: pointer;
    overflow-wrap: break-word;
    vertical-align: middle;
    border: 0 none #fff !important;
    // font-family: 'Quicksand', Helvetica, Century Gothic, sans-serif !important;
    text-decoration: none;
    text-shadow: none;
    font-size: 16px !important;
  }
}

// .feedback {
//   position: fixed;
//   left: 0;
//   right: 0;
//   background-color: skyblue;
// }
</style>
