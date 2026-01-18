<template>
  <div class="sidebar-container">
    <div v-if="!isCollapse" class="logo-container">
      <Logo />
    </div>
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="true"
        router
      >
        <el-menu-item index="/index">
          <el-icon><HomeFilled /></el-icon>
          <template #title>首页</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/modules/app'
import Logo from './Logo.vue'
import { HomeFilled } from '@element-plus/icons-vue'

const route = useRoute()
const appStore = useAppStore()

const activeMenu = computed(() => route.path)
const isCollapse = computed(() => !appStore.getLogo)
</script>

<style scoped lang="scss">
.sidebar-container {
  width: 210px;
  height: 100vh;
  background-color: #001529;
  transition: width 0.28s;

  .logo-container {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  .el-menu {
    border-right: none;
  }

  :deep(.el-menu-item) {
    color: #bfcbd9;
    background-color: #001529;

    &:hover {
      background-color: #263445;
    }

    &.is-active {
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
