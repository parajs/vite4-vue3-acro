<script setup lang="ts">
  const { localeMessages } = useAcroDesiginLocale()
  useTheme()
</script>

<template>
   <a-config-provider :locale="localeMessages">
    <RouterView />
  </a-config-provider>
</template>

<style scoped>

</style>
