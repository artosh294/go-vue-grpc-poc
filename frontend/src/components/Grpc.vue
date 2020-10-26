<template>
    <input v-model="msg">
    <button @click="echo">echo</button>
    <br>
    EchoResponse.message: {{ response }}
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { EchoClient } from '../protobuf/echo/EchoServiceClientPb'
import { EchoRequest } from '../protobuf/echo/echo_pb'

export default defineComponent({
    data() {
        return {
            msg: "123",
            response: "",
        }
    },
    methods: {
        async echo() {
            console.log("echo")

            const hostname = "http://localhost:8001"
            const client = new EchoClient(hostname)

            const request = new EchoRequest()
            request.setName(this.msg + (new Date).toString())
            const response = await client.echo(request, {
                Authorization: "bearer hogehoge fugafuga",
            })
            this.response = response.getMessage()

        }
    }
})
</script>