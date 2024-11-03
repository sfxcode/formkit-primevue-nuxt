# FormKit PrimeVue Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Validation by FormKit
- 🚠 &nbsp;UI by PrimeVue

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @sfxcode/formkit-primevue-nuxt
```

That's it! You can now use FormKit PrimeVue Nuxt in your Nuxt app ✨

## Module Options

- **includePrimeIcons** (default: `true`): Add PrimeIcons CSS to the project.
- **includeStyles** (default: `true`): Add custom FormKit CSS to the project.
- **formkitAutoConfig** (default: `true`): Automatically configure FormKit.
- **formkitLocale** (default: `'en'`): Set the FormKit local (Only hen formkitAutoConfig is `true`).
- **formkitPluginAnimate** (default: `true`): Enable FormKit animate plugin (Only hen formkitAutoConfig is `true`).
- **formkitPluginAsterisk** (default: `true`): Enable FormKit asterisk plugin (Only hen formkitAutoConfig is `true`).  

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@sfxcode/formkit-primevue-nuxt/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@sfxcode/formkit-primevue-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/@sfxcode/formkit-primevue-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@sfxcode/formkit-primevue-nuxt

[license-src]: https://img.shields.io/npm/l/@sfxcode/formkit-primevue-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@sfxcode/formkit-primevue-nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
