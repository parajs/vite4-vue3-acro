import type { Router } from "vue-router";

// WhiteList
const whiteList: Array<string> = ["login", "home"];

const appTitle = __t("title") as string;
const title = useTitle(appTitle);

export default function beforeEach(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore();
    // set title
    to.meta?.title
      ? (title.value = to.meta.title as string)
      : (title.value = appTitle as string);

    // determine whether the user has logged in
    if (userStore.userToken) {
      // 已登录后访问登录页，重定向首页
      to.name === "login" ? next("/") : next();
    } else {
      // has no token
      if (whiteList.indexOf(to.name as string) != -1) {
        //public page  go directly
        next();
      } else {
        // other pages that do not have permission to access are redirected to the login page.
        next("/");
      }
    }
  });
}
