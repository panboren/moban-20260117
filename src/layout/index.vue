<template>
  <div class="app-wrapper" :class="{ 'mobile': isMobile }">
    <Sidebar v-if="isSidebar && !isMobile" />
    <el-drawer
      v-if="isMobile"
      v-model="sidebarVisible"
      direction="ltr"
      :size="210"
      :with-header="false"
      class="mobile-drawer"
    >
      <Sidebar />
    </el-drawer>
    <div class="main-container">
      <Header />
      <AppMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/store/modules/app'
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import AppMain from './components/AppMain.vue'

const appStore = useAppStore()

const isSidebar = computed(() => appStore.getLayout !== 'top')
const isMobile = computed(() => appStore.getMobile)

const sidebarVisible = computed({
  get: () => appStore.getSidebarOpened,
  set: (value) => appStore.setSidebarOpened(value)
})

const handleResize = () => {
  const width = document.body.clientWidth
  appStore.setMobile(width < 992)
  if (width < 992) {
    appStore.setSidebarOpened(false)
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
.app-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: var(--page-bg-color);
  transition: background-color 0.3s ease;

  &.mobile {
    .main-container {
      margin-left: 0;
    }
  }
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--page-bg-color);
  transition: background-color 0.3s ease, margin-left 0.3s ease;
}

.mobile-drawer {
  :deep(.el-drawer__body) {
    padding: 0;
  }
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s ease;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>


