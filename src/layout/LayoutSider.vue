<template>
    <img :src="logo" class="logo" />
    <a-button class="button-48"  shape="circle" size="large">
    <icon-plus />
    </a-button>
</template>
<script lang="ts" setup>
 import logo from '@/assets/logo.png'
</script>
<style scoped>
.button-48 {
    width: 48px !important;
    height: 48px !important;
}

.logo {
    margin-top: 12px;
    margin-bottom: 12px;
    width: 48px;
    height: 48px;
}
</style>