import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
import Loading from './plugin/loading'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.$env = "全局变量"
app.use(Loading)
app.use(ElementPlus)

type Lod = {
    show: () => void,
    hide: () => void
}

declare module 'vue'{
    export interface ComponentCustomProperties {
        $env: String,
        $Loading: Lod
    }
}

app.mount('#app')
