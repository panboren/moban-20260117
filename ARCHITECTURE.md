# 项目架构文档

## 技术栈

### 核心框架
- **Vue 3.5.13** - 渐进式 JavaScript 框架
- **Vite 6.0.3** - 下一代前端构建工具
- **TypeScript 5.6.3** - JavaScript 的超集
- **Vue Router 4.5.0** - 官方路由管理器
- **Pinia 3.0.1** - Vue 官方状态管理

### UI 框架
- **Element Plus 2.9.1** - Vue 3 组件库
- **UnoCSS 0.65.0** - 原子化 CSS 引擎

### 工具库
- **axios 1.7.9** - HTTP 请求库
- **dayjs 1.11.13** - 日期时间处理
- **lodash-es 4.17.21** - JavaScript 实用工具库
- **@vueuse/core 12.2.0** - Vue Composition 工具集
- **crypto-js 4.2.0** - 加密库
- **jsencrypt 3.3.2** - RSA 加密

### 其他
- **nprogress 0.2.0** - 页面进度条
- **mitt 3.0.1** - 事件总线
- **pinia-plugin-persistedstate 4.7.1** - Pinia 持久化
- **vue-i18n 11.0.1** - 国际化
- **echarts 5.6.0** - 图表库
- **@wangeditor/editor 5.1.23** - 富文本编辑器

## 项目结构

```
src/
├── api/                # API 接口
│   └── login/         # 登录相关接口
│   └── system/        # 系统管理接口
├── assets/             # 静态资源
│   └── vue.svg       # Vue Logo
├── components/         # 公共组件
│   └── Table/         # 表格组件
│   └── Form/          # 表单组件
│   └── Upload/        # 上传组件
├── config/             # 配置文件
│   └── axios/         # Axios 配置
├── composables/        # 组合式函数
│   ├── useDark.ts     # 暗黑模式
│   └── useTheme.ts     # 主题切换
├── directives/         # 自定义指令
│   ├── permission.ts   # 权限指令
│   └── loading.ts      # Loading 指令
├── enums/              # 枚举
│   └── pageEnum.ts    # 页面枚举
├── hooks/              # 自定义 Hooks
├── i18n/              # 国际化
│   ├── index.ts       # i18n 配置
│   ├── en-US.ts      # 英文
│   └── zh-CN.ts      # 中文
├── layout/             # 布局
│   ├── index.vue       # 主布局
│   ├── components/    # 布局组件
│   │   ├── Sidebar/
│   │   ├── Header/
│   │   ├── TagsView/
│   │   └── Breadcrumb/
├── locales/            # 语言包
├── plugins/            # 插件
│   └── index.ts       # 插件入口
├── router/             # 路由
│   ├── index.ts        # 路由配置
│   └── modules/       # 路由模块
├── store/              # 状态管理
│   ├── index.ts        # Store 入口
│   ├── modules/       # Store 模块
│   │   ├── user.ts
│   │   ├── permission.ts
│   │   └── app.ts
├── styles/             # 样式
│   ├── index.scss     # 样式入口
│   ├── variables.scss # 变量
│   └── theme.scss     # 主题
├── types/              # 类型定义
│   ├── index.d.ts     # 主类型
│   ├── components.d.ts # 组件类型
│   └── auto-imports.d.ts
├── utils/              # 工具函数
│   ├── auth.ts        # 认证工具
│   ├── crypto.ts      # 加密工具
│   ├── dict.ts        # 字典工具
│   ├── permission.ts   # 权限工具
│   ├── validate.ts     # 验证工具
│   └── theme.ts       # 主题工具
├── views/              # 页面
│   ├── Home/          # 首页
│   ├── Login/         # 登录页
│   ├── Error/         # 错误页
│   └── system/        # 系统管理
│       ├── user/
│       ├── role/
│       └── menu/
├── App.vue             # 根组件
├── main.ts             # 入口文件
├── permission.ts        # 路由守卫
└── env.d.ts            # 环境变量类型
```

## 核心功能

### 1. 权限系统

#### 路由权限
- 基于角色的路由过滤
- 动态路由加载
- 路由守卫控制

#### 按钮权限
- 自定义 `v-permission` 指令
- 支持多权限检查
- 权限不存在自动隐藏

```vue
<el-button v-permission="['system:user:add']">新增</el-button>
```

#### 数据权限
- 基于用户角色的数据过滤
- 支持自定义权限规则
- 后端接口配合

### 2. 请求系统

#### 统一配置
- 基础 URL 配置
- 超时时间配置
- 请求/响应拦截
- 错误统一处理

#### 请求方法
- `request()` - 通用请求
- `get()` - GET 请求
- `post()` - POST 请求
- `put()` - PUT 请求
- `del()` - DELETE 请求
- `upload()` - 文件上传
- `download()` - 文件下载

```typescript
import { get, post } from '@/config/axios'

// GET 请求
const res = await get('/api/user')

// POST 请求
const res = await post('/api/user', { name: 'admin' })
```

### 3. 组件封装

#### Table 表格组件
- 支持分页
- 支持排序
- 支持筛选
- 支持自定义列
- 支持插槽

```vue
<Table
  :data="tableData"
  :columns="columns"
  :loading="loading"
  :total="total"
  @page-change="handlePageChange"
>
  <template #status="scope">
    <el-tag :type="scope.row.status === 1 ? 'success' : 'danger'">
      {{ scope.row.status === 1 ? '启用' : '禁用' }}
    </el-tag>
  </template>
</Table>
```

### 4. 国际化

#### 支持语言
- 简体中文 (zh-CN)
- 英文 (en-US)

#### 使用方式
```typescript
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const message = t('common.hello')
```

### 5. 主题系统

#### 主题类型
- 默认主题
- 暗黑主题
- 自定义主题

#### 使用方式
```typescript
import { useTheme } from '@/utils/theme'

const { isDark, toggleDark } = useTheme()
```

## 开发规范

### 代码规范

#### 命名规范
- **文件命名**: kebab-case (如 `user-list.vue`)
- **组件命名**: PascalCase (如 `UserList`)
- **变量/函数**: camelCase (如 `userName`)
- **常量**: UPPER_SNAKE_CASE (如 `API_BASE_URL`)

#### 目录命名
- 全小写，使用连字符 (如 `user-info`)
- 复数形式 (如 `components`, `views`)

### Git 规范

#### 分支命名
- `feature/功能名` - 新功能开发
- `fix/问题名` - 问题修复
- `hotfix/问题名` - 紧急修复
- `refactor/模块名` - 代码重构

#### 提交信息
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type 类型**:
- `feat` - 新功能
- `fix` - 修复 bug
- `docs` - 文档更新
- `style` - 代码格式
- `refactor` - 重构
- `test` - 测试
- `chore` - 构建/工具

**示例**:
```
feat(user): 添加用户管理功能

- 实现用户列表
- 实现用户新增/编辑/删除
- 添加权限控制

Closes #123
```

### 注释规范

#### 文件注释
```typescript
/**
 * 文件说明
 * @author 作者
 * @date 日期
 */
```

#### 函数注释
```typescript
/**
 * 函数说明
 * @param param1 参数1说明
 * @param param2 参数2说明
 * @returns 返回值说明
 */
```

#### 复杂逻辑注释
```typescript
// 为什么这样写
const result = data.filter(/* 处理逻辑 */)

// TODO: 待优化
// FIXME: 待修复
// XXX: 需要注意
```

## 性能优化

### 1. 代码分割
- 路由懒加载
- 组件异步加载
- 第三方库按需引入

### 2. 缓存策略
- 接口数据缓存
- 组件 Keep-Alive
- LocalStorage 持久化

### 3. 渲染优化
- 列表虚拟滚动
- 防抖节流
- 懒加载

## 部署指南

### 环境配置
```bash
# 开发环境
npm run dev

# 生产环境
npm run build:prod

# 测试环境
npm run build:test

# 预发布环境
npm run build:staging
```

### 环境变量
```bash
# API 基础路径
VITE_BASE_API=/api

# 基础路径
VITE_BASE_PATH=/

# 应用标题
VITE_APP_TITLE=管理系统
```

## 常见问题

### 1. 路由 404
- 检查路由配置
- 检查路由守卫
- 检查权限配置

### 2. 接口请求失败
- 检查 Token 是否过期
- 检查网络连接
- 检查接口地址配置

### 3. 组件样式不生效
- 检查 scoped 样式
- 检查 CSS 优先级
- 检查 UnoCSS 类名

## 更新日志

### v1.0.0 (2024-01-01)
- ✨ 初始版本发布
- ✨ 完成基础架构
- ✨ 实现权限系统
- ✨ 实现路由守卫
- ✨ 实现国际化

## 贡献指南

### 开发流程
1. Fork 项目
2. 创建分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 代码审查
- 遵循代码规范
- 添加必要的测试
- 更新相关文档

## 许可证

[MIT](LICENSE)
