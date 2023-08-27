import { createApp } from 'vue'
import App from './App.vue'

//import Vue from 'vue'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

//Vue.use(ElementPlus);
//Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
