<template>
  <div class="main">
    <div class="toolbox-decorations">
      <!-- 装饰小图大小 -->
      <div class="decorations-size-inputs">
        <div>
          <label for="decoration-size-input">装饰图大小：</label>
          <input
            type="range"
            name="decoration-size-input"
            id="decoration-size-input"
            :value="pictureStore.decorationImgSize"
            @input="
              changeDecorationImgSize(($event.target as HTMLInputElement).value)
            "
            min="10"
            max="500"
          />
          <output for="decoration-size-input">
            {{ pictureStore.decorationImgSize }}
          </output>
        </div>
      </div>
      <!-- 装饰小图种类 -->
      <div class="decorations-buttons">
        装饰图：
        <button
          type="button"
          class="btn"
          aria-label="no decorations"
          data-decoration-value="none"
          @click="changeDecorationImgSrc('', true)"
        >
          空白
        </button>
        <template v-for="item in allDecorationImg" :key="item.id">
          <button
            type="button"
            class="btn"
            :aria-label="item.aria_label"
            @click="changeDecorationImgSrc(item.data_decotation_value, false)"
          >
            <img :src="item.src" :alt="item.alt" />
          </button>
        </template>
      </div>
      <!-- 上传装饰小图 -->
      <div class="decorations-upload">
        <div class="upload">
          <!-- 上传图片 -->
          <label for="decoration-size-input">自定义装饰图：</label>
          <input
            type="file"
            id="decoration-upload-input"
            class="btn"
            aria-label="Upload decoration"
            @change="uploadPicture"
            ref="uploadRef"
          />
        </div>
        <!-- <div class="preview-decoration" alt="Preview uploaded decoration"></div> -->
        <!-- 底部提示 -->
        <div class="myoctocats-tip">
          <p>
            💡使用
            <a
              href="https://octodex.github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Octodex
            </a>
            中的octocat
          </p>
          <p>
            💡或者在
            <a
              href="https://myoctocat.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MyOctocat.com
            </a>
            上构建自己的octocat
          </p>
          <p>💡octocat看起来坏了，但是可以复制svg结果</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
// 引入仓库
import usePictureStore from '@/stores/picture'

// 仓库实例
let pictureStore = usePictureStore()
// 上传图片输入框实例
let uploadRef = ref()
// 装饰小图种类数据
let allDecorationImg = reactive([
  {
    id: 1,
    aria_label: 'my-octocat小图按钮',
    data_decotation_value: 'my-octocat.png',
    src: '/src/assets/images/decorations/my-octocat-thumbnail.png',
    alt: 'my-octocat小图',
  },
  {
    id: 2,
    aria_label: 'octocat小图按钮',
    data_decotation_value: 'octocat.png',
    src: '/src/assets/images/decorations/octocat-thumbnail.png',
    alt: 'octocat',
  },
  {
    id: 3,
    aria_label: 'github-mark小图按钮',
    data_decotation_value: 'github-mark.png',
    src: '/src/assets/images/decorations/github-mark-thumbnail.png',
    alt: 'github-mark',
  },
  {
    id: 4,
    aria_label: 'dev-badge小图按钮',
    data_decotation_value: 'dev-badge.png',
    src: '/src/assets/images/decorations/dev-badge-thumbnail.png',
    alt: 'dev-badge小图',
  },
  {
    id: 5,
    aria_label: 'dev-rainbow小图按钮',
    data_decotation_value: 'dev-rainbow.png',
    src: '/src/assets/images/decorations/dev-rainbow-thumbnail.png',
    alt: 'dev-rainbow小图',
  },
  {
    id: 6,
    aria_label: 'dev-white小图按钮',
    data_decotation_value: 'dev-white.png',
    src: '/src/assets/images/decorations/dev-white-thumbnail.png',
    alt: 'dev-white小图',
  },
  {
    id: 7,
    aria_label: 'code小图按钮',
    data_decotation_value: 'code.png',
    src: '/src/assets/images/decorations/code-thumbnail.png',
    alt: 'code小图',
  },
  {
    id: 8,
    aria_label: 'terminal小图按钮',
    data_decotation_value: 'terminal.png',
    src: '/src/assets/images/decorations/terminal-thumbnail.png',
    alt: 'terminal小图',
  },
  {
    id: 9,
    aria_label: 'programming小图按钮',
    data_decotation_value: 'programming.png',
    src: '/src/assets/images/decorations/programming-thumbnail.png',
    alt: 'programming小图',
  },
  {
    id: 10,
    aria_label: 'rocket小图按钮',
    data_decotation_value: 'rocket.png',
    src: '/src/assets/images/decorations/rocket-thumbnail.png',
    alt: 'rocket小图',
  },
  {
    id: 11,
    aria_label: 'terminal-circle小图按钮',
    data_decotation_value: 'terminal-circle.png',
    src: '/src/assets/images/decorations/terminal-circle-thumbnail.png',
    alt: 'terminal-circle小图',
  },
  {
    id: 12,
    aria_label: 'binary-code小图按钮',
    data_decotation_value: 'binary-code.png',
    src: '/src/assets/images/decorations/binary-code-thumbnail.png',
    alt: 'binary-code小图',
  },
  {
    id: 13,
    aria_label: 'coding-screen小图按钮',
    data_decotation_value: 'coding-screen.png',
    src: '/src/assets/images/decorations/coding-screen-thumbnail.png',
    alt: 'coding-screen小图',
  },
  {
    id: 14,
    aria_label: 'coding小图按钮',
    data_decotation_value: 'coding.png',
    src: '/src/assets/images/decorations/coding-thumbnail.png',
    alt: 'coding小图',
  },
  {
    id: 15,
    aria_label: 'idea小图按钮',
    data_decotation_value: 'idea.png',
    src: '/src/assets/images/decorations/idea-thumbnail.png',
    alt: 'idea小图',
  },
  {
    id: 16,
    aria_label: 'tabs小图按钮',
    data_decotation_value: 'tabs.png',
    src: '/src/assets/images/decorations/tabs-thumbnail.png',
    alt: 'tabs小图',
  },
  {
    id: 17,
    aria_label: 'apple小图按钮',
    data_decotation_value: 'apple.png',
    src: '/src/assets/images/decorations/apple-thumbnail.png',
    alt: 'apple小图',
  },
])

// 改变装饰小图大小
function changeDecorationImgSize(decorationImgSize: string) {
  pictureStore.decorationImgSize = decorationImgSize
}

// 改变装饰小图
function changeDecorationImgSrc(
  decorationImgSrc: string,
  decorationImgsHidden: boolean,
) {
  pictureStore.decorationImgSrc = decorationImgSrc
  pictureStore.decorationImgsHidden = decorationImgsHidden
}

// 上传图片
function uploadPicture() {
  let reader = new FileReader()
  reader.readAsDataURL(uploadRef.value.files[0])
  reader.onload = function (e) {
    pictureStore.decorationImgsHidden = false // 用户点击了空白，然后再上传图片，此时要让图片显示
    pictureStore.decorationImgSrc = reader.result as string
  }
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
  padding: 15px 15px 15px 15px;
  animation: fadeEffect 1s; /* 透明度动画时长1s */

  .toolbox-decorations {
    box-sizing: border-box;

    > div {
      display: flex;
      align-items: center;
      justify-content: start;
      flex-wrap: wrap;

      &:not(:last-child) {
        margin-top: 5px;
        margin-bottom: 22px;
      }
    }

    // 装饰图种类区域
    .decorations-buttons {
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
          max-width: 40px;
          max-height: 40px;
        }

        &.selected {
          border: solid white 2px;
        }
      }
    }

    // 上传区域 + 底部提示
    .decorations-upload {
      padding-top: 2px;
      // 上传区域
      .upload {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-right: 30px;
      }

      // 底部提示
      .myoctocats-tip {
        display: inline-block;
        margin-top: 20px;
        margin-bottom: 10px;
        padding: 5px 10px;
        border-radius: var(--input-border-radius);
        font-size: 0.9rem;
        line-height: 1.5;
        background: rgba(255, 255, 255, 0.15);

        p {
          margin: 8px 0px 10px 0px;
          a {
            font-weight: 700;
            text-decoration: underline;
          }
        }
      }
    }
  }
}

// 电脑端
@media screen and (min-width: 768px) {
  .main {
    .toolbox-decorations {
      max-width: 600px;
      margin: auto;

      > div {
        justify-content: center;

        &:not(:last-child) {
          margin-top: 5px;
          margin-bottom: 22px;
        }
      }

      // 装饰图种类区域
      .decorations-buttons {
        margin-bottom: 22px;
      }

      // 上传区域 + 底部提示
      .decorations-upload {
        margin-top: -15px;
        padding-top: 0px;
      }
    }
  }
}
</style>
