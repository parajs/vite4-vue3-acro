<script lang="ts" setup>
  const { t } = useI18n();
  const { userToken } = storeToRefs(useUserStore());
</script>

<template>
  <header class="fixed-header">
    <div class="left-side">
      <Logo />
      <h3 class="ml-3">{{ $t('title') }}</h3>
    </div>
    <div class="right-side">
      <a-space>
        <a-button v-if="!userToken" href="/user/login">{{
          t('login-btn')
        }}</a-button>
        <LocaleButton />
        <ThemeButton />
      </a-space>
    </div>
  </header>
</template>

<i18n src="./FixedHeader.json" />

<style scoped>
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 20px;
    color: var(--color-text-1);
    background-color: var(--color-bg-2);
  }

  .left-side,
  .right-side {
    display: flex;
    align-items: center;
  }
</style>
