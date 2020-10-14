<template>
{{ cnt }}
<input v-model="message">
<button @click="echo">Echo</button>
<button @click="echo">Echoa</button>
</template>


<script lang="ts">
import {defineComponent} from 'vue'
import { EchoClient } from './../protobuf/echo/EchoServiceClientPb'
import { EchoRequest } from './../protobuf/echo/echo_pb'
// import a from './../protobuf/echo/echo_pb'
// import './../protobuf/echo/echo_pb'

// const b = require('./../protobuf/echo/echo_pb')


const { EchoRequest } = a

// console.log(EchoClient)
// console.log(a)
// console.log(a.EchoRequest)
// console.log(EchoRequest)

export default defineComponent({
    name: "grpc",
    data() {
        return {
            cnt: 0,
            message: "",
        }
    },
    methods: {
        async echo() {
            console.log('echo')
            this.cnt++

            // const host = "http://localhost:50051"
            const host = "http://localhost:8001"
            const client = new EchoClient(host)
            const req = new EchoRequest()
            console.log(req)
            req.setName(this.message)
            const response = await client.echo(req, {})
            console.log(response)
            console.log(response.getMessage())
        }
    }
})
</script>