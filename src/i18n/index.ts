import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN'
import enUS from './en-US'

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS
}

const savedLocale = localStorage.getItem('locale')
const i18n = createI18n({
  legacy: false,
  locale: (savedLocale === 'zh-CN' || savedLocale === 'en-US' ? savedLocale : 'zh-CN') as 'zh-CN' | 'en-US',
  fallbackLocale: 'zh-CN',
  messages
})

export default i18n

export function setI18nLanguage(locale: 'zh-CN' | 'en-US') {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.querySelector('html')?.setAttribute('lang', locale)
}

