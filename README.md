<div align="center">

# MyAdmin 管理系统

现代化企业级后台管理系统框架

[Vue 3] · [TypeScript] · [Vite] · [Element Plus] · [Pinia]

[![](https://img.shields.io/badge/Vue-3.5-42b883)](https://vuejs.org/)
[![](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![](https://img.shields.io/badge/Vite-6.0-646cff)](https://vitejs.dev/)
[![](https://img.shields.io/badge/Element%20Plus-2.9-409eff)](https://element-plus.org/)
[![](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

</div>

## ✨ 特性

- 🎨 **现代化技术栈** - Vue 3 Composition API + TypeScript + Vite
- 📦 **开箱即用** - 完整的项目结构和配置
- 🔐 **权限管理** - 基于角色的权限控制系统
- 🌍 **国际化** - 支持多语言切换
- 📱 **响应式** - 适配移动端和桌面端
- 🎯 **主题定制** - 支持暗黑模式和自定义主题
- 🚀 **高性能** - 基于 Vite 的极速开发体验
- 📦 **组件丰富** - 封装了大量常用组件
- 🔧 **工具完善** - 完整的工具函数和 Hooks

## 🛠️ 技术栈

| 分类 | 技术 |
|------|------|
| **框架** | Vue 3.5, Vue Router 4.5, Pinia 3.0 |
| **语言** | TypeScript 5.6 |
| **构建** | Vite 6.0 |
| **UI** | Element Plus 2.9, UnoCSS 0.65 |
| **工具** | Axios 1.7, dayjs 1.11, lodash-es 4.17, @vueuse/core 12.2 |
| **其他** | vue-i18n 11.0, echarts 5.6, nprogress 0.2 |

## 🚀 快速开始

```bash
# 克隆项目
git clone <repository-url>

# 进入项目目录
cd moban-20260117

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 📁 项目结构

```
moban-20260117/
├── public/                 # 静态资源
├── src/
│   ├── api/               # API 接口
│   ├── assets/            # 资源文件
│   ├── components/        # 公共组件
│   │   └── Table/         # 表格组件
│   ├── config/            # 配置文件
│   │   └── axios/         # Axios 配置
│   ├── composables/       # 组合式函数
│   ├── directives/        # 自定义指令
│   │   └── permission.ts   # 权限指令
│   ├── hooks/             # 自定义 Hooks
│   ├── i18n/              # 国际化配置
│   ├── layout/            # 布局组件
│   ├── locales/           # 语言包
│   ├── router/            # 路由配置
│   ├── store/             # 状态管理
│   │   └── modules/       # Store 模块
│   ├── styles/            # 样式文件
│   ├── types/             # 类型定义
│   ├── utils/             # 工具函数
│   ├── views/             # 页面视图
│   ├── App.vue            # 根组件
│   └── main.ts            # 入口文件
├── .env                   # 环境变量
├── vite.config.ts         # Vite 配置
└── package.json           # 依赖配置
```

## 💡 核心功能

### 🔐 权限系统

```vue
<!-- 按钮权限 -->
<el-button v-permission="['system:user:add']">新增</el-button>
<el-button v-permission="['system:user:edit']">编辑</el-button>
```

```typescript
// 路由权限 - 动态路由加载
// 数据权限 - 基于用户角色的数据过滤
```

### 📡 请求系统

```typescript
import { get, post, upload, download } from '@/config/axios'

// GET 请求
const data = await get('/api/user')

// POST 请求
const result = await post('/api/user', { name: 'admin' })

// 文件上传
await upload('/api/upload', file)

// 文件下载
await download('/api/export', 'data.xlsx')
```

### 🧩 组件封装

```vue
<!-- 表格组件 -->
<Table
  :data="tableData"
  :columns="columns"
  :loading="loading"
  :total="total"
  @page-change="handlePageChange"
/>

<!-- 表单组件 -->
<Form
  :schema="formSchema"
  :model="formData"
  @submit="handleSubmit"
/>
```

### 🌍 国际化

```typescript
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 使用翻译
const message = t('common.confirm')
console.log(message) // '确认'
```

## 📝 开发规范

### 命名规范

- **组件**: `PascalCase` (如 `UserTable.vue`)
- **文件**: `kebab-case` (如 `user-table.ts`)
- **变量**: `camelCase` (如 `userName`)
- **常量**: `UPPER_SNAKE_CASE` (如 `API_BASE_URL`)

### Git 提交

```bash
feat:     新功能
fix:      修复 bug
docs:     文档更新
style:    代码格式
refactor: 重构
test:     测试
chore:    构建/工具链更新
```

### 示例

```bash
git commit -m "feat(user): 添加用户管理功能"
git commit -m "fix: 修复登录接口调用错误"
```

## 🌐 浏览器支持

| 浏览器 | 版本 |
|--------|------|
| Chrome | >= 87 |
| Firefox | >= 78 |
| Safari | >= 14 |
| Edge | >= 88 |

## 📄 许可证

[MIT](./LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request!

---

<div align="center">
Made with ❤️ by MyAdmin Team
</div>

