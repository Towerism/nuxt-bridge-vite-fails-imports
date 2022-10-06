import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  bridge: {
    nitro: false,
    vite: false
  },
  ssr: false,
  app: {
    baseURL: ''
  }
})
