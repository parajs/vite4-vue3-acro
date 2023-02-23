<template>
     <div  class="layout-navbar">
        <div> 

        </div>
        <a-space>
            <LocaleButton  />
            <ThemeButton />
            <AvatarDropdown />
        </a-space>
       
      </div>
</template>
<style scoped>
    .layout-navbar {
      position: fixed;
      top: 0;
      right: 0;
      left: 72px;
      z-index: 20;
      padding-left: 20px;
      padding-right: 20px;
      background-color: var(--color-fill-1);
      border-bottom: 1px solid var(--color-border);
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--color-text-2);
    }
  
</style>