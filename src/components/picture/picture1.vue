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
    }"
  >
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
            ? '/src/assets/images/decorations/' + pictureStore.decorationImgSrc
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
            ? '/src/assets/images/decorations/' + pictureStore.decorationImgSrc
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
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
// 引入仓库
import usePictureStore from '@/stores/picture'

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
</script>

<style scoped lang="scss">
// 手机端
// 图片
.github-header-image {
  position: relative;
  margin: 0 auto;
  border: none;
  overflow: hidden;
  background-size: 100px;
  width: 100%;
  height: 200px;
  padding: 25px;
  position: relative;
  display: flex;
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

  // 装饰小图
  .img-decoration-container {
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
}

// 电脑端
@media screen and (min-width: 768px) {
  // 画布
  .github-header-image {
    .subtitle {
      margin-top: 6px;
    }
  }
}
</style>
