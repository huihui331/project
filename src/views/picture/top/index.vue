<template>
  <div :class="{ box: true, lightMode: ModeColor == true }">
    <!-- 上方制图 -->
    <div class="header-image-container">
      <!-- 图片，给类名为github-header-image的div标签添加背景图片,动态追加 -->
      <div class="github-header-image">
        <!-- 大标题 -->
        <div class="title">Hey! I am ...</div>
        <!-- 小标题 -->
        <div class="subtitle">Fullstack developer</div>
        <!-- 小图片 -->
        <div class="img-decoration-container"></div>
      </div>
    </div>
    <!-- 下方按钮 -->
    <div class="options-container">
      <button type="button" class="dark-mode-button" @click="changeModeColor">
        深色模式
      </button>
      <button type="button" class="randomize-button">随机</button>
      <button type="button" class="download-button">下载</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 是否开启浅色模式：true开启，false不开启（深色模式）
let ModeColor = ref<boolean>(false)

function changeModeColor() {
  ModeColor.value = !ModeColor.value
}
</script>

<style scoped lang="scss">
// 手机端
.box {
  padding: 15px;
  // 默认为深色模式
  background: var(--github-dark-mode-color);
  border-radius: 10px 10px 0px 0px;
  transition: 0.5s ease;

  // 上方图片
  .header-image-container {
    width: 100%;
    filter: drop-shadow(0px 0px 5px rgba(125, 125, 125, 0.5));
    .github-header-image {
      margin: 0 auto;
      border: none;
      overflow: hidden;
      background-size: 100px;
      width: 100%;
      height: 200px;
      padding: 25px;
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      background-color: #4078c0;
      color: white;
      border-radius: 7px;
      transition: 0.25s ease;

      .title,
      .subtitle {
        transition: 0.25s ease;
      }

      .title {
        font-size: 40px;
      }

      .subtitle {
        font-size: 20px;
        font-family: 'Courier New', Courier, monospace;
      }

      img {
        transition: 0.15s;
      }
    }
  }

  // 下方按钮
  .options-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 15px 0 0 0;

    button {
      width: 100%;
      height: 35px;
      border: 1px solid #ffffff;
      border-radius: var(--button-border-radius);
      color: var(--text-color);
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 600;
      transition: all 0.25s ease-in-out;

      &:hover {
        box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.25);
      }

      &:nth-child(2) {
        margin: 10px 0px;
      }
    }

    .dark-mode-button {
      background: #2e384d;
    }
    .download-button {
      background: #2d8655;
    }
    .randomize-button {
      background: #862d5a;
    }
  }
}
// 浅色模式
.lightMode {
  background: var(--github-light-mode-color);
}

// 电脑端
@media screen and (min-width: 768px) {
  .box {
    padding: var(--paddings);
    .options-container {
      padding: var(--paddings) 0 0 0;
      button {
        width: 155px;
        &:nth-child(2) {
          margin: 0px;
        }

        &:not(:last-child) {
          margin-right: 15px;
        }
      }
    }
  }
}
</style>
