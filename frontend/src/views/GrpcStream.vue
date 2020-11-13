<template>
  <div class="home">
    <grpc-stream></grpc-stream>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AuthenticationService } from '../service/AuthenticationService'
import GrpcStream from '../components/GrpcStream.vue';

export default defineComponent({
  name: 'GrpcStreamView',
  components: {
    GrpcStream,
  },
});
</script>
