import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    hookTimeout: 720000, // 12 minutes
  },
})
