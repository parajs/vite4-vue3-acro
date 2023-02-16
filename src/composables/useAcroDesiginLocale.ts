import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';


export default function useAcroDesiginLocale() {
    const i18 = useI18n();
    const currentLocale = computed(() => {
        return i18.locale.value;
    });

    const localeMessages = computed(() => (currentLocale.value === 'zh-CN' ? zhCN : enUS));

    const changeLocale = (value: string) => {
        i18.locale.value = value;
        localStorage.setItem('arco-locale', value);
    };
    return {
        localeMessages,
        currentLocale,
        changeLocale,
    };
}