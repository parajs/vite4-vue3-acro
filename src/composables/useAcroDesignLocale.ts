import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';

export default function useAcroDesignLocale() {
    const { locale } = useI18n({
        inheritLocale: true,
        useScope: 'global'
    });
    const messages = computed(() => (locale.value === 'zh-CN' ? zhCN : enUS));
    return messages;
}