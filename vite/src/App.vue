<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <grpc></grpc>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Grpc from './components/Grpc.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Grpc
  }
})
</script>
