import { primeInputs, primeOutputs, usePrimeInputs } from '@sfxcode/formkit-primevue'
import { addPrimeAsteriskPlugin } from '@sfxcode/formkit-primevue/plugins'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { de, en, es, fr } from '@formkit/i18n'
import { defaultConfig, plugin } from '@formkit/vue'
import type { FormKitPlugin } from '@formkit/core'
import { useRuntimeConfig } from '#app/nuxt'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const app = _nuxtApp.vueApp

  const { registerInputs } = usePrimeInputs()
  registerInputs(app)

  if (runtimeConfig.public.formkitPrimevue.formkitAutoConfig) {
    const formkitPlugins: FormKitPlugin[] = []
    if (runtimeConfig.public.formkitPrimevue.formkitPluginAsterisk) {
      formkitPlugins.push(addPrimeAsteriskPlugin)
    }
    if (runtimeConfig.public.formkitPrimevue.formkitPluginAnimate) {
      formkitPlugins.push(createAutoAnimatePlugin(
        {
          /* optional AutoAnimate config */
          // default:
          duration: 250,
          easing: 'ease-in-out',
        },
        {
          /* optional animation targets object */
          // default:
          global: ['outer', 'inner'],
          form: ['form'],
          repeater: ['items'],
        },
      ))
    }
    app.use(plugin, defaultConfig({
      locales: { de, en, es, fr },
      // Define the active locale
      locale: runtimeConfig.public.formkitPrimevue.formkitLocale,
      inputs: { ...primeInputs, ...primeOutputs },
      plugins: formkitPlugins,
    }))
  }
})
