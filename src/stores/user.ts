import type { KVObject } from "@/types"


export const useUserStore = defineStore('user', () => {
  const storeageToken = localStorage.getItem('userToken')
  const storeageUser = localStorage.getItem('user')
  const userToken = ref(storeageToken)

  const user = ref(storeageUser);
  function login(payload: KVObject) {
    const { token, user } = payload
    localStorage.setItem('userToken', token)
    localStorage.setItem('user', JSON.stringify(user))

    user.value = user;
    userToken.value = token
  }

  return { userToken, user, login }
})
