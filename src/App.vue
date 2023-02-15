<script setup lang="ts">
  const locale = useAcroDesignLocale()
  debugger
</script>

<template>
   <a-config-provider :locale="locale">
    <RouterView />
  </a-config-provider>

  
</template>

<style scoped>

</style>
