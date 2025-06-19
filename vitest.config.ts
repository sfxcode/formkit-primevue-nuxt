import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    hookTimeout: 360000, // 6 minutes
  },
})
