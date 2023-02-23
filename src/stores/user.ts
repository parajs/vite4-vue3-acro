
export const useUserStore = defineStore('user', () => {
  const storeageToken = localStorage.getItem('userToken')
  const storeageUser = localStorage.getItem('user')
  const userToken = ref(storeageToken)

  const user = ref(storeageUser);

  // 登录
  function login(payload: KVObject) {
    const { token, user } = payload
    localStorage.setItem('userToken', token)
    localStorage.setItem('user', JSON.stringify(user))

    user.value = user;
    userToken.value = token
  }

  // 退出登录
  async function exit() {
    localStorage.removeItem('userToken')
    localStorage.removeItem('user')
    user.value = ''
    userToken.value = ''
    await __router.push('/')
    messageInfo(__t('exitTips'))
  }

  return { userToken, user, login, exit }
})
