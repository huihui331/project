// 制作图片需要的数据的ts类型
export interface picParamterTs {
  title: string // 大标题
  titleColor: string // 大标题颜色
  titleFont: string // 大标题字体类型
  titleSize: number // 大标题字体大小
  subtitle: string // 小标题
  subtitleColor: string // 小标题颜色
  subtitleFont: string // 小标题字体类型
  subtitleSize: number // 小标题字体大小
  textAlign: string // 标题（大 + 小标题）对齐方式（居左、居中、居右）
  width: number // 图片宽度
  height: number // 图片高度
  padding: number // 图片内边距（把图片当成一个盒子，有padding，有margin）
  backgroundColor: string // 图片背景颜色
  decorationImg: decorationImgTs[]
}

// 装饰小图的ts类型
export interface decorationImgTs {
  id: number
  src: string
}
