import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import '@/styles/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
