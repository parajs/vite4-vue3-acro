import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';

export default function useAcroDesiginLocale() {
  const currentLocale = computed(() => {
    return __i18n.global.locale.value;
  });

  const localeMessages = computed(() =>
    currentLocale.value === 'zh-CN' ? zhCN : enUS
  );

  const changeLocale = (value: string) => {
    __i18n.global.locale.value = value;
    localStorage.setItem('arco-locale', value);
  };
  return {
    localeMessages,
    currentLocale,
    changeLocale,
  };
}
