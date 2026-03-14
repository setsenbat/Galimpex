import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/i18n', '@nuxt/icon'],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'mn', language: 'mn-MN', name: 'Монгол', file: 'mn.json' },
      { code: 'cn', language: 'zh-CN', name: '中文', file: 'cn.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
    ],
    defaultLocale: 'mn',
    langDir: '../i18n/locales/',
    strategy: 'prefix_except_default',
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit', '@lottiefiles/dotlottie-vue']
    }
  }
})
