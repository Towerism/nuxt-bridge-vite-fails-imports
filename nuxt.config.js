import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  bridge: {
    nitro: false,
    vite: true
  },
  ssr: false,
  app: {
    baseURL: ''
  }
})
