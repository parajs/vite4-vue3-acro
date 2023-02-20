<script setup lang="ts">
  const visible = ref(false);
  const { t } = useI18n();
  const handleClick = () => {
    execute();
    visible.value = true;
  };
  const handleOk = () => {
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  }


  const { data,execute} = indexlist({page:1})
  const { data: mockLisst} = homelist({page:1})
</script>

<template>
  <main>
    <fixed-header />
    <a-layout class="ml-5 mr-5" style="margin-top: 80px">
      <a-card  title="Buttons国际化">
        <a-space>
          <a-button type="primary">{{ t('btn-primary') }}</a-button>
          <a-button>{{ t('btn-secondary') }}</a-button>
          <a-button type="dashed">{{ t('btn-dashed') }}</a-button>
          <a-button type="outline">{{ t('btn-outline') }}</a-button>
          <a-button type="text">{{ t('btn-text') }}</a-button>
          <a-button @click="handleClick">{{ t('btn-btnModal') }}</a-button>
        </a-space>
      </a-card>
      <a-card class="mt-6" title="后台获取数据">
        <a-list class="mt-5">
          <a-list-item v-for="(item,index) in data?.list" :key="index"> {{item.title}}</a-list-item>
        </a-list>
      </a-card>

      <a-card class="mt-6" title="获取mock数据">
        <a-list class="mt-5">
          <a-list-item v-for="(item,index) in mockLisst" :key="index"> {{item.title}}</a-list-item>
        </a-list>
      </a-card>
      <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
        <template #title>
          Title
        </template>
        <div>You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.</div>
      </a-modal>
      
    </a-layout>
    
  </main>
</template>
<i18n src="./Home.json"></i18n>
