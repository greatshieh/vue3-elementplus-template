import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import setUpElementPlus from './plugins/element'
import setUpSvgIcon from './plugins/svgicon'

import '@/styles/index.scss' // global css

import './icons' // icon
import './permission' // permission control

const app = createApp(App)
setUpElementPlus(app)
setUpSvgIcon(app)
app.use(store).use(router).mount('#app')
