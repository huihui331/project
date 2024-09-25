<template>
  <div style="margin-top: 40px">
    <div>
      <!-- <p>选项卡区域</p> -->
      <ul style="display: flex; list-style: none; margin-bottom: 30px">
        <li
          v-for="item in tabs"
          :key="item.id"
          @click="changeTab(item.id)"
          style="margin-right: 20px; cursor: pointer"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-show="curTab == 0"><MainBody></MainBody></li>
        <li v-show="curTab == 1"><Background></Background></li>
        <li v-show="curTab == 2"><Decoration></Decoration></li>
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

<style scoped lang="scss"></style>
