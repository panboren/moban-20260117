<template>
  <div class="home">
    <el-card class="stat-card">
      <template #header>
        <span>{{ t('home.welcome') }}</span>
      </template>
      <el-row :gutter="20">
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
          <el-statistic :title="t('home.totalUsers')" :value="1234" />
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
          <el-statistic :title="t('home.articleCount')" :value="567" />
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
          <el-statistic :title="t('home.totalViews')" :value="8901" />
        </el-col>
        <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
          <el-statistic :title="t('home.todayViews')" :value="234" />
        </el-col>
      </el-row>
    </el-card>

    <el-card class="table-card">
      <template #header>
        <span>{{ t('home.recentActivity') }}</span>
      </template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" :label="t('home.date')" width="120" />
        <el-table-column prop="name" :label="t('home.user')" width="100" />
        <el-table-column prop="action" :label="t('home.action')" min-width="120" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const tableData = ref([
  {
    date: '2024-01-15',
    name: '张三',
    action: '登录系统'
  },
  {
    date: '2024-01-15',
    name: '李四',
    action: '创建文章'
  },
  {
    date: '2024-01-15',
    name: '王五',
    action: '更新用户信息'
  }
])
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  box-sizing: border-box;

  .stat-card {
    margin-bottom: 20px;
  }

  .table-card {
    :deep(.el-card__body) {
      padding: 0;
      overflow-x: auto;
    }
  }
}

@media screen and (max-width: 768px) {
  .home {
    padding: 12px;

    .stat-card {
      :deep(.el-statistic__head) {
        font-size: 12px;
      }

      :deep(.el-statistic__content) {
        font-size: 18px;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .home {
    padding: 8px;
  }
}
</style>

