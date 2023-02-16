<script setup lang="ts">
  const visible = ref(false);

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

  const switchTheme = () => {
    messageInfo("ddddddddddddddd")
    document.body.setAttribute('arco-theme', 'dark');
  }

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

darkThemeMq.addListener(e => {
 if (e.matches) {
   document.body.setAttribute('arco-theme', 'dark');
 } else {
    document.body.removeAttribute('arco-theme');
  }
});

  const { data,execute} = indexlist({page:1})

</script>

<template>
  <main>
    <fixed-header />
    <a-space>
    <a-button type="primary">Primary</a-button>
    <a-button>Secondary</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="outline">Outline</a-button>
    <a-button type="text">Text</a-button>
  </a-space>
    <a-button @click="handleClick">Open Modal</a-button>
    <a-button @click="switchTheme">主题切换</a-button>
    <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
      <template #title>
        Title
      </template>
      <div>You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.</div>
    </a-modal>
    <a-list>
    <template #header>
      List title
    </template>
    <a-list-item v-for="(item,index) in data?.list" :key="index"> {{item.title}}</a-list-item>
  </a-list>
  </main>
</template>
