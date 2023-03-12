import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'virtual:windi.css'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.$env = "全局变量"

declare module 'vue'{
    export interface ComponentCustomProperties {
        $env: String
    }
}

app.mount('#app')
