<script lang="ts" setup>
  const { t, locale,messages } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    debugger
</script>
<i18n src="./locales/about.json"></i18n>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-space>
    <a-button type="primary">Primary</a-button>
    <a-button>Secondary</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="outline">Outline</a-button>
    <a-button type="text">Text</a-button>
  </a-space>
  <a-card
      class="card-demo"
      title="国际化示例"
      hoverable
    >
      <template #extra>
        <a-link>More</a-link>
      </template>
      <a-button type="primary">{{ t('language') }}</a-button>
      <a-button>{{ t('hello') }}</a-button>
    </a-card>
  </div>
 
</template>
<style>

.card-demo {
  margin-top: 20px;
}
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
