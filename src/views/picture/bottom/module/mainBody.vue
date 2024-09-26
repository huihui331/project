<template>
  <div class="main">
    <!-- 主体选项卡内容 -->
    <div class="toolbox">
      <!-- 大小标题输入框 -->
      <div class="text-inputs">
        <input
          type="text"
          name="title"
          id="title-input"
          placeholder="Title"
          :value="pictureStore.title"
          @input="changeTitle(($event.target as HTMLInputElement).value)"
          aria-label="Title"
        />
        <input
          type="text"
          name="subtitle"
          id="subtitle-input"
          placeholder="Subtitle"
          value="小标题"
          aria-label="Subtitle"
        />
      </div>
      <!-- 长、宽输入框，padding滑块 -->
      <div class="size-inputs">
        <div>
          <label for="width-input">宽度：</label>
          <input
            type="text"
            name="width-input"
            id="width-input"
            placeholder="Width"
            value="300"
          />
        </div>
        <div>
          <label for="height-input">高度：</label>
          <input
            type="text"
            name="height-input"
            id="height-input"
            placeholder="Height"
            value="200"
          />
        </div>
        <div>
          <label for="paddings-input">内边距：</label>
          <input
            type="range"
            name="paddings-input"
            id="paddings-input"
            placeholder="Paddings"
            value="25"
            min="5"
            max="100"
          />
          <output for="paddings-input">25</output>
        </div>
      </div>
      <!-- 颜色选择器：背景色 + 大标题颜色 +  小标题颜色-->
      <div class="color-selectors-container">
        <div>
          <label for="title-color-selector">大标题颜色：</label>
          <input
            type="color"
            id="title-color-selector"
            name="title-color-selector"
            value="#FFFFFF"
          />
          <br />
          <br />
        </div>
        <div>
          <label for="main-bg-color-selector">背景颜色：</label>
          <input
            type="color"
            id="main-bg-color-selector"
            name="main-bg-color-selector"
            value="#4078C0"
          />
          <br />
          <br />
        </div>
        <div>
          <label for="subtitle-color-selector">小标题颜色：</label>
          <input
            type="color"
            id="subtitle-color-selector"
            name="subtitle-color-selector"
            value="#FFFFFF"
          />
          <br />
          <br />
        </div>
      </div>
      <!-- 图片中文字的排版：居左、居中、居右 -->
      <div class="align-buttons">
        文字对齐：
        <button
          type="button"
          class="left-align-button btn"
          aria-label="Left align button"
          data-align-value="flex-start"
        >
          <img
            src="../../../../assets/images/icons/left-align.svg"
            width="24"
            height="24"
            alt="Left align button"
          />
          <br />
        </button>
        <button
          type="button"
          class="center-align-button btn"
          aria-label="Center align button"
          data-align-value="center"
        >
          <img
            src="../../../../assets/images/icons/center-align.svg"
            width="24"
            height="24"
            alt="Center align button"
          />
          <br />
        </button>
        <button
          type="button"
          class="right-align-button btn"
          aria-label="Right align button"
          data-align-value="flex-end"
        >
          <img
            src="../../../../assets/images/icons/right-align.svg"
            width="24"
            height="24"
            alt="Right align button"
          />
          <br />
        </button>
      </div>
      <!-- 大小标题的字体类型 -->
      <div class="font-selectors-container">
        <!-- 大标题字体类型 -->
        <div>
          <label for="title-font-selector">大标题字体：</label>
          <select name="title-font-selector" id="title-font-selector">
            <option v-for="item in allTitleFont" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
        <!-- 小标题字体类型 -->
        <div>
          <label for="subtitle-font-selector">小标题字体：</label>
          <select name="subtitle-font-selector" id="subtitle-font-selector">
            <option v-for="item in allSutitleFont" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <!-- 标题文字大小调节： 大标题 + 小标题-->
      <div class="font-size-inputs">
        <div>
          <label for="title-font-size-input">大标题字体大小：</label>
          <input
            type="range"
            name="title-font-size-input"
            id="title-font-size-input"
            placeholder="Title font size"
            value="40"
            min="5"
            max="150"
          />
          <output for="title-font-size-input">40</output>
        </div>
        <div>
          <label for="sutitle-font-size-input">小标题字体大小：</label>
          <input
            type="range"
            name="sutitle-font-size-input"
            id="sutitle-font-size-input"
            placeholder="Subitle font size"
            value="20"
            min="5"
            max="150"
          />
          <output for="sutitle-font-size-input">20</output>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 引入数据仓库
import usePictureStore from '@/stores/picture'

// 大标题的所有字体类型
let allTitleFont = ref<string[]>([
  'Red Hat Display',
  'Kalam',
  'Poppins',
  'Athiti',
  'MavenPro',
  'Ubuntu',
  'IstokWeb',
  'Courgette',
  'Quattrocento',
  'DellaRespira',
  'Lato',
  'Martel',
  'Lancelot',
  'Playball',
  'LifeSavers',
  'Arial',
  'Verdana',
  'Tahoma',
  'Trebuchet MS',
  'Garamond',
  'Courier New',
  'Brush Script MT',
])
// 小标题的所有字体类型
let allSutitleFont = ref<string[]>([
  'Kalam',
  'Red Hat Display',
  'Poppins',
  'Athiti',
  'MavenPro',
  'Ubuntu',
  'IstokWeb',
  'Courgette',
  'Quattrocento',
  'DellaRespira',
  'Lato',
  'Martel',
  'Lancelot',
  'Playball',
  'LifeSavers',
  'Arial',
  'Verdana',
  'Tahoma',
  'Trebuchet MS',
  'Garamond',
  'Courier New',
  'Brush Script MT',
  '',
  '',
  '',
])

// 创建仓库实例
let pictureStore = usePictureStore()

// 改变大标题
function changeTitle(title: string) {
  pictureStore.title = title
}
</script>

<style scoped lang="scss">
// 手机端
.main {
  // 主体选项卡下方展示区域
  padding: 15px;
  .toolbox {
    box-sizing: border-box;

    > div {
      display: flex;
      align-items: center;
      justify-content: start;
      // justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 15px;
    }

    // 大小标题输入框
    .text-inputs {
      justify-content: space-between;

      input {
        width: 100%;
        text-align: center;

        &:last-child {
          margin: 6px 0px;
        }
      }
    }

    // 长、宽输入框，padding滑块
    .size-inputs {
      > div {
        &:not(:last-child) {
          margin-right: 15px;
        }
        input {
          width: 70px;
          margin-left: 5px;
          margin-bottom: 10px;
        }
      }

      .paddings-input {
        width: 100px;
      }
    }

    // 颜色选择器：背景色 + 大标题颜色 +  小标题颜色
    .color-selectors-container {
      // background-color: skyblue;
      div {
        display: flex;
        align-items: center;
        margin-bottom: 5px;

        &:not(:last-child) {
          margin-right: 15px;
        }
        input {
          margin-left: 5px;
          cursor: pointer;
          padding: 0;
        }
      }
    }

    // 图片中文字的排版：居左、居中、居右
    .align-buttons {
      button {
        margin-left: 5px;
      }
    }

    // 大小标题的字体类型
    .font-selectors-container {
      div {
        margin-bottom: 10px;

        &:not(:last-child) {
          margin-right: 15px;
        }

        input {
          margin-left: 5px;
        }
      }

      select {
        cursor: pointer;
        margin-left: 5px;

        option {
          color: black;
        }
      }
    }

    // 标题文字大小调节： 大标题 + 小标题
    .font-size-inputs {
      display: flex;

      div {
        display: flex;
        align-items: flex-start;
        margin-bottom: 10px;

        &:not(:last-child) {
          margin-right: 15px;
        }

        input {
          cursor: pointer;
        }
      }
    }
  }
}

// 电脑端
@media screen and (min-width: 768px) {
  .main {
    padding: 15px 15px 5px 15px;
    .toolbox {
      > div {
        justify-content: center;
      }

      .text-inputs {
        input {
          width: calc(50% - 7.5px);
          &:first-child {
            margin-right: 15px;
          }
        }
      }

      .size-inputs {
        > div {
          input {
            margin-bottom: 0px;
          }
        }
      }

      .color-selectors-container {
        div {
          margin-bottom: 0px;
        }
      }

      .font-selectors-container {
        div {
          margin-bottom: 0px;
        }
      }

      .font-size-inputs {
        div {
          margin-top: 10px;
          margin-bottom: 0px;
        }
      }
    }
  }
}
</style>
