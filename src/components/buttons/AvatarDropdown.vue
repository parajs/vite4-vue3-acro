<script lang="ts" setup>
  const { exit } = useUserStore();
</script>

<template>
  <a-dropdown
    trigger="hover"
    :popup-max-height="false"
    position="br"
    class="dropdown-box"
  >
    <a-avatar>
      <img
        alt="avatar"
        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
      />
    </a-avatar>
    <template #content>
      <a-space class="ml-3 mr-3 mt-3 mb-3">
        <a-avatar :size="50">
          <img
            alt="avatar"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          />
        </a-avatar>
        <div>
          <div class="nickname text-truncate">chenguzhen87</div>
          <div class="online">
            <a-badge status="success" class="mr-2" />在线
          </div>
        </div>
      </a-space>
      <a-doption class="doption-item" @click="$router.push('/creativeCentre')">
        <icon-edit />
        <span class="ml-4">创作中心</span>
      </a-doption>
      <a-doption class="doption-item" @click="$router.push('/user/profile')">
        <icon-user />
        <span class="ml-4">个人主页</span>
      </a-doption>
      <a-doption class="doption-item" @click="exit">
        <icon-to-right />
        <span class="ml-4">退出登录</span>
      </a-doption>
    </template>
  </a-dropdown>
</template>
<style scoped>
  .check-btn {
    display: inline-block;
    width: 20px;
  }

  .nickname {
    color: var(--color-text-2);
    font-size: 16px;
  }

  .online {
    margin-top: 12px;
    color: var(--color-text-2);
    font-size: 12px;
  }

  .doption-item {
    padding-top: 3px;
    padding-bottom: 3px;
    border-top: 1px solid var(--color-border-2);
  }

  .dropdown-box {
    width: 220px;
  }
</style>
