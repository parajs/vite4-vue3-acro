<script lang="ts" setup>
  const { currentLocale, changeLocale } = useAcroDesiginLocale();

  const locales = [
    { tag: '简体中文', locale: 'zh-CN' },
    { tag: 'English', locale: 'en-US' },
  ];
</script>

<template>
  <a-dropdown trigger="hover">
    <a-button type="text">
      {{ currentLocale === 'zh-CN' ? '简体中文' : 'English' }}
      <template #icon>
        <icon-language />
      </template>
    </a-button>
    <template #content>
      <a-doption
        :active="currentLocale == item.locale"
        v-for="(item, key) in locales"
        :key="key"
        @click="changeLocale(item.locale)"
      >
        <template #icon>
          <div class="check-btn">
            <icon-check v-if="currentLocale == item.locale" />
          </div>
        </template>
        <span>{{ item.tag }}</span>
      </a-doption>
    </template>
  </a-dropdown>
</template>
<style scoped>
  .check-btn {
    width: 20px;
  }
</style>
