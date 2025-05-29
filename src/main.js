import '@/assets/no use/main.css'
import "./CSS/KT/Keyframe.css"
import "./CSS/KT/FontLovely.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'; // 导入所有图标
import App from './App.vue'
import router from './router'
import "./CSS/LoginView/TakeWord.css"
import "./views/HelloKitty/KTNavigation.vue"
import KTNavigation from '@/views/HelloKitty/KTNavigation.vue'

const app = createApp(App)
app.use(ElementPlus);
// 全局注册所有图标组件
app.component("KTNavigation",KTNavigation)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(createPinia())

app.use(router)

app.mount('#app')
