import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// import router from './package/library/router/router'

import element from './plugin/element'
createApp(App)
    .use(element)
    // .use(router)
    .mount('#app')