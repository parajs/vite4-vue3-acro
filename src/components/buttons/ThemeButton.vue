<script lang="ts" setup>
  import type { Theme } from '@/composables/useTheme';
  const { t } = useI18n();
  const { currentTheme, changeTheme } = useTheme();

  const themes = [
    { type: 'light', t: 'theme-light' },
    { type: 'dark', t: 'theme-dark' },
    { type: 'desk', t: 'theme-desk' },
  ];
</script>

<template>
  <a-dropdown trigger="hover" position="br">
    <a-button>
      <template #icon>
        <IconSun v-if="currentTheme == 'light'" />
        <icon-moon-fill v-if="currentTheme == 'dark'" />
        <icon-desktop v-if="currentTheme == 'desk'" />
      </template>
    </a-button>
    <template #content>
      <a-doption
        :active="currentTheme == item.type"
        v-for="(item, key) in themes"
        :key="key"
        @click="changeTheme(item.type as Theme)"
      >
        <template #icon>
          <IconSun v-if="item.type === 'light'" />
          <icon-moon-fill v-if="item.type === 'dark'" />
          <icon-desktop v-if="item.type === 'desk'" />
        </template>
        <span class="ml-2 mr-2">{{ t(item.t) }}</span>
        <icon-check v-if="currentTheme == item.type" />
      </a-doption>
    </template>
  </a-dropdown>
</template>
<i18n src="./ThemeButton.json" />
<style scoped>
  .check-btn {
    display: inline-block;
    width: 20px;
  }
</style>
