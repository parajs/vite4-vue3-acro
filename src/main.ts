

import App from './App.vue'
import router from './router'
import '@/utils/interceptors'
import './styles/global.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

// 全局注册
window.__router = router
// @ts-ignore
window.__i18n = i18n
window.__t = (key: string) => i18n.global.t(key)
window.__app = app
