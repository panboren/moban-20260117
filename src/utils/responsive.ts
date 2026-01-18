/**
 * 响应式工具函数
 */

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

/**
 * 获取当前断点
 */
export const getCurrentBreakpoint = (): Breakpoint => {
  const width = window.innerWidth

  if (width < breakpoints.sm) return 'xs'
  if (width < breakpoints.md) return 'sm'
  if (width < breakpoints.lg) return 'md'
  if (width < breakpoints.xl) return 'lg'
  return 'xl'
}

/**
 * 判断是否为移动端
 */
export const isMobile = (): boolean => {
  return window.innerWidth < breakpoints.lg
}

/**
 * 判断是否为平板
 */
export const isTablet = (): boolean => {
  const width = window.innerWidth
  return width >= breakpoints.sm && width < breakpoints.lg
}

/**
 * 判断是否为桌面端
 */
export const isDesktop = (): boolean => {
  return window.innerWidth >= breakpoints.lg
}
