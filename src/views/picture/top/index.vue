<template>
  <div :class="{ box: true, lightMode: ModeColor == true }">
    <!-- 上方制图，画布 -->
    <div class="header-image-container" ref="canvasRef">
      <!-- 图片，调整的就是它的样式，非常重要 -->
      <div
        class="github-header-image"
        ref="pictureRef"
        :style="{
          height: pictureStore.height + 'px',
          padding: pictureStore.padding + 'px',
          'background-color': pictureStore.backgroundColor,
          border:
            pictureStore.borderSize +
            'px ' +
            'solid ' +
            pictureStore.borderColor,
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
          <!-- <img
            :src="
              '/src/assets/images/decorations/' + pictureStore.decorationImgSrc
            "
            alt="装饰小图"
            :style="{ width: pictureStore.decorationImgSize + 'px' }"
            v-show="
              !pictureStore.decorationImgsHidden &&
              (pictureStore.textAlign == 'flex-start' ||
                pictureStore.textAlign == 'center')
            "
          /> -->
          <img
            :src="
              pictureStore.decorationImgSrc.length < 50
                ? '/src/assets/images/decorations/' +
                  pictureStore.decorationImgSrc
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
                ? '/src/assets/images/decorations/' +
                  pictureStore.decorationImgSrc
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
    </div>
    <!-- 下方按钮 -->
    <div class="options-container">
      <button type="button" class="dark-mode-button" @click="changeModeColor">
        {{ ModeColor ? '深色模式' : '浅色模式' }}
      </button>
      <button type="button" class="randomize-button" @click="getRandomTheme">
        随机
      </button>
      <button type="button" class="download-button" @click="download">
        下载
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
// 引入获取图片背景花样的方法
import { getBackgroundSvg } from '@/utils/backgroundSvg'
// 引入获取随机主题的方法
import { randomTheme } from '@/utils/randomTheme'
// 引入仓库
import usePictureStore from '@/stores/picture'
import html2canvas from 'html2canvas'
import { title } from 'process'

// 创建仓库实例
let pictureStore = usePictureStore()
// 是否开启浅色模式：true开启，false不开启（深色模式）
let ModeColor = ref<boolean>(false)
// 画布实例
let canvasRef = ref()
// 图片实例
let pictureRef = ref()
// 当前图片背景花样的具体样式（花样+颜色+透明度）  +pictureStore.patternOpacity:加号可以把数字字符串（string）转为数字（number）
let backgroundSvg = ref<string>(
  getBackgroundSvg(
    pictureStore.pattern,
    pictureStore.patternColor.slice(1),
    +pictureStore.patternOpacity,
  ),
)
// 记录产生的随机数的上一次的random
let lastRandom = <number>(0)

// 改变背景显示模式：深色模式，浅色模式
function changeModeColor() {
  ModeColor.value = !ModeColor.value
}

// 监视仓库里的width，它一改变就改变图片的宽度
watch(
  () => pictureStore.width,
  (newValue) => {
    // 在仓库里添加isWatchWidth变量的原因是我不希望一上来就监视width的变化就给图片的宽度赋值，这样会让我的响应式页面失灵，我希望宽度输入框改变值之后再改变图片的宽度，而不是一上来因为我给width赋画布宽度的值就给图片宽度赋值
    if (!pictureStore.isWatchWidth) {
      pictureStore.isWatchWidth = true
    } else {
      pictureRef.value.style.width = newValue + 'px'
    }
  },
  { deep: false },
)

// 监视仓库里的pattern，patternColor，patternOpacity，注意getBackgroundSvg的第二个参数的颜色要把收集到的颜色#去掉
watch(
  () => ({
    pattern: pictureStore.pattern,
    patternColor: pictureStore.patternColor,
    patternOpacity: pictureStore.patternOpacity,
  }),
  (newValue) => {
    backgroundSvg.value = getBackgroundSvg(
      newValue.pattern,
      newValue.patternColor.slice(1),
      +newValue.patternOpacity,
    )
  },
  { deep: true },
)

// 下载图片   html2canvas可以将HTML元素渲染成Canvas，进而可以转换成图片
function download() {
  let cloneDom: any = pictureRef.value.cloneNode(true)
  cloneDom.style.width = pictureStore.width + 'px'
  cloneDom.style.transform = 'scale(1)'
  // cloneDom.style.position = 'absolute'
  // cloneDom.style.left = '0'
  // cloneDom.style.top = '0'
  cloneDom.style.zIndex = '-1'
  document.querySelector('body')?.append(cloneDom)

  // 两个参数，第一个是dom节点（HTML元素），第二个是配置项
  // html2canvas(pictureRef.value, { backgroundColor: null })
  // html2canvas(cloneDom, { backgroundColor: null })
  //   .then((canvas) => {
  //     // console.log(canvas) // 返回值为canvas元素，该元素包含了被渲染的HTML内容  <canvas width="632" height="400" style="width: 316px; height: 200px;">
  //     let imageURL = canvas.toDataURL('image/png') // 将Canvas转换成PNG格式的图片URL
  //     let a = document.createElement('a') // 创建<a>标签
  //     a.href = imageURL // 将a标签的href设置为图片的URL
  //     a.download = 'github-header-image' // download属性为下载时文件的默认名称
  //     a.click() // 通过模拟点击<a>元素的click事件来触发下载
  //     document.querySelector('body')?.removeChild(cloneDom)
  //   })
  //   .catch((error) => {
  //     alert('下载失败')
  //     console.log(new Error(error))
  //   })
}

// 获得随机主题
function getRandomTheme() {
  let { theme, random } = randomTheme(lastRandom)
  lastRandom = random // 更新上一次的random记录
  if (theme.decoration == '') {
    pictureStore.decorationImgsHidden = true
  } else {
    pictureStore.decorationImgsHidden = false
  }
  // 背景颜色
  pictureStore.backgroundColor = theme.background
  // 大标题
  pictureStore.titleColor = theme.title
  pictureStore.titleFont = theme.titleFont ?? 'MavenPro'
  // 小标题
  pictureStore.subtitleColor = theme.subtitle
  pictureStore.subtitleFont = theme.subtitleFont ?? 'Kalam'
  // 边框
  pictureStore.borderColor = theme.border
  pictureStore.borderSize = theme.borderSize + ''
  pictureStore.borderRadius = theme.borderRadius + ''
  // 文字排版
  pictureStore.textAlign = theme.textAlign
  // 装饰小图
  pictureStore.decorationImgSrc = theme.decoration
  pictureStore.decorationImgSize = theme.decorationSize + ''
  // 花样
  pictureStore.pattern = theme.pattern
  pictureStore.patternColor = theme.patternColor
  pictureStore.patternOpacity = theme.patternOpacity + ''
}

onMounted(() => {
  // 仓库里的width的初始宽度为刚打开网页的画布的宽度
  pictureStore.width = canvasRef.value.clientWidth
})
</script>

<style scoped lang="scss">
// 手机端
.box {
  padding: 15px;
  // 默认为深色模式
  background: var(--github-dark-mode-color);
  border-radius: 10px 10px 0px 0px;
  transition: 0.5s ease;

  // 画布
  .header-image-container {
    width: 100%;
    filter: drop-shadow(0px 0px 5px rgba(125, 125, 125, 0.5));

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

      // img {
      //   transition: 0.15s;
      // }

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

    // 画布
    .header-image-container {
      .github-header-image {
        .subtitle {
          margin-top: 6px;
        }
      }
    }

    // 下方按钮
    .options-container {
      padding: var(--paddings) 0 0 0;
      button {
        width: 155px;
        margin-right: 15px;
        &:nth-child(2) {
          margin: 0px 15px 0px 0px;
        }
      }
    }
  }
}
</style>
