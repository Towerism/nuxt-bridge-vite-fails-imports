import { useNuxtApp } from '#imports'

export function useVuex() {
  const { $store } = useNuxtApp()
  return $store
}
