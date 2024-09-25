import { ref } from 'vue'
import { defineStore } from 'pinia'
// 引入ts
import type { picParamterTs } from './type'

export const usePictureStore = defineStore('Picture', () => {
  // 制作图片的一些公共数据
  const picParamter = ref<picParamterTs>({
    test: 'test',
  })

  return { picParamter }
})
