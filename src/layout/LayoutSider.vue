<template>
    <div class="layout-sider">
        <Logo />
        <a-button class="button-48"  shape="circle" size="large">
            <icon-plus />
        </a-button>
    </div>
    
</template>
<script lang="ts" setup>
</script>
<style scoped>
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
.button-48 {
    width: 48px !important;
    height: 48px !important;
}

</style>

