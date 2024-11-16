import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  installModule,
  addImports, addComponent,
} from '@nuxt/kit'
import defu from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  includePrimeIcons: boolean
  includeStyles: boolean
  formkitAutoConfig: boolean
  formkitLocale: 'en' | 'de' | 'fr' | 'es' | 'tr'
  formkitPluginAsterisk: boolean
  formkitPluginAnimate: boolean
  installI18N: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'formkit-primevue-nuxt',
    configKey: 'formkitPrimevue',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    includePrimeIcons: true,
    includeStyles: true,
    formkitAutoConfig: true,
    formkitLocale: 'en',
    formkitPluginAnimate: true,
    formkitPluginAsterisk: true,
    installI18N: true,
  },
  async setup(_options, _nuxt) {
    _nuxt.options.runtimeConfig.public.formkitPrimevue = defu(_nuxt.options.runtimeConfig.public.formkitPrimevue,
      {
        formkitAutoConfig: _options.formkitAutoConfig,
        formkitLocale: _options.formkitLocale,
        formkitPluginAnimate: _options.formkitPluginAnimate,
        formkitPluginAsterisk: _options.formkitPluginAsterisk,
      },
    )

    const resolver = createResolver(import.meta.url)
    await installModule('@primevue/nuxt-module')

    if (_options.installI18N)
      await installModule('@nuxtjs/i18n')

    const css: string[] = _nuxt.options.css ?? []
    if (_options.includePrimeIcons) {
      css.push('primeicons/primeicons.css')
    }
    if (_options.includeStyles) {
      css.push('@sfxcode/formkit-primevue/dist/style.css')
    }
    _nuxt.options.css = css

    const NPM_PCK_FORMKIT_PRIMEVUE = '@sfxcode/formkit-primevue'

    const composableNames = ['useFormKitSchema', 'useFormKitRepeater', 'useInputEditor', 'useInputEditorSchema']
    composableNames.forEach(name =>
      addImports({ name, as: name, from: NPM_PCK_FORMKIT_PRIMEVUE }),
    )

    const componentNames = ['FormKitDataEdit', 'FormKitDataView', 'FormKitDataDebug']
    componentNames.forEach(name =>
      addComponent({
        name,
        export: name,
        filePath: NPM_PCK_FORMKIT_PRIMEVUE,
        chunkName: NPM_PCK_FORMKIT_PRIMEVUE,
      }),
    )

    const NPM_PCK_FORMKIT = '@formkit/vue'

    const formKitComponentNames = ['FormKit', 'FormKitProvider', 'FormKitMessages', 'FormKitSummary', 'FormKitSchema']
    formKitComponentNames.forEach(name =>
      addComponent({
        name,
        export: name,
        filePath: NPM_PCK_FORMKIT,
        chunkName: NPM_PCK_FORMKIT,
      }),
    )

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
