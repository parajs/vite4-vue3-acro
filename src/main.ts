
// import ArcoVue from '@arco-design/web-vue';
// import '@arco-design/web-vue/dist/arco.css';
import { createI18n } from 'vue-i18n'
import App from './App.vue'
// import router from './router'

import './styles/global.css'

// import messages from '@intlify/unplugin-vue-i18n/messages'
const defaultLocale = localStorage.getItem('arco-locale') || 'zh-CN';
const i18n = createI18n({
    locale: defaultLocale,
    // Legacy: false,
    fallbackLocale: 'zh-CN'
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
// app.use(ArcoVue);

app.mount('#app')
