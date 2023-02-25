<template>
   <a-layout class="login-layout">
    <a-space direction="vertical" size="large" style="width: 500px;">
        <div class="text-center">
          <Logo />
        </div>
        <a-form ref="refForm" :model="form" layout="vertical" size="large" :rules="rules" >
          <a-form-item field="username" hide-label>
            <a-input v-model="form.username"  :placeholder="t('usernamePlaceholder')" allow-clear>
              <template #prefix>
                <icon-user />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item field="pwd" hide-label>
            <a-input-password  v-model="form.pwd" :placeholder="t('pwdPlaceholder')" allow-clear>
              <template #prefix>
                <icon-eye />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-button @click="login" type="primary" size="large" long>{{ t('submit') }}</a-button>
          </a-form-item>
        </a-form>
      </a-space>
   </a-layout>
</template>
<i18n src="./locales/Login.json" />
<script lang="ts" setup>
import type { FormInstance } from '@arco-design/web-vue';
const { t } = useI18n()
const form = reactive({
  username: '',
  pwd: '',
})

const router = useRouter();
const refForm = ref<FormInstance>();    

const rules ={
  'username': [{
    required: true,
    message: t('usernamePlaceholder')
  }],
  'pwd': [{
    required: true,
    message: t('pwdPlaceholder')
  }]
}

const login = async ()=>{
  const errors = await refForm.value?.validate()
  if(!errors){
    const res = await userLogin(form)
    const store = useUserStore()
    store.login(res)
  }
}

</script>

<style scoped>
.login-layout {
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>