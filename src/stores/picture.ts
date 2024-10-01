// 仓库里存储关于要生成图片的各项数据
import { defineStore } from 'pinia'
// 引入ts
import type { picParamterTs } from './type'

const usePictureStore = defineStore('Picture', {
  state(): picParamterTs {
    return {
      title: 'Hey! I am ...', // 大标题
      subtitle: 'Fullstack developer', // 小标题
      width: '756', // 图片宽度
      height: '200', // 图片高度
      padding: '25', // 图片内边距
      titleColor: '#FFFFFF', // 大标题颜色，收集到的颜色数据是16进制数据
      backgroundColor: '#4078C0', // 背景颜色
      subtitleColor: '#FFFFFF', // 小标题颜色
      textAlign: 'flex-start', // 文字对齐方式（居左、居中、居右）
      titleFont: 'MavenPro', // 大标题字体类型
      subtitleFont: 'Kalam', // 小标题字体类型
      titleSize: '40', // 大标题字体大小
      subtitleSize: '20', // 小标题字体大小
      borderColor: '#FFFFFF', // 边框颜色
      borderSize: '0', // 边框大小
      borderRadius: '7', // 边框圆角
      patternColor: '#FFFFFF', // 背景花样颜色
      patternSize: '100', // 背景花样大小
      patternOpacity: '0.25', // 背景花样透明度
      pattern: 'jigsaw', // 背景花样
      decorationImgSize: '77', // 图片里的装饰小图的大小
      // decorationImgSrc: '@/assets/images/decorations/my-octocat.png', // 图片里的装饰小图
      decorationImgSrc: 'my-octocat.png', // 图片里的装饰小图
      decorationImgsHidden: false, // 装饰小图是否全部隐藏  true：全部隐藏，false：不全部隐藏
      // decorationImgLeftShow: false, // 左装饰小图是否显示  true：显示，fasle：不显示
      // decorationImgRightShow: true, // 右装饰小图是否显示  true：显示，fasle：不显示
      isWatchWidth: false, // 是否开启对仓库中变量width的watch监视    false：默认不开启
    }
  },
  actions: {},
  getters: {},
})

export default usePictureStore

// export const usePictureStore = defineStore('Picture', () => {
//   // 注意：
//   // 1. 图片的初始宽度和高度应该是动态的，是根据屏幕宽度生成的（或者右侧right区域的宽度）
//   // 制作图片的一些公共数据
//   const picParamter = ref<picParamterTs>({
//     title: '大标题', // 大标题
//     subtitle: '小标题', // 小标题
//     width: 765, // 图片宽度
//     height: 200, // 图片高度
//     padding: 25, // 图片内边距
//     titleColor: '#FFFFFF', // 大标题颜色，收集到的颜色数据是16进制数据
//     backgroundColor: '#4078C0', // 背景颜色
//     subtitleColor: '#FFFFFF', // 小标题颜色
//     textAlign: 'start', // 文字对齐方式（居左、居中、居右）
//     titleFont: 'Red Hat Display', // 大标题字体类型
//     subtitleFont: 'Kalam', // 小标题字体类型
//     titleSize: 40, // 大标题字体大小
//     subtitleSize: 20, // 小标题字体大小
//     decorationImg: [
//       // 图片里的装饰小图
//       { id: 0, src: '/src/assets/images/decorations/my-octocat.png' },
//     ],
//   })

//   return { picParamter }
// })
