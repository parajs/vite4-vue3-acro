<script lang="ts" setup >

</script>

<template>
      <header class="fixed-header">
         <div>left</div>
         <div>
           <SunButton />
         </div>
      </header>
</template>

<style scoped>
 .fixed-header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 200;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: var(--color-bg-2);
    color: var(--color-text-1);

 }


</style>