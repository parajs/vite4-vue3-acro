type Theme = 'dark' | 'light' | 'desk'

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

        if (value === 'dark') {
            // 设置为暗黑主题
            document.body.setAttribute('arco-theme', 'dark')
            localStorage.setItem('arco-locale', value)
            currentTheme.value = 'dark'
            darkThemeMq && darkThemeMq.removeListener(callBack)
            return
        }

        if (value === 'light') {
            // 恢复亮色主题
            document.body.removeAttribute('arco-theme')
            localStorage.removeItem('arco-locale')
            currentTheme.value = 'light'
            darkThemeMq && darkThemeMq.removeListener(callBack)
            return
        }

        if (value === 'desk') {
            currentTheme.value = 'desk'
            darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

            darkThemeMq && darkThemeMq.addListener(callBack);

        }


        // useStorage({key: 'arco-locale', defaults: value})
    };
    return {
        currentTheme,
        changeTheme,
    };
}