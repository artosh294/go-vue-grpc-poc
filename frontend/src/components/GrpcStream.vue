<template>
    <div>
        <div>
            <input v-model="room">
            <button @click="connectRoom">connect</button>
        </div>
        <div>
            <input v-model="msg">
            <button @click="sendMessage">send</button>
        </div>

        <hr>

        <ul>
            <li v-for="(message, key) in messages" :key="key">
                {{ message }}
            </li>
        </ul>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { ChatService, SpectatorStream, SpectatorStreamOnDataResponse } from '../service/ChatService'
import { InvalidTokenError, InvalidAccessTokenError, InvalidRefreshTokenError } from '../service/errors/AuthenticationServiceError'

export default defineComponent({
    data() {
        return {
            room: "1",
            msg: "123",
            stream: null as SpectatorStream | null,
            messages: [] as string[],
        }
    },
    methods: {
        onData(response: SpectatorStreamOnDataResponse) {
            console.log(response)
            this.messages.push(response.message)
        },
        async connectRoom() {
            if (this.stream) {
                // closeするとstream自体が閉じてイベントハンドラ登録が呼ばれなくなるので、あえてremoveListenerはしない
                this.stream.close()
                this.messages = []
            }

            const chatService = new ChatService()
            const stream = await chatService.spectator({
                room: this.room,
            })

            this.stream = stream
            stream.on("data", this.onData)
            stream.on("status", (status) => {
                console.log("status", status)
            })
            stream.on("end", () => {
                console.log("end")
            })
            stream.on("error", (err) => {
                console.log("error", err)
            })
            console.log("stream", stream)
        },
        async sendMessage() {
            if (this.stream == null) {
                console.log("please connect room")
                return
            }
            const chatService = new ChatService()
            await chatService.speak({
                room: this.room,
                message: this.msg,
            })
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

    if (this.stream) {
        console.log("grpc data removeListener")
        // this.stream.removeListener("data", this.onData)
        this.stream.close()
    }
  }
})
</script>