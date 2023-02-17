export type Theme = 'dark' | 'light' | 'desk'

export default function useTheme(theme: Theme = 'light') {
    const currentTheme = ref(theme)
    let darkThemeMq: MediaQueryList

    const callBack = (e: MediaQueryListEvent) => {
        if (e.matches) {
            document.body.setAttribute('arco-theme', 'dark');
        } else {
            document.body.removeAttribute('arco-theme');
        }
    }
    const changeTheme = (value: Theme) => {
        const map = {
            dark() {
                // 设置为暗黑主题
                document.body.setAttribute('arco-theme', 'dark')
                localStorage.setItem('arco-locale', value)
                currentTheme.value = 'dark'
                darkThemeMq && darkThemeMq.removeListener(callBack)
            },
            light() {
                // 恢复亮色主题
                document.body.removeAttribute('arco-theme')
                localStorage.removeItem('arco-locale')
                currentTheme.value = 'light'
                darkThemeMq && darkThemeMq.removeListener(callBack)
            },
            desk() {
                // 跟随系统
                currentTheme.value = 'desk'
                darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
                darkThemeMq && darkThemeMq.addListener(callBack);
            }

        }

        map[value]()
        // useStorage({key: 'arco-locale', defaults: value})
    };
    return {
        currentTheme,
        changeTheme,
    };
}