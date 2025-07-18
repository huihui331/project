<!-- src/components/LazyImage.vue -->
<template>
  <div class="lazy-image-container" :class="{ 'image-error': hasError }">
    <img
      v-if="!hasError || fallback"
      :src="currentSrc"
      :alt="alt"
      ref="imgRef"
      @load="onImageLoaded"
      @error="onImageError"
      :class="{ 'image-loaded': isLoaded }"
    />
    <div v-if="hasError && !fallback" class="error-placeholder">
      <span>!</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  // 真实图片地址
  src: {
    type: String,
    required: true,
  },
  // 占位图片地址
  placeholder: {
    type: String,
    default:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZWVlZSIvPjwvc3ZnPg==',
  },
  // 图片加载失败时显示的图片
  fallback: {
    type: String,
    default: '',
  },
  // 图片alt属性
  alt: {
    type: String,
    default: '',
  },
  // 预加载距离（提前多少像素开始加载）
  rootMargin: {
    type: String,
    default: '200px',
  },
})

const emit = defineEmits(['loaded', 'error'])

// 当前显示的图片地址
const currentSrc = ref(props.placeholder)
const imgRef = ref<HTMLImageElement | null>(null)
const isLoaded = ref(true)
const hasError = ref(false)

// 图片加载完成事件
const onImageLoaded = () => {
  isLoaded.value = false
}

// 图片加载失败事件
const onImageError = () => {
  hasError.value = true
  if (props.fallback) {
    currentSrc.value = props.fallback
  }
}

onMounted(() => {
  // 确保DOM元素已挂载
  if (!imgRef.value) return
  // 创建IntersectionObserver实例
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoaded.value && !hasError.value) {
          console.log('进入视口了，开始加载图片')
          // 图片进入视口，加载真实图片
          currentSrc.value = props.src
          // 停止观察
          observer.unobserve(entry.target)
        }
      })
    },
    {
      rootMargin: props.rootMargin, // 提前加载距离
    },
  )

  // 开始观察图片元素
  observer.observe(imgRef.value)

  // 组件卸载时清理
  return () => {
    if (imgRef.value) {
      observer.unobserve(imgRef.value)
    }
  }
})
</script>

<style scoped>
.lazy-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  max-width: 45px; /* 与background.vue中的样式保持一致 */
  max-height: 45px; /* 与background.vue中的样式保持一致 */
  transition: opacity 0.3s ease-in-out;
}

.error-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

/* 确保在各种屏幕尺寸下都与background.vue中的按钮样式一致 */
@media screen and (min-width: 768px) {
  /* 电脑端样式 */
  img {
    max-width: 45px;
    max-height: 45px;
  }

  .error-placeholder {
    width: 45px;
    height: 45px;
  }
}
</style>
