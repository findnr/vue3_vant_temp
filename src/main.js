/*
 * @Author: findnr
 * @Date: 2024-04-24 07:16:55
 * @LastEditors: findnr
 * @LastEditTime: 2024-04-24 07:44:24
 * @Description: 
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import setupPlugins from './plugins'

const app = createApp(App)

setupPlugins(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
