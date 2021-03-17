import { createApp } from 'vue'
import { createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import Home from '@/components/Home.vue'

// Here I define routes so the vue router module can show them in my SPA,
// without having to reload the page. Magic!
const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  // Provide the history implementation to use.
  history: createWebHashHistory(),
  routes: routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
