<template>
  <div class="home">
    <div>
      id: <input type="text" v-model="id">
    </div>
    <div>
      password: <input type="password" v-model="password">
    </div>
    <button @click="login">login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AuthenticationService } from '../service/AuthenticationService'

export default defineComponent({
  name: 'Login',
  components: {
  },
  data() {
    return {
      id: "",
      password: "",
    }
  },
  methods: {
    async login() {
      console.log("login")
      const service = new AuthenticationService()

      await service.login(this.id, this.password)

      this.$router.push({
        name: 'Home'
      })
    }
  },
});
</script>
