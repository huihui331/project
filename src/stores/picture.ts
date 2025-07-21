// 仓库里存储关于要生成图片的各项数据
import { defineStore } from 'pinia'
// 引入ts
import type { picParamterTs } from './type'

const usePictureStore = defineStore('Picture', {
  state(): picParamterTs {
    return {
      title: '输入文章核心主题（6-12字为佳）', // 大标题
      subtitle: '副标题：补充关键信息或吸引点击的摘要', // 小标题
      width: '756', // 图片宽度
      height: '200', // 图片高度
      padding: '25', // 图片内边距
      titleColor: '#FFFFFF', // 大标题颜色，收集到的颜色数据是16进制数据
      backgroundColor: '#000000', // 背景颜色
      subtitleColor: '#fe90ea', // 小标题颜色
      textAlign: 'flex-start', // 文字对齐方式（居左、居中、居右）
      templateType: 'standard', // 模板类型（standard-标准, vertical-垂直, horizontal-水平, centered-居中, minimal-简约）
      titleFont: 'MavenPro', // 大标题字体类型
      subtitleFont: 'Kalam', // 小标题字体类型
      titleSize: '30', // 大标题字体大小
      subtitleSize: '20', // 小标题字体大小
      borderColor: '#FFFFFF', // 边框颜色
      borderSize: '5', // 边框大小
      borderRadius: '7', // 边框圆角
      patternColor: '#FFFFFF', // 背景花样颜色
      patternSize: '500', // 背景花样大小
      patternOpacity: '0.25', // 背景花样透明度
      pattern: 'topography', // 背景花样
      decorationImgSize: '115', // 图片里的装饰小图的大小
      decorationImgSrc: 'internet/terminal-circle.png', // 图片里的装饰小图
      decorationImgsHidden: false, // 装饰小图是否全部隐藏  true：全部隐藏，false：不全部隐藏
      isWatchWidth: false, // 是否开启对仓库中变量width的watch监视    false：默认不开启
      download: false, // 用户点击下载时，download的值变为true，下载结束变为false
    }
  },
  actions: {
    // 开启/关闭对width的监视
    IsWatchWidth() {
      this.isWatchWidth = !this.isWatchWidth
    },
    // 下载图片
    DownloadPicture() {
      this.download = !this.download
    },
    // 切换模板类型
    changeTemplate(templateType: string) {
      this.templateType = templateType
      if (templateType === 'vertical') {
        this.decorationImgSize = '50'
      } else {
        this.decorationImgSize = '77'
      }
    },
  },
})
export default usePictureStore
