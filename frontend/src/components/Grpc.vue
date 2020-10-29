<template>
    <input v-model="msg">
    <button @click="echo">echo</button>
    <br>
    EchoResponse.message: {{ response }}
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { EchoService } from '../service/EchoService'
import { InvalidTokenError, InvalidAccessTokenError, InvalidRefreshTokenError } from '../service/errors/AuthenticationServiceError'

export default defineComponent({
    data() {
        return {
            msg: "123",
            response: "",
        }
    },
    methods: {
        async echo() {
            const echoService = new EchoService()
            const respone = await echoService.echo(this.msg)
            this.response = respone.message + new Date()
        },
    
        onError(this: Window, evt: PromiseRejectionEvent): any {
            console.log('onError')
            // アクセストークンエラーの場合は、ログインに遷移する
            if (evt.reason instanceof InvalidTokenError) {
                // @ts-ignore
                this.$router.push({name: "Login"})
            }
        }
  },
  mounted() {
    console.log('grpc mounted')
    window.addEventListener('unhandledrejection', this.onError)
  },
  unmounted() {
    console.log('grpc unmounted')
    window.removeEventListener('unhandledrejection', this.onError)
  }
})
</script>