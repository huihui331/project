// 获取花样的显示图片的路径
export const getPatternFile = (url: string): string => {
  console.log('看看url', import.meta.url)
  return new URL(`../assets/images/patterns/${url}`, import.meta.url).href
}

// 获取装饰小图的显示图片的路径
export const getDecorationFile = (url: string): string => {
  console.log(
    '看看结果',
    new URL(`../assets/images/decorations/${url}`, import.meta.url).href,
  )
  return new URL(`../assets/images/decorations/${url}`, import.meta.url).href
}
