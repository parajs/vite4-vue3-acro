<template>
    <a-layout>
      <div
        class="layout-sider"
      >
        <LayoutSider />
      </div>
      <div  class="layout-navbar">
         <LayoutNavbar />
      </div>
      <a-layout-content class="layout-content">
        <PageLayout />
      </a-layout-content>
    </a-layout>
  </template>
  
  <script lang="ts" setup>
    import LayoutSider from './LayoutSider.vue';
    import PageLayout from './PageLayout.vue';
    import LayoutNavbar from './LayoutNavbar.vue';
    import logo from '@/assets/logo.png'
  </script>
  
  <style scoped lang="less">
    .layout-navbar {
      position: fixed;
      top: 0;
      left: 72px;
      z-index: 20;
      width: 100%;
      padding-left: 20px;
      background-color: var(--color-fill-1);
      border-bottom: 1px solid var(--color-border);
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--color-text-2);
    }
  
    .layout-sider {
      width: 72px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      height: 100%;
      border-right: 1px solid var(--color-border);
      background-color: var(--color-fill-1);
      display: flex;
      align-items: center;
      flex-direction: column;

     
    }
  
    .layout-content {
      min-height: 100vh;
      overflow-y: hidden;
      background-color: var(--color-bg-2);
    }
  </style>
  