// 制作图片需要的数据的ts类型
export interface picParamterTs {
  title: string // 大标题
  titleColor: string // 大标题颜色
  titleFont: string // 大标题字体类型
  titleSize: string // 大标题字体大小
  subtitle: string // 小标题
  subtitleColor: string // 小标题颜色
  subtitleFont: string // 小标题字体类型
  subtitleSize: string // 小标题字体大小
  textAlign: string // 标题（大 + 小标题）对齐方式（居左、居中、居右）
  width: string // 图片宽度
  height: string // 图片高度
  padding: string // 图片内边距（把图片当成一个盒子，有padding，有margin）
  backgroundColor: string // 图片背景颜色
  decorationImgSrc: string // 装饰小图的src
  decorationImgSize: string // 装饰小图的大小
  borderSize: string // 图片边框大小
  borderColor: string // 图片边框颜色
  borderRadius: string // 图片边框圆角
  pattern: string // 图片背景花样
  patternColor: string // 图片背景花样颜色
  patternOpacity: string // 图片背景花样的透明度
  patternSize: string // 图片背景花样的大小
}
