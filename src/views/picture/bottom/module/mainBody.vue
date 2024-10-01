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
          placeholder="大标题"
          :value="pictureStore.title"
          @input="changeTitle(($event.target as HTMLInputElement).value)"
          aria-label="Title"
          autocomplete="off"
        />
        <input
          type="text"
          name="subtitle"
          id="subtitle-input"
          placeholder="小标题"
          :value="pictureStore.subtitle"
          @input="changeSubtitle(($event.target as HTMLInputElement).value)"
          aria-label="Subtitle"
          autocomplete="off"
        />
      </div>
      <!-- 图片宽度、高度输入框，padding滑块 -->
      <div class="size-inputs">
        <!-- 宽度输入框 -->
        <div>
          <label for="width-input">宽度：</label>
          <input
            type="text"
            name="width-input"
            id="width-input"
            placeholder="宽度"
            :value="pictureStore.width"
            @input="changeWidth(($event.target as HTMLInputElement).value)"
          />
        </div>
        <!-- 高度输入框 -->
        <div>
          <label for="height-input">高度：</label>
          <input
            type="text"
            name="height-input"
            id="height-input"
            placeholder="高度"
            :value="pictureStore.height"
            @input="changeHeight(($event.target as HTMLInputElement).value)"
          />
        </div>
        <!-- 内边距滑块 -->
        <div>
          <label for="paddings-input">内边距：</label>
          <input
            type="range"
            name="paddings-input"
            id="paddings-input"
            placeholder="图片内边距"
            :value="pictureStore.padding"
            @input="changePadding(($event.target as HTMLInputElement).value)"
            min="5"
            max="100"
          />
          <output for="paddings-input">{{ pictureStore.padding }}</output>
        </div>
      </div>
      <!-- 颜色选择器：大标题颜色 + 背景色 + 小标题颜色-->
      <div class="color-selectors-container">
        <!-- 大标题颜色 -->
        <div>
          <label for="title-color-selector">大标题颜色：</label>
          <input
            type="color"
            id="title-color-selector"
            name="title-color-selector"
            :value="pictureStore.titleColor"
            @input="changeTitleColor(($event.target as HTMLInputElement).value)"
          />
          <br />
          <br />
        </div>
        <!-- 背景色 -->
        <div>
          <label for="main-bg-color-selector">背景颜色：</label>
          <input
            type="color"
            id="main-bg-color-selector"
            name="main-bg-color-selector"
            :value="pictureStore.backgroundColor"
            @input="
              changeBackgroundColor(($event.target as HTMLInputElement).value)
            "
          />
          <br />
          <br />
        </div>
        <!-- 小标题颜色 -->
        <div>
          <label for="subtitle-color-selector">小标题颜色：</label>
          <input
            type="color"
            id="subtitle-color-selector"
            name="subtitle-color-selector"
            :value="pictureStore.subtitleColor"
            @input="
              changeSubtitleColor(($event.target as HTMLInputElement).value)
            "
          />
          <br />
          <br />
        </div>
      </div>
      <!-- 图片中文字的排版：居左、居中、居右 -->
      <div class="align-buttons">
        文字对齐：
        <!-- aria-label：为辅助技术（如屏幕阅读器）提供元素的标签或说明 -->
        <!-- 屏幕阅读器：它通过语音或触觉返回（如盲文显示器）将屏幕上的文本信息传达给用户。当用户遇到带有aria-label属性的元素时，屏幕阅读器会读取该属性的值，而不是元素的默认文本内容或标签 -->
        <!-- data-align-value：自定义属性，可能用户存储或表示按钮的当前状态或与之关联的值，在这里可能主要用于展示信息或者JavaScript中的某些逻辑判断，而不是直接改变对齐方式 -->
        <button
          type="button"
          class="left-align-button btn"
          aria-label="标题左对齐"
          data-align-value="flex-start"
          @click="changeTextAlign('flex-start')"
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
          aria-label="标题居中"
          data-align-value="center"
          @click="changeTextAlign('center')"
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
          aria-label="标题右对齐"
          data-align-value="flex-end"
          @click="changeTextAlign('flex-end')"
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
          <select
            name="title-font-selector"
            id="title-font-selector"
            @change="changeTitleFont(($event.target as HTMLInputElement).value)"
          >
            <option
              v-for="item in allTitleFont"
              :key="item"
              :value="item"
              :selected="item == pictureStore.titleFont"
            >
              {{ item }}
            </option>
          </select>
        </div>
        <!-- 小标题字体类型 -->
        <div>
          <label for="subtitle-font-selector">小标题字体：</label>
          <select
            name="subtitle-font-selector"
            id="subtitle-font-selector"
            @change="
              changeSubtitleFont(($event.target as HTMLInputElement).value)
            "
          >
            <option
              v-for="item in allSutitleFont"
              :key="item"
              :value="item"
              :selected="item == pictureStore.subtitleFont"
            >
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
            placeholder="大标题字体大小"
            :value="pictureStore.titleSize"
            @input="changeTitleSize(($event.target as HTMLInputElement).value)"
            min="5"
            max="150"
          />
          <output for="title-font-size-input">
            {{ pictureStore.titleSize }}
          </output>
        </div>
        <div>
          <label for="sutitle-font-size-input">小标题字体大小：</label>
          <input
            type="range"
            name="sutitle-font-size-input"
            id="sutitle-font-size-input"
            placeholder="小标题字体大小"
            :value="pictureStore.subtitleSize"
            @input="
              changeSubtitleSize(($event.target as HTMLInputElement).value)
            "
            min="5"
            max="150"
          />
          <output for="sutitle-font-size-input">
            {{ pictureStore.subtitleSize }}
          </output>
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
])

// 创建仓库实例
let pictureStore = usePictureStore()

// 改变图片大标题
function changeTitle(title: string) {
  pictureStore.title = title
}

// 改变图片小标题
function changeSubtitle(subtitle: string) {
  pictureStore.subtitle = subtitle
}

// 改变图片宽度
function changeWidth(width: string) {
  pictureStore.width = width
}

// 改变图片高度
function changeHeight(height: string) {
  pictureStore.height = height
}

// 改变图片内边距
function changePadding(padding: string) {
  pictureStore.padding = padding
}

// 改变图片大标题颜色
function changeTitleColor(titleColor: string) {
  pictureStore.titleColor = titleColor
}

// 改变图片背景颜色
function changeBackgroundColor(backgroundColor: string) {
  pictureStore.backgroundColor = backgroundColor
}

// 改变图片小标题颜色
function changeSubtitleColor(subtitleColor: string) {
  pictureStore.subtitleColor = subtitleColor
}

// 改变标题对齐方式
function changeTextAlign(textAlign: string) {
  pictureStore.textAlign = textAlign
}

// 改变大标题字体类型
function changeTitleFont(titleFont: string) {
  pictureStore.titleFont = titleFont
}

// 改变小标题字体类型
function changeSubtitleFont(subtitleFont: string) {
  pictureStore.subtitleFont = subtitleFont
}

// 改变大标题字体大小
function changeTitleSize(titleSize: string) {
  pictureStore.titleSize = titleSize
}

// 改变小标题大小
function changeSubtitleSize(subtitleSize: string) {
  pictureStore.subtitleSize = subtitleSize
}

// 监视仓库里的textAlign，当排版为居中的时候，图片里要出现两个装饰小图，给decorationImg里面再添加
</script>

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
// 手机端
.main {
  // 主体选项卡下方展示区域
  padding: 15px;
  animation: fadeEffect 1s; /* 透明度动画时长1s */

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
    padding: 12px 15px 5px 15px;
    .toolbox {
      > div {
        justify-content: center;
      }

      // 大小标题输入框
      .text-inputs {
        input {
          width: calc(50% - 7.5px);
          &:first-child {
            margin-right: 15px;
          }
        }
      }

      // 图片宽度、高度输入框，padding滑块
      .size-inputs {
        margin-bottom: 10px;
        > div {
          margin-bottom: 10px;
          input {
            margin-bottom: 0px;
          }
        }
      }

      // 颜色选择器：大标题颜色 + 背景色 + 小标题颜色
      .color-selectors-container {
        div {
          margin-bottom: 0px;
        }
      }

      // 图片中文字的排版
      .align-buttons {
      }

      // 大小标题的字体类型
      .font-selectors-container {
        div {
          margin-bottom: 5px;
          margin-right: 15px;
        }
      }

      // 标题文字大小调节：大标题 + 小标题
      .font-size-inputs {
        div {
          margin-right: 15px;
          margin-top: 0px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
