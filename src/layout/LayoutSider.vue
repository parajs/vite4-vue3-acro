<template>
  <div class="layout-sider">
    <Logo />
    <a-button class="button-48" shape="circle" size="large">
      <icon-plus />
    </a-button>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
  .layout-sider {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 72px;
    height: 100%;
    background-color: var(--color-fill-1);
    border-right: 1px solid var(--color-border);
  }

  .button-48 {
    width: 48px !important;
    height: 48px !important;
  }
</style>
