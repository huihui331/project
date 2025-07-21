<template>
  <!-- 图片picture，调整的就是它的样式，非常重要 -->
  <div
    class="github-header-image"
    ref="pictureRef"
    :style="{
      height: pictureStore.height + 'px',
      padding: pictureStore.padding + 'px',
      'background-color': pictureStore.backgroundColor,
      border:
        pictureStore.borderSize + 'px ' + 'solid ' + pictureStore.borderColor,
      borderRadius: pictureStore.borderRadius + 'px',
      'align-items': pictureStore.textAlign,
      'background-image': backgroundSvg,
      'background-size': pictureStore.patternSize + 'px',
      'background-repeat': 'repeat',
    }"
    :class="pictureStore.templateType"
  >
    <!-- 标准模板 -->
    <template v-if="pictureStore.templateType === 'standard'">
      <!-- 大标题 -->
      <div
        class="title"
        :style="{
          color: pictureStore.titleColor,
          fontSize: pictureStore.titleSize + 'px',
          fontFamily: pictureStore.titleFont,
        }"
      >
        {{ pictureStore.title }}
      </div>
      <!-- 小标题 -->
      <div
        class="subtitle"
        :style="{
          color: pictureStore.subtitleColor,
          fontSize: pictureStore.subtitleSize + 'px',
          fontFamily: pictureStore.subtitleFont,
        }"
      >
        {{ pictureStore.subtitle }}
      </div>
      <!-- 装饰小图片 -->
      <div class="img-decoration-container">
        <img
          :src="
            pictureStore.decorationImgSrc.length < 50
              ? getDecorationFile(pictureStore.decorationImgSrc)
              : pictureStore.decorationImgSrc
          "
          alt="装饰小图"
          :style="{ width: pictureStore.decorationImgSize + 'px' }"
          v-show="
            !pictureStore.decorationImgsHidden &&
            (pictureStore.textAlign == 'flex-start' ||
              pictureStore.textAlign == 'center')
          "
        />
        <img
          :src="
            pictureStore.decorationImgSrc.length < 50
              ? getDecorationFile(pictureStore.decorationImgSrc)
              : pictureStore.decorationImgSrc
          "
          alt="装饰小图"
          :style="{ width: pictureStore.decorationImgSize + 'px' }"
          v-show="
            !pictureStore.decorationImgsHidden &&
            (pictureStore.textAlign == 'flex-end' ||
              pictureStore.textAlign == 'center')
          "
        />
      </div>
    </template>

    <!-- 垂直模板 - 标题和装饰图垂直排列 -->
    <template v-else-if="pictureStore.templateType === 'vertical'">
      <div class="vertical-layout">
        <div class="text-content">
          <!-- 大标题 -->
          <div
            class="title"
            :style="{
              color: pictureStore.titleColor,
              fontSize: pictureStore.titleSize + 'px',
              fontFamily: pictureStore.titleFont,
            }"
          >
            {{ pictureStore.title }}
          </div>
          <!-- 小标题 -->
          <div
            class="subtitle"
            :style="{
              color: pictureStore.subtitleColor,
              fontSize: pictureStore.subtitleSize + 'px',
              fontFamily: pictureStore.subtitleFont,
            }"
          >
            {{ pictureStore.subtitle }}
          </div>
        </div>
        <!-- 装饰小图片 -->
        <div
          class="img-decoration-container vertical"
          v-show="!pictureStore.decorationImgsHidden"
        >
          <img
            :src="
              pictureStore.decorationImgSrc.length < 50
                ? getDecorationFile(pictureStore.decorationImgSrc)
                : pictureStore.decorationImgSrc
            "
            alt="装饰小图"
            :style="{ width: pictureStore.decorationImgSize + 'px' }"
          />
        </div>
      </div>
    </template>

    <!-- 水平模板 - 标题和装饰图水平排列 -->
    <template v-else-if="pictureStore.templateType === 'horizontal'">
      <div class="horizontal-layout">
        <!-- 装饰小图片 -->
        <div
          class="img-decoration-container horizontal"
          v-show="!pictureStore.decorationImgsHidden"
        >
          <img
            :src="
              pictureStore.decorationImgSrc.length < 50
                ? getDecorationFile(pictureStore.decorationImgSrc)
                : pictureStore.decorationImgSrc
            "
            alt="装饰小图"
            :style="{ width: pictureStore.decorationImgSize + 'px' }"
          />
        </div>
        <div class="text-content">
          <!-- 大标题 -->
          <div
            class="title"
            :style="{
              color: pictureStore.titleColor,
              fontSize: pictureStore.titleSize + 'px',
              fontFamily: pictureStore.titleFont,
            }"
          >
            {{ pictureStore.title }}
          </div>
          <!-- 小标题 -->
          <div
            class="subtitle"
            :style="{
              color: pictureStore.subtitleColor,
              fontSize: pictureStore.subtitleSize + 'px',
              fontFamily: pictureStore.subtitleFont,
            }"
          >
            {{ pictureStore.subtitle }}
          </div>
        </div>
      </div>
    </template>

    <!-- 居中模板 - 装饰图在上，标题居中 -->
    <template v-else-if="pictureStore.templateType === 'centered'">
      <div class="centered-layout">
        <!-- 装饰小图片 -->
        <div
          class="img-decoration-container centered"
          v-show="!pictureStore.decorationImgsHidden"
        >
          <img
            :src="
              pictureStore.decorationImgSrc.length < 50
                ? getDecorationFile(pictureStore.decorationImgSrc)
                : pictureStore.decorationImgSrc
            "
            alt="装饰小图"
            :style="{ width: pictureStore.decorationImgSize + 'px' }"
          />
        </div>
        <div class="text-content">
          <!-- 大标题 -->
          <div
            class="title"
            :style="{
              color: pictureStore.titleColor,
              fontSize: pictureStore.titleSize + 'px',
              fontFamily: pictureStore.titleFont,
              textAlign: 'center',
            }"
          >
            {{ pictureStore.title }}
          </div>
          <!-- 小标题 -->
          <div
            class="subtitle"
            :style="{
              color: pictureStore.subtitleColor,
              fontSize: pictureStore.subtitleSize + 'px',
              fontFamily: pictureStore.subtitleFont,
              textAlign: 'center',
            }"
          >
            {{ pictureStore.subtitle }}
          </div>
        </div>
      </div>
    </template>

    <!-- 简约模板 - 只有文字，没有装饰图 -->
    <template v-else-if="pictureStore.templateType === 'minimal'">
      <div class="minimal-layout">
        <!-- 大标题 -->
        <div
          class="title"
          :style="{
            color: pictureStore.titleColor,
            fontSize: parseInt(pictureStore.titleSize) * 1.2 + 'px',
            fontFamily: pictureStore.titleFont,
            fontWeight: 'bold',
          }"
        >
          {{ pictureStore.title }}
        </div>
        <!-- 小标题 -->
        <div
          class="subtitle"
          :style="{
            color: pictureStore.subtitleColor,
            fontSize: parseInt(pictureStore.subtitleSize) * 1.1 + 'px',
            fontFamily: pictureStore.subtitleFont,
          }"
        >
          {{ pictureStore.subtitle }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
// 引入仓库
import usePictureStore from '@/stores/picture'
// 引入获取装饰图的路径的方法
import { getDecorationFile } from '@/utils/getAssetsFile'
import html2canvas from 'html2canvas'

// 接收父级传过来的参数
defineProps(['backgroundSvg'])
// 创建仓库实例
let pictureStore = usePictureStore()
// 图片实例
let pictureRef = ref()

// 监视仓库里的width，它一改变就改变图片的宽度
watch(
  () => pictureStore.width,
  (newValue) => {
    // 在仓库里添加isWatchWidth变量的原因是我不希望一上来就监视width的变化就给图片的宽度赋值，这样会让我的响应式页面失灵，我希望宽度输入框改变值之后再改变图片的宽度，而不是一上来因为我给width赋画布宽度的值就给图片宽度赋值
    if (!pictureStore.isWatchWidth) {
      // pictureStore.isWatchWidth = true
      pictureStore.IsWatchWidth()
    } else {
      pictureRef.value.style.width = newValue + 'px'
    }
  },
  { deep: false },
)

// 监视仓库里的download，值为true就开始下载，下载完毕把true变为false
watch(
  () => pictureStore.download,
  (newValue) => {
    if (newValue) {
      download()
    }
  },
)

// 下载图片
function download() {
  //使用 html2canvas 将 HTML 元素转换为图片并下载
  html2canvas(pictureRef.value, {
    backgroundColor: null,
    scale: 1,
    useCORS: true, // 支持跨域图片
    allowTaint: false, // 不允许污染画布
  })
    .then((canvas) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            alert('图片生成失败')
            return
          }
          console.log('看看blob是什么', blob)
          // 将 Blob 转换为 URL
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = `header-image-${Date.now()}.png`
          a.click()

          // 延迟释放，确保下载开始
          setTimeout(() => {
            URL.revokeObjectURL(url)
          }, 100)

          pictureStore.DownloadPicture()
        },
        'image/png',
        1.0,
      )
    })
    .catch((error) => {
      alert('下载失败')
      console.error('下载错误:', error)
    })
}
</script>

<style scoped lang="scss">
// 手机端
// 图片
.github-header-image {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 25px;
  width: 100%;
  height: 200px;
  background-color: #4078c0;
  background-size: 100px;
  color: white;
  border: none;
  border-radius: 7px;
  overflow: hidden;
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

  // 装饰小图 - 标准模板
  &.standard .img-decoration-container {
    img {
      position: absolute;

      &:first-child {
        left: auto;
        right: 25px;
        bottom: calc(50%);
        transform: translateY(50%);
      }

      &:last-child {
        left: 25px;
        right: auto;
        bottom: calc(50%);
        transform: translateY(50%);
      }
    }
  }

  // 垂直模板
  &.vertical {
    .vertical-layout {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      justify-content: space-around;
      align-items: center;

      .text-content {
        text-align: center;
        width: 100%;
        margin-bottom: 10px;
      }

      .img-decoration-container.vertical {
        display: flex;
        justify-content: center;
        margin-top: 5px;
        height: auto;
        max-height: 40%;
        overflow: visible;

        img {
          max-height: 100%;
          width: auto;
          max-width: 80%;
          object-fit: contain;
        }
      }
    }
  }

  // 水平模板
  &.horizontal {
    .horizontal-layout {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      width: 100%;

      .img-decoration-container.horizontal {
        margin-right: 20px;
        height: auto;
        min-width: 60px;
        max-width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          max-height: 80%;
          width: auto;
          max-width: 100%;
          object-fit: contain;
        }
      }

      .text-content {
        flex: 1;
      }
    }
  }

  // 居中模板
  &.centered {
    .centered-layout {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;

      .img-decoration-container.centered {
        margin-bottom: 15px;
        height: auto;
        max-height: 40%;
        overflow: visible;

        img {
          max-height: 100%;
          width: auto;
          max-width: 80%;
          object-fit: contain;
        }
      }

      .text-content {
        width: 100%;
        text-align: center;
      }
    }
  }

  // 简约模板
  &.minimal {
    .minimal-layout {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
      text-align: center;

      .title {
        letter-spacing: 1px;
        margin-bottom: 10px;
      }

      .subtitle {
        opacity: 0.9;
      }
    }
  }
}

// 电脑端
@media screen and (min-width: 768px) {
  // 画布
  .github-header-image {
    .subtitle {
      margin-top: 6px;
    }

    // 水平模板在电脑端的优化
    &.horizontal {
      .horizontal-layout {
        .img-decoration-container.horizontal {
          margin-right: 30px;
        }
      }
    }
  }
}
</style>
