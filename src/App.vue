<script setup lang="ts">
  const { localeMessages } = useAcroDesiginLocale();
  useTheme();
</script>

<template>
  <a-config-provider :locale="localeMessages">
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        <a-spin />
      </template>
    </Suspense>
  </a-config-provider>
</template>
