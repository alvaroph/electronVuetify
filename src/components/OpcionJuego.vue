<template>
        <v-btn block rounded="xl" size="x-large" @click="emitirEvento(id)">Opción {{ id +1 }}</v-btn>    
        <h1>
            <slot></slot>
        </h1>
</template>

<script>
import {  socket } from "@/socket";
 
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        contador: {
            type: Number,
            required: false
        }
    },
    methods: {
        emitirEvento() {
          //  this.$emit('opcionSeleccionada', this.id);
          socket.emit('votacion', this.id);
          console.log("emitido evento");
        }
    }
}
</script>

<style lang="scss" scoped>

</style>