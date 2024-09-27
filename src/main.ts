import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 清除标签默认样式，引入模版的全局的样式
import '@/styles/index.scss'
// 引入路由
// import router from './router'
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入html2canvas
import html2canvas from 'html2canvas'

const app = createApp(App)

app.use(createPinia())
// app.use(router)
// 安装自定义插件
app.use(globalComponent)

app.mount('#app')
