<template>
  <a-layout>
    <LayoutSider />
    <LayoutNavbar />
    <a-layout-content class="layout-content">
      <PageLayout />
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
  import LayoutSider from './LayoutSider.vue';
  import PageLayout from './PageLayout.vue';
  import LayoutNavbar from './LayoutNavbar.vue';
</script>

<style scoped lang="less">
  .layout-content {
    box-sizing: border-box;
    min-height: 100vh;
    padding-top: 60px;
    padding-left: 72px;
    overflow-y: hidden;
    background-color: var(--color-bg-2);
  }
</style>
