<template>
  <div :class="{ box: true, lightMode: ModeColor == true }">
    <!-- 上方制图，画布 -->
    <div class="header-image-container" ref="canvasRef">
      <!-- 图片1，用来给用户展示 -->
      <Picture1
        :backgroundSvg="backgroundSvg"
        :style="{ zoom: `${zoom}` }"
      ></Picture1>
    </div>
    <!-- 模板选择下拉菜单 -->
    <div class="template-selector">
      <div class="template-label">模板选择:</div>
      <div class="template-options">
        <div
          v-for="template in templates"
          :key="template.value"
          :class="[
            'template-option',
            { active: pictureStore.templateType === template.value },
          ]"
          @click="changeTemplate(template.value)"
        >
          {{ template.label }}
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
  <!-- 图片2，不展示，但是下载图片用的它 -->
  <Picture2 :backgroundSvg="backgroundSvg"></Picture2>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
// 引入获取图片背景花样的方法
import { getBackgroundSvg } from '@/utils/backgroundSvg'
// 引入获取随机主题的方法
import { randomTheme } from '@/utils/randomTheme'
// 引入仓库
import usePictureStore from '@/stores/picture'

// 创建仓库实例
let pictureStore = usePictureStore()
// 是否开启浅色模式：true开启，false不开启（深色模式）
let ModeColor = ref<boolean>(false)
// 当前图片背景花样的具体样式（花样+颜色+透明度）  +pictureStore.patternOpacity:加号可以把数字字符串（string）转为数字（number）
let backgroundSvg = ref<string>(
  getBackgroundSvg(
    pictureStore.pattern,
    pictureStore.patternColor.slice(1),
    +pictureStore.patternOpacity,
  ),
)
// 记录产生的随机数的上一次的random
let lastRandom = <number>0
// 画布实例
let canvasRef = ref()
// 图片的缩放倍数
let zoom = ref<number>(1)

// 模板选项
const templates = [
  { label: '标准', value: 'standard' },
  { label: '垂直', value: 'vertical' },
  { label: '水平', value: 'horizontal' },
  { label: '居中', value: 'centered' },
  { label: '简约', value: 'minimal' },
]

// 改变背景显示模式：深色模式，浅色模式
function changeModeColor() {
  ModeColor.value = !ModeColor.value
}

// 切换模板
function changeTemplate(templateType: string) {
  pictureStore.changeTemplate(templateType)
}

// 监视仓库里的width，如果图片1的宽度超过画布初始宽度，就进行缩放，但是图片2不缩放（隐藏了，用户看不见），下载的时候用图片2
watch(
  () => pictureStore.width,
  (newValue) => {
    if (pictureStore.width > canvasRef.value.clientWidth) {
      zoom.value = canvasRef.value.clientWidth / +newValue
    } else {
      zoom.value = 1
    }
  },
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
async function download() {
  pictureStore.DownloadPicture()
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
  // 模板类型
  pictureStore.templateType = theme.templateType
}

onMounted(() => {
  // clientWidth 属性是一个只读属性,它返回该元素的像素宽度,宽度包含内边距(padding),不包含边框(border),外边距(margin)和滚动条,是一个整数,单位是像素 px。
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

  .header-image-container {
    width: 100%;
    filter: drop-shadow(0px 0px 5px rgba(125, 125, 125, 0.5));
  }

  // 模板选择器
  .template-selector {
    margin-top: 15px;

    .template-label {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-color);
      margin-bottom: 8px;
    }

    .template-options {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .template-option {
        padding: 6px 10px;
        background: rgba(45, 45, 45, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: var(--button-border-radius);
        color: var(--text-color);
        font-size: 12px;
        cursor: pointer;
        transition: all 0.25s ease;

        &:hover {
          background: rgba(60, 60, 60, 0.7);
        }

        &.active {
          background: #2d8655;
          border-color: #2d8655;
          color: white;
          box-shadow: 0px 0px 5px 2px rgba(45, 134, 85, 0.25);
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

  .template-selector {
    .template-label {
      color: #333;
    }

    .template-options {
      .template-option {
        background: rgba(64, 120, 192, 0.2);
        border: 1px solid rgba(64, 120, 192, 0.3);
        color: #333;

        &:hover {
          background: rgba(64, 120, 192, 0.3);
          border-color: rgba(64, 120, 192, 0.5);
        }

        &.active {
          background: #4078c0;
          border-color: #4078c0;
          color: white;
          box-shadow: 0px 0px 5px 2px rgba(64, 120, 192, 0.25);
        }
      }
    }
  }

  .options-container {
    button {
      &:hover {
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
      }
    }
  }
}

// 电脑端
@media screen and (min-width: 768px) {
  .box {
    padding: var(--paddings);

    // 模板选择器
    .template-selector {
      margin-top: 20px;

      .template-label {
        font-size: 16px;
      }

      .template-options {
        .template-option {
          padding: 8px 15px;
          font-size: 14px;
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
