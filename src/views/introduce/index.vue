<template>
  <div class="introduce">
    <header class="header">
      <h1>
        <img
          src="../../assets/images/github-logo-40.svg"
          width="40"
          height="40"
          alt="Github logo"
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
          <video
            class="demo"
            src="../../assets/images/github-profile-header-generator-demo.webm"
            autoplay
            muted
            poster="../../assets/images/github-profile-header-generator-demo.webm"
          >
            Github Profile Header Generator Demo
          </video>
        </li>
        <li><p>2. 在你的文档或网页中进行使用</p></li>
        <li><p>3. 把图片上传到服务器或者项目的资源目录中</p></li>
        <li>
          <p>4. Markdown添加实例:</p>
          <p class="code"><code>![Header](./your-image-name.png)</code></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
// 电脑端
@media screen and (min-width: 768px) {
  .introduce {
    .content {
      margin-top: 30px;
    }
  }
}
</style>
