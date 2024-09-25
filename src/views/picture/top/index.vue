<template>
  <div class="result-box dark-mode">
    <!-- 上方图片 -->
    <div
      class="header-image-container"
      style="
        width: 100%;
        filter: drop-shadow(0px 0px 5px rgba(125, 125, 125, 0.5));
      "
    >
      <div
        id="github-header-image"
        style="
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
        "
      >
        <div class="title" style="font-size: 40px">Hey! I am ...</div>
        <div class="subtitle" style="font-size: 20px; font-family: 'Kalam'">
          Fullstack developer
        </div>
        <div class="img-decoration-container"></div>
      </div>
    </div>
    <!-- 下方按钮 -->
    <div class="options-container">
      <button type="button" class="dark-mode-button">深色模式</button>
      <button type="button" class="randomize-button">随机</button>
      <button type="button" class="download-button">下载</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.result-box {
  padding: var(--paddings);
  border-radius: 10px 10px 0px 0px;
  background: var(--github-dark-mode-color);
  transition: 0.5s ease;

  &.light-mode {
    background: var(--github-light-mode-color);
  }

  #github-header-image {
    margin: 0 auto;
    border: none;
    overflow: hidden;
    background-size: 100px;
    transition: 0.25s ease;

    .title,
    .subtitle {
      transition: 0.25s ease;
    }

    img {
      transition: 0.15s;
    }
  }

  .options-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: var(--paddings) 0 0 0;

    button {
      width: 155px;
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

      &:not(:last-child) {
        margin-right: 15px;
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
</style>
