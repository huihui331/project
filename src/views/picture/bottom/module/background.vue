<template>
  <div class="main">
    <div class="toolbox-background">
      <!-- 背景颜色 + 边框颜色 -->
      <div class="bg-color-selectors">
        <!-- 背景颜色 -->
        <div>
          <label for="background-bg-color-selector">背景颜色：</label>
          <input
            type="color"
            id="background-bg-color-selector"
            name="background-bg-color-selector"
            :value="pictureStore.backgroundColor"
            @input="
              changeBackgroundColor(($event.target as HTMLInputElement).value)
            "
          />
          <br />
          <br />
        </div>
        <!-- 边框颜色 -->
        <div>
          <label for="border-color-selector">边框颜色：</label>
          <input
            type="color"
            id="border-color-selector"
            name="border-color-selector"
            :value="pictureStore.borderColor"
            @input="
              changeBorderColor(($event.target as HTMLInputElement).value)
            "
          />
          <br />
          <br />
        </div>
      </div>
      <!-- 边框 + 边框圆角 -->
      <div class="border-inputs">
        <!-- 边框： -->
        <div>
          <label for="border-input">边框大小：</label>
          <input
            type="range"
            name="border-input"
            id="border-input"
            :value="pictureStore.borderSize"
            @input="changeBorderSize(($event.target as HTMLInputElement).value)"
            min="0"
          />
          <output for="border-input">{{ pictureStore.borderSize }}</output>
        </div>
        <!-- 边框圆角 -->
        <div>
          <label for="border-radius-input">边框圆角：</label>
          <input
            type="range"
            name="border-radius-input"
            id="border-radius-input"
            :value="pictureStore.borderRadius"
            @input="
              changeBorderRadius(($event.target as HTMLInputElement).value)
            "
            min="0"
            max="200"
          />
          <output for="border-radius-input">
            {{ pictureStore.borderRadius }}
          </output>
        </div>
      </div>
      <!-- 花样颜色 + 花样大小 + 花样透明度 -->
      <div class="pattern-inputs">
        <!-- 花样颜色 -->
        <div>
          <label for="pattern-color-selector">花样颜色：</label>
          <input
            type="color"
            id="pattern-color-selector"
            name="pattern-color-selector"
            :value="pictureStore.patternsColor"
            @input="
              changePatternColor(($event.target as HTMLInputElement).value)
            "
          />
        </div>
        <!-- 花样大小 -->
        <div>
          <label for="pattern-size-input">花样大小：</label>
          <input
            type="range"
            name="pattern-size-input"
            id="pattern-size-input"
            :value="pictureStore.patternSize"
            @input="
              changePatternSize(($event.target as HTMLInputElement).value)
            "
            min="10"
            max="500"
          />
          <output for="pattern-size-input">
            {{ pictureStore.patternSize }}
          </output>
        </div>
        <!-- 花样透明度 -->
        <div>
          <label for="pattern-opacity-input">花样透明度：</label>
          <input
            type="range"
            name="pattern-opacity-input"
            id="pattern-opacity-input"
            step="0.05"
            width="50"
            :value="pictureStore.patternOpacity"
            @input="
              changePatternOpacity(($event.target as HTMLInputElement).value)
            "
            min="0"
            max="1"
          />
          <output for="pattern-opacity-input">
            <!-- 暴露小数点后两位 -->
            {{ parseFloat(pictureStore.patternOpacity).toFixed(2) }}
          </output>
        </div>
      </div>
      <!-- 花样 -->
      <div class="patterns-buttons">
        花样：
        <button
          type="button"
          class="btn"
          aria-label="none pattern button"
          data-pattern-value="none"
        >
          空白
        </button>
        <template v-for="item in patternsData" :key="item.id">
          <button
            type="button"
            class="btn"
            :aria-label="item.aria_label"
            :data-pattern-value="item.data_pattern_value"
          >
            <img :src="item.src" :alt="item.alt" />
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// 引入仓库
import usePictureStore from '@/stores/picture'

// 仓库实例
let pictureStore = usePictureStore()
// 花样数据
let patternsData = reactive([
  {
    id: 1,
    aria_label: 'jigsaw花样按钮',
    data_pattern_value: 'jigsaw',
    src: '/src/assets/images/patterns/jigsaw-thumbnail.svg',
    alt: 'jigsaw花样',
  },
  {
    id: 2,
    aria_label: 'github花样按钮',
    data_pattern_value: 'github',
    src: '/src/assets/images/patterns/github-thumbnail.svg',
    alt: 'github花样',
  },
  {
    id: 3,
    aria_label: 'endless-constellation花样按钮',
    data_pattern_value: 'endless-constellation',
    src: '/src/assets/images/patterns/endless-constellation-thumbnail.svg',
    alt: 'endless-constellation花样',
  },
  {
    id: 4,
    aria_label: 'floating-cogs花样按钮',
    data_pattern_value: 'floating-cogs',
    src: '/src/assets/images/patterns/floating-cogs-thumbnail.svg',
    alt: 'floating-cogs花样',
  },
  {
    id: 5,
    aria_label: 'bubbles花样按钮',
    data_pattern_value: 'bubbles',
    src: '/src/assets/images/patterns/bubbles-thumbnail.svg',
    alt: 'bubbles花样',
  },
  {
    id: 6,
    aria_label: 'lisbon花样按钮',
    data_pattern_value: 'lisbon',
    src: '/src/assets/images/patterns/lisbon-thumbnail.svg',
    alt: 'lisbon花样',
  },
  {
    id: 7,
    aria_label: 'temple花样按钮',
    data_pattern_value: 'temple',
    src: '/src/assets/images/patterns/temple-thumbnail.svg',
    alt: 'temple花样',
  },
  {
    id: 8,
    aria_label: 'topography花样按钮',
    data_pattern_value: 'topography',
    src: '/src/assets/images/patterns/topography-thumbnail.svg',
    alt: 'topography花样',
  },
  {
    id: 9,
    aria_label: 'falling-triangles花样按钮',
    data_pattern_value: 'falling-triangles',
    src: '/src/assets/images/patterns/falling-triangles-thumbnail.svg',
    alt: 'falling-triangles花样',
  },
  {
    id: 10,
    aria_label: 'glamorous花样按钮',
    data_pattern_value: 'glamorous',
    src: '/src/assets/images/patterns/glamorous-thumbnail.svg',
    alt: 'glamorous花样',
  },
  {
    id: 11,
    aria_label: 'i-like-food花样按钮',
    data_pattern_value: 'i-like-food',
    src: '/src/assets/images/patterns/i-like-food-thumbnail.svg',
    alt: 'i-like-food花样',
  },
  {
    id: 12,
    aria_label: 'leaf花样按钮',
    data_pattern_value: 'leaf',
    src: '/src/assets/images/patterns/leaf-thumbnail.svg',
    alt: 'leaf花样',
  },
  {
    id: 13,
    aria_label: 'circuit-board花样按钮',
    data_pattern_value: 'circuit-board',
    src: '/src/assets/images/patterns/circuit-board-thumbnail.svg',
    alt: 'circuit-board花样',
  },
  {
    id: 14,
    aria_label: 'overlapping-circles花样按钮',
    data_pattern_value: 'overlapping-circles',
    src: '/src/assets/images/patterns/overlapping-circles-thumbnail.svg',
    alt: 'overlapping-circles花样',
  },
  {
    id: 15,
    aria_label: 'endless-clouds花样按钮',
    data_pattern_value: 'endless-clouds',
    src: '/src/assets/images/patterns/endless-clouds-thumbnail.svg',
    alt: 'endless-clouds花样',
  },
])

// 改变图片背景颜色
function changeBackgroundColor(backgroundColor: string) {
  pictureStore.backgroundColor = backgroundColor
}

// 改变边框颜色
function changeBorderColor(borderColor: string) {
  pictureStore.borderColor = borderColor
}

// 改变边框大小
function changeBorderSize(borderSize: string) {
  pictureStore.borderSize = borderSize
}

// 改变边框圆角
function changeBorderRadius(borderRadius: string) {
  pictureStore.borderRadius = borderRadius
}

// 改变花样颜色
function changePatternColor(patternColor: string) {
  pictureStore.patternsColor = patternColor
}

// 改变花样大小
function changePatternSize(patternSize: string) {
  pictureStore.patternSize = patternSize
}

// 改变花样透明度
function changePatternOpacity(patternOpacity: string) {
  pictureStore.patternOpacity = patternOpacity
}

// 改变花样
function changePattern(patterns: string) {
  pictureStore.patterns = patterns
}
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
  // 背景选项卡下方展示区域
  padding: 15px;
  animation: fadeEffect 1s; /* 透明度动画时长1s */

  .toolbox-background {
    box-sizing: border-box;

    > div {
      display: flex;
      align-items: center;
      justify-content: start;
      flex-wrap: wrap;

      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }

    .bg-color-selectors {
      > div {
        display: flex;
        align-items: center;
        margin-top: 5px;
        margin-bottom: -10px;

        &:not(:last-child) {
          margin-right: 15px;
        }
      }

      input {
        margin-left: 5px;
        cursor: pointer;
        padding: 0;
      }
    }

    .border-inputs {
      div {
        display: flex;
        align-items: flex-start;
        margin-top: 12px;

        &:not(:last-child) {
          margin-right: 15px;
        }

        input {
          cursor: pointer;
        }
      }
    }

    .pattern-inputs {
      div {
        display: flex;
        align-items: flex-start;
        margin-top: 8px;
        margin-bottom: 5px;

        &:not(:last-child) {
          margin-right: 15px;
        }

        &:first-child {
          align-items: center;
        }

        #pattern-color-selector {
          padding: 0;
        }

        input {
          margin-left: 5px;
          cursor: pointer;
        }
      }
    }

    .patterns-buttons {
      // max-width: 550px;
      margin-top: 10px;

      button {
        width: 50px;
        height: 50px;
        padding: 0;
        margin-left: 5px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          max-width: 45px;
          max-height: 45px;
        }

        &.selected {
          border: solid white 2px;
        }
      }
    }
  }
}

// 电脑端
@media screen and (min-width: 768px) {
  .main {
    .toolbox-background {
      > div {
        justify-content: center;
      }

      // 背景颜色 + 边框颜色
      .bg-color-selectors {
        > div {
          margin-top: 0px;
          margin-bottom: 0px;
        }
      }

      // 边框大小 + 边框圆角
      .border-inputs {
        div {
          margin-top: 5px;
          margin-bottom: 5px;
        }
      }

      // 花样颜色 + 花样大小 + 花样透明度
      .pattern-inputs {
        div {
          margin-top: 5px;
          margin-bottom: 10px;
        }
      }

      // 花样
      .patterns-buttons {
        margin: auto;
        max-width: 550px;
      }
    }
  }
}
</style>
