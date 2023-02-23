
import { createI18n, type I18n } from 'vue-i18n'

import messages from '@/locales/index.json'
const defaultLocale = localStorage.getItem('arco-locale') || 'zh-CN';

const i18n = createI18n({
    locale: defaultLocale,
    fallbackLocale: 'zh-CN',
    messages: messages
})


export default i18n
