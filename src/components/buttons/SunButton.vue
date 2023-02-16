<template>
    <a-dropdown trigger="hover">
        <a-button size="small">
            <template #icon>
                <IconSun v-if="currentTheme == 'light'" />
                <icon-moon-fill v-if="currentTheme == 'dark'"  />
                <icon-desktop v-if="currentTheme == 'desk'"  />
            </template>
        </a-button>
      <template #content>
        <a-doption @click="changeTheme('light')">{{ t('theme-light') }}</a-doption>
        <a-doption @click="changeTheme('dark')">{{ t('theme-dark') }}</a-doption>
        <a-doption @click="changeTheme('desk')">{{ t('theme-prefers-color-theme') }}</a-doption>
      </template>
    </a-dropdown>
</template>
<i18n src="./SunButton.json" />
<script lang="ts" setup >
  const { t } = useI18n()
  const {currentTheme, changeTheme} = useTheme();
  debugger
</script>

