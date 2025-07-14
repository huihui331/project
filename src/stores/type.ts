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
  templateType: string // 模板类型（standard-标准, vertical-垂直, horizontal-水平, centered-居中, minimal-简约）
  isWatchWidth: boolean // 是否开启对仓库中变量width的watch监视
  width: string // 图片宽度
  height: string // 图片高度
  padding: string // 图片内边距（把图片当成一个盒子，有padding，有margin）
  backgroundColor: string // 图片背景颜色
  decorationImgSrc: string // 装饰小图的src
  decorationImgsHidden: boolean // 装饰小图是否全部隐藏  true：全部隐藏，false：不全部隐藏
  decorationImgSize: string // 装饰小图的大小(其实是装饰小图的宽度，因为对于img，你只设置宽度，高度会等比例自动变化)
  borderSize: string // 图片边框大小
  borderColor: string // 图片边框颜色
  borderRadius: string // 图片边框圆角
  pattern: string // 图片背景花样
  patternColor: string // 图片背景花样颜色
  patternOpacity: string // 图片背景花样的透明度
  patternSize: string // 图片背景花样的大小
  download: boolean // 用户点击下载时，download的值变为true，下载结束变为false
}
