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
      id: "hkyt",
      password: "hkyt",
    }
  },
  methods: {
    async login() {
      console.log("login")
      
      // IDとパスワードを使ってログイン処理をする
      const service = new AuthenticationService()
      await service.login(this.id, this.password)

      // ログインできたようだったら、GRPCに移行する
      this.$router.push({
        name: 'Grpc'
      })
    },
  }
});
</script>
