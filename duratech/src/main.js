import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import from ''
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
// import bootstrapjs from '../node_modules/bootstrap/dist/js/bootstrap.js'
// import { popper } from '@popperjs/core'
// import jQuery from 'jquery'

createApp(App).use(router).mount('#app')
