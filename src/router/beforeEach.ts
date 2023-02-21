import type { Router } from "vue-router";

const VITE_TITLE = getEnvValue('VITE_TITLE') as string;

// whiteList
const whiteList: Array<string> = ['Home', 'Login'];

const title = useTitle(VITE_TITLE);

export default function beforeEach(router: Router) {

    router.beforeEach(async (to, from, next) => {
        // set title
        if (to.meta?.title) {
            title.value = to.meta.title as string;
        } else {
            title.value = VITE_TITLE as string;
        }

        // determine whether the user has logged in
        if (store.state.web3.token) {
            // 已登录后访问登录页，重定向首页
            to.name === 'Login' ? next({ name: 'LabList' }) : next();
        } else {
            // has no token
            if (whiteList.indexOf(to.name as string) != -1) {
                //public page  go directly
                next();
            } else {
                // other pages that do not have permission to access are redirected to the login page.
                next({ name: 'Home' });
            }
        }
    });

}