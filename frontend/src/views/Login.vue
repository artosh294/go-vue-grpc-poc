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
import { AuthenticationClient } from "../protobuf/authentication/AuthenticationServiceClientPb"
import { LoginRequest } from "../protobuf/authentication/authentication_pb"

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

      const hostname = "http://localhost:8001"
      const client = new AuthenticationClient(hostname)
      const request = new LoginRequest()
      request.setLoginid(this.id)
      request.setPassword(this.password)

      const response = await client.login(request, {
      })

      console.log(response)
    }
  },
});
</script>
