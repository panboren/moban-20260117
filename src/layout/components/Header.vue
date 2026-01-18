<template>
  <div class="app-header">
    <div class="left-menu">
      <el-icon class="hamburger" @click="toggleSidebar">
        <Fold v-if="!appStore.getMobile || appStore.getSidebarOpened" />
        <Expand v-else />
      </el-icon>
      <Logo v-if="appStore.getLogo && !appStore.getMobile" />
      <Breadcrumb v-if="appStore.getBreadcrumb && !appStore.getMobile" />
    </div>
    <div class="right-menu">
      <LangSwitch />
      <ThemeSwitch />
      <Screenfull v-if="!appStore.getMobile" />
      <UserDropdown />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/modules/app'
import { Fold, Expand } from '@element-plus/icons-vue'
import Logo from './Logo.vue'
import Breadcrumb from './Breadcrumb.vue'
import LangSwitch from './LangSwitch.vue'
import ThemeSwitch from './ThemeSwitch.vue'
import Screenfull from './Screenfull.vue'
import UserDropdown from './UserDropdown.vue'

const appStore = useAppStore()

const toggleSidebar = () => {
  if (appStore.getMobile) {
    appStore.toggleSidebar()
  } else {
    appStore.setLogo(!appStore.getLogo)
  }
}
</script>

<style scoped lang="scss">
.app-header {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--top-header-bg-color);
  color: var(--top-header-text-color);
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;

  .left-menu {
    display: flex;
    align-items: center;
    gap: 16px;

    .hamburger {
      font-size: 20px;
      cursor: pointer;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .right-menu {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}

@media screen and (max-width: 768px) {
  .app-header {
    padding: 0 12px;

    .right-menu {
      gap: 8px;
    }
  }
}
</style>
