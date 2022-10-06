<template>
  <div>
    <Tutorial>
      <div>
        Hi there: {{ counter }}
      </div>
      <div>
        <button @click="increment">Inc</button>
      </div>
    </Tutorial>
  </div>
</template>

<script setup>
import { useVuex } from 'nuxt-use-vuex'

const store = useVuex()

const counter = computed(() => store.state.counter)

function increment() {
  store.commit('increment')
}
</script>
