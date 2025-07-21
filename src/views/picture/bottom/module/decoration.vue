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

      <!-- 装饰图分类Tabs -->
      <div class="decoration-categories">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="['category-tab', { active: activeCategory === category.id }]"
          @click="activeCategory = category.id"
        >
          {{ category.name }}
        </button>
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
            v-show="item.category === activeCategory"
          >
            <LazyImage :src="item.src" :alt="item.alt" :root-margin="'100px'" />
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
            @change="uploadPicture()"
            ref="uploadRef"
          />
        </div>
        <!-- <div class="preview-decoration" alt="Preview uploaded decoration"></div> -->
        <!-- 底部提示 -->
        <!-- <div class="share-container">
          <button type="button" class="share-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            分享我的作品
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
// 引入仓库
import usePictureStore from '@/stores/picture'
// 引入获取装饰小图路径的方法
import { getDecorationFile } from '@/utils/getAssetsFile'

// 仓库实例
let pictureStore = usePictureStore()
// 上传图片输入框实例
let uploadRef = ref()

// 分类定义
const categories = [
  { id: 'internet', name: '互联网' },
  { id: 'office', name: '办公' },
  { id: 'travel', name: '旅行' },
]

// 当前选中的类别
const activeCategory = ref('internet')

// 装饰小图种类数据
let allDecorationImg = reactive([
  // 互联网类
  {
    id: 3,
    category: 'internet',
    aria_label: 'github-mark小图按钮',
    data_decotation_value: 'internet/github-mark.png',
    src: getDecorationFile('internet/github-mark-thumbnail.png'),
    alt: 'github-mark',
  },
  {
    id: 4,
    category: 'internet',
    aria_label: 'dev-badge小图按钮',
    data_decotation_value: 'internet/dev-badge.png',
    src: getDecorationFile('internet/dev-badge-thumbnail.png'),
    alt: 'dev-badge小图',
  },
  {
    id: 5,
    category: 'internet',
    aria_label: 'dev-rainbow小图按钮',
    data_decotation_value: 'internet/dev-rainbow.png',
    src: getDecorationFile('internet/dev-rainbow-thumbnail.png'),
    alt: 'dev-rainbow小图',
  },
  {
    id: 6,
    category: 'internet',
    aria_label: 'dev-white小图按钮',
    data_decotation_value: 'internet/dev-white.png',
    src: getDecorationFile('internet/dev-white-thumbnail.png'),
    alt: 'dev-white小图',
  },
  {
    id: 7,
    category: 'internet',
    aria_label: 'code小图按钮',
    data_decotation_value: 'internet/code.png',
    src: getDecorationFile('internet/code-thumbnail.png'),
    alt: 'code小图',
  },
  {
    id: 8,
    category: 'internet',
    aria_label: 'terminal小图按钮',
    data_decotation_value: 'internet/terminal.png',
    src: getDecorationFile('internet/terminal-thumbnail.png'),
    alt: 'terminal小图',
  },
  {
    id: 9,
    category: 'internet',
    aria_label: 'programming小图按钮',
    data_decotation_value: 'internet/programming.png',
    src: getDecorationFile('internet/programming-thumbnail.png'),
    alt: 'programming小图',
  },
  {
    id: 10,
    category: 'internet',
    aria_label: 'rocket小图按钮',
    data_decotation_value: 'internet/rocket.png',
    src: getDecorationFile('internet/rocket-thumbnail.png'),
    alt: 'rocket小图',
  },
  {
    id: 11,
    category: 'internet',
    aria_label: 'terminal-circle小图按钮',
    data_decotation_value: 'internet/terminal-circle.png',
    src: getDecorationFile('internet/terminal-circle-thumbnail.png'),
    alt: 'terminal-circle小图',
  },
  {
    id: 12,
    category: 'internet',
    aria_label: 'binary-code小图按钮',
    data_decotation_value: 'internet/binary-code.png',
    src: getDecorationFile('internet/binary-code-thumbnail.png'),
    alt: 'binary-code小图',
  },
  {
    id: 13,
    category: 'internet',
    aria_label: 'coding-screen小图按钮',
    data_decotation_value: 'internet/coding-screen.png',
    src: getDecorationFile('internet/coding-screen-thumbnail.png'),
    alt: 'coding-screen小图',
  },
  {
    id: 14,
    category: 'internet',
    aria_label: 'coding小图按钮',
    data_decotation_value: 'internet/coding.png',
    src: getDecorationFile('internet/coding-thumbnail.png'),
    alt: 'coding小图',
  },
  {
    id: 15,
    category: 'internet',
    aria_label: 'idea小图按钮',
    data_decotation_value: 'internet/idea.png',
    src: getDecorationFile('internet/idea-thumbnail.png'),
    alt: 'idea小图',
  },
  // 办公类
  {
    id: 16,
    category: 'office',
    aria_label: 'office1小图按钮',
    data_decotation_value: 'office/office1.png',
    src: getDecorationFile('office/office1 -thumbnail.png'),
    alt: 'office1小图',
  },
  {
    id: 17,
    category: 'office',
    aria_label: 'office2小图按钮',
    data_decotation_value: 'office/office2.png',
    src: getDecorationFile('office/office2 -thumbnail.png'),
    alt: 'office2小图',
  },
  {
    id: 18,
    category: 'office',
    aria_label: 'office3小图按钮',
    data_decotation_value: 'office/office3.png',
    src: getDecorationFile('office/office3 -thumbnail.png'),
    alt: 'office3小图',
  },
  {
    id: 19,
    category: 'office',
    aria_label: 'office4小图按钮',
    data_decotation_value: 'office/office4.png',
    src: getDecorationFile('office/office4-thumbnail.png'),
    alt: 'office4小图',
  },
  {
    id: 20,
    category: 'office',
    aria_label: 'office5小图按钮',
    data_decotation_value: 'office/office5.png',
    src: getDecorationFile('office/office5-thumbnail.png'),
    alt: 'office5小图',
  },
  {
    id: 21,
    category: 'office',
    aria_label: 'office6小图按钮',
    data_decotation_value: 'office/office6.png',
    src: getDecorationFile('office/office6-thumbnail.png'),
    alt: 'office6小图',
  },
  {
    id: 22,
    category: 'office',
    aria_label: 'office7小图按钮',
    data_decotation_value: 'office/office7.png',
    src: getDecorationFile('office/office7-thumbnail.png'),
    alt: 'office7小图',
  },
  {
    id: 23,
    category: 'office',
    aria_label: 'office8小图按钮',
    data_decotation_value: 'office/office8.png',
    src: getDecorationFile('office/office8-thumbnail.png'),
    alt: 'office8小图',
  },
  {
    id: 24,
    category: 'office',
    aria_label: 'office9小图按钮',
    data_decotation_value: 'office/office9.png',
    src: getDecorationFile('office/office9-thumbnail.png'),
    alt: 'office9小图',
  },
  {
    id: 25,
    category: 'office',
    aria_label: 'office10小图按钮',
    data_decotation_value: 'office/office10.png',
    src: getDecorationFile('office/office10-thumbnail.png'),
    alt: 'office10小图',
  },
  {
    id: 26,
    category: 'office',
    aria_label: 'office11小图按钮',
    data_decotation_value: 'office/office11.png',
    src: getDecorationFile('office/office11-thumbnail.png'),
    alt: 'office11小图',
  },
  // 旅行类
  {
    id: 27,
    category: 'travel',
    aria_label: '帽子小图按钮',
    data_decotation_value: 'travel/hat.png',
    src: getDecorationFile('travel/hat-thumbunail.png'),
    alt: '帽子小图',
  },
  {
    id: 28,
    category: 'travel',
    aria_label: '裤子小图按钮',
    data_decotation_value: 'travel/pants.png',
    src: getDecorationFile('travel/pants-thumbunail.png'),
    alt: '裤子小图',
  },
  {
    id: 29,
    category: 'travel',
    aria_label: '潜水镜小图按钮',
    data_decotation_value: 'travel/diving-goggles.png',
    src: getDecorationFile('travel/diving-goggles-thumbunail.png'),
    alt: '潜水镜小图',
  },
  {
    id: 30,
    category: 'travel',
    aria_label: '酒店小图按钮',
    data_decotation_value: 'travel/hotel.png',
    src: getDecorationFile('travel/hotel-thumbunail.png'),
    alt: '酒店小图',
  },
  {
    id: 31,
    category: 'travel',
    aria_label: '建筑小图按钮',
    data_decotation_value: 'travel/building.png',
    src: getDecorationFile('travel/building-thumbunail.png'),
    alt: '建筑小图',
  },
  {
    id: 32,
    category: 'travel',
    aria_label: '旅行1',
    data_decotation_value: 'travel/travel1.png',
    src: getDecorationFile('travel/travel1-thumbunail.png'),
    alt: '旅行1',
  },
  {
    id: 33,
    category: 'travel',
    aria_label: '旅行2',
    data_decotation_value: 'travel/travel2.png',
    src: getDecorationFile('travel/travel2-thumbunail.png'),
    alt: '旅行2',
  },
  {
    id: 34,
    category: 'travel',
    aria_label: '旅行3',
    data_decotation_value: 'travel/travel3.png',
    src: getDecorationFile('travel/travel3-thumbunail.png'),
    alt: '旅行3',
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
  reader.onload = function () {
    pictureStore.decorationImgsHidden = false // 用户点击了空白，然后再上传图片，此时要让图片显示
    pictureStore.decorationImgSrc = reader.result as string
    uploadRef.value.value = '' // 记得把上传文件的input的值清空，不然无法再次上传同一张照片
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

    // 装饰图分类tab
    .decoration-categories {
      display: flex;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      margin-bottom: 15px;
      padding-bottom: 5px;

      .category-tab {
        padding: 6px 12px;
        margin-right: 8px;
        border: none;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.15);
        color: white;
        font-size: 12px;
        cursor: pointer;
        transition: 0.3s;

        &.active {
          background: rgba(255, 255, 255, 0.3);
          font-weight: bold;
        }
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

      // 分享按钮容器
      .share-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 10px;
        width: 100%;

        .share-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 20px;
          background: #2d8655;
          color: white;
          border: none;
          border-radius: var(--button-border-radius);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;

          svg {
            transition: transform 0.3s ease;
          }

          &:hover {
            background: #36a066;
            box-shadow: 0px 0px 8px rgba(45, 134, 85, 0.5);

            svg {
              transform: rotate(30deg);
            }
          }
        }
      }

      // 底部提示 (保留样式以便未来可能需要)
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

      // 装饰图分类tab - 电脑端优化
      .decoration-categories {
        justify-content: center;

        .category-tab {
          padding: 8px 16px;
          font-size: 14px;
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

        // 分享按钮 - 电脑端优化
        .share-container {
          margin-top: 30px;

          .share-button {
            padding: 12px 25px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
