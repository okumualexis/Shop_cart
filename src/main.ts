import './assets/main.css'
import VueSweetalert2 from "vue-sweetalert2"

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(VueSweetalert2).mount('#app')
