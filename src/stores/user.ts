
export const useUserStore = defineStore('user', () => {
  const storageToken = localStorage.getItem('userToken')
  const storageUser = localStorage.getItem('user')

  // state
  const userToken = ref(storageToken)
  const user = ref(storageUser ? JSON.parse(storageUser) : null);


  // 登录
  async function login(payload: KVObject) {
    const { token, user } = payload
    localStorage.setItem('userToken', token)
    localStorage.setItem('user', JSON.stringify(user))

    user.value = user;
    userToken.value = token
    await __router.push('/circle')
    messageInfo(__t('loginSuccessTips'))
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
