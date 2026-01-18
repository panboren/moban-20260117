/**
 * 路由守卫
 * 参考 yudao-ui-admin-vue3 实现
 */

import router from '@/router'
import type { RouteRecordRaw } from 'vue-router'
import { getAccessToken } from '@/utils/auth'
import { useUserStoreWithOut } from '@/store/modules/user'
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { PageEnum } from '@/enums/pageEnum'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  showSpinner: false,
  easing: 'ease',
  speed: 500,
  trickleSpeed: 200,
  minimum: 0.3
})

const whiteList = ['/login', '/404', '/403', '/redirect']

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  const token = getAccessToken()

  if (token) {
    // 有 token，且要访问登录页，跳转到首页
    if (to.path === PageEnum.LOGIN) {
      next({ path: PageEnum.INDEX, replace: true })
      NProgress.done()
      return
    }

    const userStore = useUserStoreWithOut()
    const permissionStore = usePermissionStoreWithOut()

    // 如果用户信息未设置，获取用户信息和路由
    if (!userStore.getIsSetUser) {
      try {
        console.log('开始获取用户信息...')
        await userStore.getUserInfoAction()
        console.log('用户信息获取成功')

        console.log('开始生成路由...')
        await permissionStore.generateRoutes()
        console.log('路由生成成功')

        permissionStore.getAddRouters.forEach((route) => {
          router.addRoute(route as unknown as RouteRecordRaw)
        })
        console.log('动态路由已添加')

        // 添加路由后，重新访问当前路由
        next({ ...to, replace: true })
      } catch (error: any) {
        console.error('路由守卫错误:', error)
        ElMessage.error(error.message || '获取用户信息失败')
        await userStore.resetState()
        next({ path: PageEnum.LOGIN, replace: true })
        NProgress.done()
      }
      return
    }

    // 检查权限
    const permissions = userStore.getPermissions
    if (to.meta?.permissions && !to.meta?.permissions?.some((perm: string) => permissions.has(perm))) {
      ElMessage.error('无权限访问该页面')
      next({ path: '/403', replace: true })
      NProgress.done()
      return
    }

    next()
  } else {
    // 无 token，访问白名单页面，直接放行
    if (whiteList.includes(to.path)) {
      next()
    } else {
      // 否则跳转到登录页
      next(`${PageEnum.LOGIN}?redirect=${encodeURIComponent(to.fullPath)}`)
      NProgress.done()
    }
  }
})

router.afterEach((to) => {
  NProgress.done()

  if (to.meta?.title) {
    document.title = `${to.meta.title} - ${import.meta.env.VITE_APP_TITLE}`
  }

  window.scrollTo(0, 0)
})

router.onError((error) => {
  console.error('路由错误:', error)
  NProgress.done()
  ElMessage.error('页面加载失败，请刷新重试')
})

export default router

