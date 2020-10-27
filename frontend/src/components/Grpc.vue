<template>
    <input v-model="msg">
    <button @click="echo">echo</button>
    <br>
    EchoResponse.message: {{ response }}
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { EchoService } from '../service/EchoService'

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
            this.response = respone.message
        }
    }
})
</script>