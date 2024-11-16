import { defineFormKitConfig } from '@formkit/vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
import '@formkit/addons/css/multistep.css'
import { primeInputs, primeOutputs } from '@sfxcode/formkit-primevue'
import { addPrimeAsteriskPlugin } from '@sfxcode/formkit-primevue/plugins'
import { de, en, es, fr, tr } from '@formkit/i18n'

export default defineFormKitConfig(() => {
  return {
    locales: { de, en, es, fr, tr },
    // Define the active locale
    locale: en,
    inputs: { ...primeInputs, ...primeOutputs },
    plugins: [addPrimeAsteriskPlugin,
      createAutoAnimatePlugin(
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
      ),
    ],
  }
})
