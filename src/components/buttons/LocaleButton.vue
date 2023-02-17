<script lang="ts" setup >
  import type { Theme } from '@/composables/useTheme'
  const { t } = useI18n()
  const {currentLocale, changeLocale} = useAcroDesiginLocale();

  const locales = [
        {tag: '简体中文',locale: 'zh-CN'},
        {tag: 'English',locale: 'en-US'}
    ]

</script>

<template>
    <a-dropdown trigger="hover">
        <a-button type="text">
            {{ currentLocale === 'zh-CN' ? '简体中文': 'English' }}
            <template #icon>
                <icon-language />
            </template>
        </a-button>
      <template #content>
        <a-doption 
        :active="currentLocale == item.locale" 
        v-for="(item,key) in locales" 
        @click="changeLocale(item.locale)"> 
            <div class="check-btn">
                <icon-check  v-if="currentLocale == item.locale" />
            </div>
            <span class="ml-2">{{ item.tag }}</span>
        </a-doption>
      </template>
    </a-dropdown>
</template>
<style scoped >
.check-btn {
    width:  20px;
    display:inline-block;
}
</style>


