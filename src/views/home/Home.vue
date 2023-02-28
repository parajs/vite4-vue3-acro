<script setup lang="ts">
  import Mysvg from '@/assets/svg/my.svg';
  const visible = ref(false);
  const { t } = useI18n();

  const {
    data: mockList,
    runAsync,
    isLoading,
  } = useRequest(getMockList, {
    defaultParams: [{ page: 1 }],
    auto: false,
  });

  const {
    data: kuggamaxIndexPageing,
    run: runKuggamaxIndexPageing,
    refresh,
    params,
    isLoading: isLoadingPaging,
  } = useRequest(getKuggamaxIndexPaging, {
    defaultParams: [{ page: 1 }],
    auto: true,
    initialData: {
      pageIndex: 1,
    },
    onSuccess(data, params) {
      console.info('onSuccess', data, params);
    },
    onError(err, params) {
      console.info('onError', err, params);
    },
  });

  const handleClick = () => {
    visible.value = true;
  };
  const handleOk = () => {
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  };

  const handleMockList = () => {
    runAsync().then((res) => {
      console.log('runAsync', res);
    });
  };
</script>

<template>
  <main>
    <fixed-header />
    <a-layout class="ml-5 mr-5" style="margin-top: 80px">
      <a-card title="图标">
        <Mysvg />
      </a-card>
      <a-card title="Buttons国际化">
        <a-space>
          <a-button type="primary">{{ t('btn-primary') }}</a-button>
          <a-button>{{ t('btn-secondary') }}</a-button>
          <a-button type="dashed">{{ t('btn-dashed') }}</a-button>
          <a-button type="outline">{{ t('btn-outline') }}</a-button>
          <a-button type="text">{{ t('btn-text') }}</a-button>
          <a-button @click="handleClick">{{ t('btn-btnModal') }}</a-button>
        </a-space>
      </a-card>
      <a-card class="mt-6" title="Kuggmax server list">
        <template #extra>
          <a-button type="text" @click="refresh"> Refresh </a-button>

          <a-button type="text" @click="runKuggamaxIndexPageing()">
            Get Paging 1
          </a-button>

          <a-button
            type="text"
            @click="runKuggamaxIndexPageing({ page: params[0]?.page + 1 })"
          >
            Get Kuggmax Paging {{ params[0]?.page + 1 }}
          </a-button>
        </template>
        <a-skeleton v-if="isLoadingPaging">
          <a-space direction="vertical" :style="{ width: '100%' }" size="large">
            <a-skeleton-line :rows="3" />
          </a-space>
        </a-skeleton>
        <a-list class="mt-5" v-else>
          <a-list-item
            v-for="(item, index) in kuggamaxIndexPageing?.list"
            :key="index"
          >
            {{ item.title }}</a-list-item
          >
        </a-list>
      </a-card>

      <a-card class="mt-6" title="Mock list">
        <template #extra>
          <a-button @click="handleMockList" type="text">Get Mock list</a-button>
        </template>
        <a-skeleton v-if="isLoading">
          <a-space direction="vertical" :style="{ width: '100%' }" size="large">
            <a-skeleton-line :rows="3" />
          </a-space>
        </a-skeleton>
        <a-list class="mt-5" v-else>
          <a-list-item v-for="(item, index) in mockList" :key="index">
            {{ item.title }}</a-list-item
          >
        </a-list>
      </a-card>
      <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
        <template #title> Title </template>
        <div>
          You can customize modal body text by the current situation. This modal
          will be closed immediately once you press the OK button.
        </div>
      </a-modal>
    </a-layout>
  </main>
</template>
<i18n src="./Home.json"></i18n>
