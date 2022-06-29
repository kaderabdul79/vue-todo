import { createApp } from 'vue'
import App from './App.vue'
// importing store
import store from './store/index'

createApp(App).use(store).mount('#app')
