import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@arco-design/web-vue/es/message/style/css.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
