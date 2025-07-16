import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
// Vite的类型提示辅助函数
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入svg需要的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 打包的静态资源引用路径
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/images/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets'),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    // postcss: {
    //   plugins: [
    //     postCssPxToRem({
    //       rootValue: 37.5,
    //       propList: ['*'],
    //       selectorBlackList: ['norem']
    //     })
    //   ]
    // },
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "@/styles/variable.scss";',
      },
    },
  },
})
