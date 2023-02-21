<script lang="ts" setup >
  const { t } = useI18n()
</script>

<template>
      <header class="fixed-header">
         <div class="left-side">
            <icon-lark-color size="30" />
            <h3 class="ml-3"> Vite4-vue3-acrodesign 模板</h3>
         </div>
         <div class="right-side">
            <a-space>
               <a-button href="/user/login">{{ t('login-btn') }}</a-button>
               <LocaleButton  />
               <ThemeButton />
            </a-space>
         </div>
      </header>
</template>

<i18n src="./FixedHeader.json" />

<style scoped>
 .fixed-header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 200;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: var(--color-bg-2);
    color: var(--color-text-1);

 }

 .left-side,.right-side {
   display: flex;
   align-items: center;
 }


</style>