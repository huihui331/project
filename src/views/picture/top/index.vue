<template>
  <div :class="{ box: true, lightMode: ModeColor == true }">
    <!-- 上方制图 -->
    <div class="header-image-container">
      <!-- 画布，调整的就是它的样式，非常重要 -->
      <div
        class="github-header-image"
        :style="{ 'background-image': backgroundSvg }"
        ref="pictureRef"
      >
        <!-- 大标题 -->
        <div class="title">{{ pictureStore.title }}</div>
        <!-- 小标题 -->
        <div class="subtitle">{{ pictureStore.subtitle }}</div>
        <!-- 装饰小图片 -->
        <div class="img-decoration-container">
          <template v-for="item in decorationImg" :key="item.id">
            <img :src="item.src" alt="装饰小图" width="100px" height="100px" />
          </template>
        </div>
      </div>
    </div>
    <!-- 下方按钮 -->
    <div class="options-container">
      <button type="button" class="dark-mode-button" @click="changeModeColor">
        {{ ModeColor ? '深色模式' : '浅色模式' }}
      </button>
      <button type="button" class="randomize-button">随机</button>
      <button type="button" class="download-button" @click="download">
        下载
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 引入获取图片背景花样的方法
import { getBackgroundSvg } from '@/utils/backgroundSvg'
// 引入仓库
import usePictureStore from '@/stores/picture'
import html2canvas from 'html2canvas'

// 创建仓库实例
let pictureStore = usePictureStore()

// 图片实例
let pictureRef = ref()
// 是否开启浅色模式：true开启，false不开启（深色模式）
let ModeColor = ref<boolean>(false)
// 当前图片背景的花样
let bgSvg = ref<string>('jigsaw')
// 当前图片背景花样的颜色
let bgSvgColor = ref<string>('FFFFFF')
// 当前图片背景花样的透明度
let bgSvgOpacity = ref<number>(0.25)
// 当前图片背景花样的具体样式（花样+颜色+透明度）
let backgroundSvg = ref<string>(
  getBackgroundSvg(bgSvg.value, bgSvgColor.value, bgSvgOpacity.value),
)
// 图片里的装饰小图
let decorationImg = ref<any>([
  { id: 0, src: '/src/assets/images/decorations/my-octocat.png' },
])
// 图片里的装饰小图的宽度
let decorationImgWidth = ref<number>(77)

// 改变背景显示模式：深色模式，浅色模式
function changeModeColor() {
  ModeColor.value = !ModeColor.value
}

// 下载图片   html2canvas可以将HTML元素渲染成Canvas，进而可以转换成图片
function download() {
  // 两个参数，第一个是dom节点（HTML元素），第二个是配置项
  html2canvas(pictureRef.value, { backgroundColor: null })
    .then((canvas) => {
      // console.log(canvas) // 返回值为canvas元素，该元素包含了被渲染的HTML内容  <canvas width="632" height="400" style="width: 316px; height: 200px;">
      let imageURL = canvas.toDataURL('image/png') // 将Canvas转换成PNG格式的图片URL
      let a = document.createElement('a') // 创建<a>标签
      a.href = imageURL // 将a标签的href设置为图片的URL
      a.download = 'github-header-image' // download属性为下载时文件的默认名称
      a.click() // 通过模拟点击<a>元素的click事件来触发下载
    })
    .catch((error) => {
      alert('下载失败')
      console.log(new Error(error))
    })
}

// 监视仓库里的textAlign，当其值为居中的时候，给当前页面变量decorationImg数组追加一个id不同，src相同的图片
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
