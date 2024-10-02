<template>
  <div id="feedback-modal" class="modal">
    <div>
      <a href="#" title="Close" class="modal-close">
        <img
          src="../../assets/images/icons/close.svg"
          width="15"
          height="15"
          alt="关闭"
        />
      </a>
      <div class="modal-title"><b>问题反馈</b></div>
      <br />
      <p>欢迎反馈您的问题，或者提出宝贵意见，让我们一起变得更好！</p>
      <br />
      <div>
        <!-- 在HTML表单中，每个input和textarea中都有一个name属性，这个name属性的值会在表单提交的时候充当键（key）的角色，用户在元素中输入的值则充当值（value）的角色 -->
        <!-- 当表单被提交的时候，这些键值对会被组合起来，并通过HTTP请求发送到服务器 -->
        <form action="" method="POST">
          <input
            type="text"
            name="name"
            placeholder="姓名"
            autocomplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="邮箱"
            autocomplete="off"
          />
          <br />
          <textarea
            name="Message"
            cols="30"
            rows="10"
            placeholder="请输入1000字以内的描述，如有更多内容请分多次提交"
            autocomplete="off"
          ></textarea>
          <br />
          <button class="btn" type="submit">发送</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.modal {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.25s;

  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }

  & > div {
    width: 450px;
    margin-top: 15px;
    max-width: calc(100% - 30px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #4e6db3;
    box-shadow:
      0px 0px 5px rgba(255, 255, 255, 0.5),
      0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: var(--button-border-radius);
  }

  .modal-title {
    font-size: 1.2rem;
  }

  .modal-info-text {
    border-top: solid 1px rgba(255, 255, 255, 0.5);
    font-size: 12px;
  }

  a {
    font-weight: 700;
  }
}

.modal-close {
  position: absolute;
  right: 15px;
  top: 15px;
}

#feedback-modal {
  input {
    width: calc(50% - 2px);
    margin-bottom: 5px;

    &:first-child {
      margin-right: 3px;
    }
  }
  textarea {
    margin-top: 1px;
    width: 100%;

    &::-webkit-scrollbar {
      width: 14px;
      cursor: pointer;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: var(--input-border-radius);
      background-color: rgba(255, 255, 255, 0.75);
      //
    }
  }
  button {
    display: block;
    margin-left: auto;
  }
}
</style>
