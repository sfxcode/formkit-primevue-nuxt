import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-03',
  formkitPrimevue: {
    includePrimeIcons: true,
    includeStyles: true,
    formkitAutoConfig: true,
    formkitLocale: 'en',
    formkitPluginAnimate: true,
    formkitPluginAsterisk: true,
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'de', file: 'de.json', name: 'German' },
    ],
    vueI18n: './vue-i18n.options.ts',
  },
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
        },
      },
      ripple: true,
    },
  },
})
