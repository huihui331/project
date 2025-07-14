<template>
  <div class="bottom">
    <!-- tab栏区域 -->
    <div class="bottom_tabs">
      <ul class="tabs">
        <li
          v-for="item in tabs"
          :key="item.id"
          @click="changeTab(item.id)"
          :class="{ tab: true, active: curTab == item.id }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <!-- tab栏对应内容区域 -->
    <div class="content">
      <ul>
        <li v-show="curTab == 0">
          <MainBody />
        </li>
        <li v-show="curTab == 1">
          <Background />
        </li>
        <li v-show="curTab == 2">
          <Decoration />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainBody from './module/mainBody.vue'
import Background from './module/background.vue'
import Decoration from './module/decoration.vue'

let tabs = ref([
  { id: 0, name: '主体' },
  { id: 1, name: '背景' },
  { id: 2, name: '装饰' },
])

// 当前处于tab栏中的哪个选项卡
let curTab = ref<number>(0)

// 点击选项卡事件
function changeTab(id: number) {
  curTab.value = id
}
</script>

<style scoped lang="scss">
ul {
  list-style: none;
}
.bottom {
  .bottom_tabs {
    border-bottom: 1px solid #ccc;
    .tabs {
      display: flex;
      justify-content: center;

      .tab {
        padding: 14px 16px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background-color: rgba(255, 255, 255, 0.15);
        }
      }

      .active {
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
  }
}
</style>
