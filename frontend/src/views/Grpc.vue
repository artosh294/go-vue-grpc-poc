<template>
  <div class="home">
    <grpc></grpc>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AuthenticationService } from '../service/AuthenticationService'
import Grpc from '../components/Grpc.vue';

export default defineComponent({
  name: 'Login',
  components: {
    Grpc,
  },
});
</script>
