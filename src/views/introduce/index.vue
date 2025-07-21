<template>
  <div class="introduce">
    <header class="header">
      <h1>
        <img
          src="../../assets/logn.png"
          width="40"
          height="40"
          alt="快简制图"
        />
        <br />
        <span>快简制图</span>
      </h1>
      <h2>
        <p>快速制作简洁好看的图文卡片</p>
        <p>点缀你的网页和文章</p>
      </h2>
    </header>
    <div class="content">
      <h2 class="title">如何使用?</h2>
      <ul>
        <li>
          <p>1. 制作一个好看的图片.</p>
          <br />
          <!-- 轮播图组件替代视频 -->
          <div class="carousel-container">
            <div class="carousel-slides" ref="carouselRef">
              <div class="carousel-slide">
                <img
                  src="../../assets/images/carousel/header-image-1753088767902.png"
                  alt="示例1"
                />
              </div>
              <div class="carousel-slide">
                <img
                  src="../../assets/images/carousel/header-image-1753088808634.png"
                  alt="示例2"
                />
              </div>
              <div class="carousel-slide">
                <img
                  src="../../assets/images/carousel/header-image-1753088776236.png"
                  alt="示例3"
                />
              </div>
              <div class="carousel-slide">
                <img
                  src="../../assets/images/carousel/header-image-1753088774368.png"
                  alt="示例4"
                />
              </div>
              <div class="carousel-slide">
                <img
                  src="../../assets/images/carousel/header-image-1753088764105.png"
                  alt="示例5"
                />
              </div>
              <div class="carousel-slide">
                <img
                  src="../../assets/images/carousel/header-image-1753088734973.png"
                  alt="示例6"
                />
              </div>
              <div class="carousel-slide">
                <img
                  src="../../assets/images/carousel/header-image-1753088730359.png"
                  alt="示例7"
                />
              </div>
              <div class="carousel-slide">
                <img
                  src="../../assets/images/carousel/header-image-1753088724136.png"
                  alt="示例8"
                />
              </div>
            </div>
            <div class="carousel-dots">
              <span class="dot active" @click="goToSlide(0)"></span>
              <span class="dot" @click="goToSlide(1)"></span>
              <span class="dot" @click="goToSlide(2)"></span>
              <span class="dot" @click="goToSlide(3)"></span>
              <span class="dot" @click="goToSlide(4)"></span>
              <span class="dot" @click="goToSlide(5)"></span>
              <span class="dot" @click="goToSlide(6)"></span>
              <span class="dot" @click="goToSlide(7)"></span>
            </div>
          </div>
        </li>
        <li><p>2. 在你的文档或网页中进行使用</p></li>
        <li><p>3. 把图片上传到服务器或者项目的资源目录中</p></li>
        <li><p>4. 在公众号上发布一篇文章时，可以插入图片</p></li>
        <li>
          <p>5. Markdown添加实例:</p>
          <p class="code"><code>![Header](./your-image-name.png)</code></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 轮播图相关
const carouselRef = ref<HTMLElement | null>(null)
const currentSlide = ref(0)
const slideInterval = ref<number | null>(null)

// 切换到特定幻灯片
const goToSlide = (slideIndex: number) => {
  if (!carouselRef.value) return

  currentSlide.value = slideIndex

  // 更新轮播位置
  const slides = document.querySelectorAll('.carousel-slide')
  if (slides.length > 0) {
    const slideWidth = slides[0].clientWidth
    carouselRef.value.style.transform = `translateX(-${slideWidth * currentSlide.value}px)`
  }

  // 更新指示点
  const dots = document.querySelectorAll('.dot')
  dots.forEach((dot, index) => {
    if (index === currentSlide.value) {
      dot.classList.add('active')
    } else {
      dot.classList.remove('active')
    }
  })
}

// 自动轮播
const startAutoSlide = () => {
  slideInterval.value = window.setInterval(() => {
    const slides = document.querySelectorAll('.carousel-slide')
    currentSlide.value = (currentSlide.value + 1) % slides.length
    goToSlide(currentSlide.value)
  }, 3000) // 3秒切换一次
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
  }
})
</script>

<style scoped lang="scss">
.introduce {
  color: var(--text-color);
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5));
    h1 {
      text-align: center;
      span {
        display: inline-block;
        margin: 10px 0px 15px 0px;
      }
    }
    h2 {
      font-size: 14px;
      font-style: italic;
      text-align: center;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    h2 {
      margin-block: 15px;
    }

    ul {
      list-style: none;
      li {
        margin-bottom: 10px;
        text-align: center;
        .code {
          margin: auto;
          margin-top: 5px;
          width: fit-content;
          padding: 5px 10px;
          background-color: #22272e;
          border-radius: 5px;

          code {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
}

// 轮播图样式
.carousel-container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  // border-radius: 8px;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 100%;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.active {
      background-color: #6f5794;
    }
  }
}

// 电脑端
@media screen and (min-width: 768px) {
  .introduce {
    .content {
      margin-top: 30px;
    }
  }
}
</style>
