<script>
import { mapActions } from 'pinia';
import { useTodosStore } from '../stores/todos';

export default {

    methods: {
        ...mapActions(useTodosStore, ['deleteAll']),
        submitDeleteAll() {
            if (confirm("¿Quieres borrar todos los elementos?")) {
                this.deleteAll()
            }
            this.$router.push('/')
        }
    }

}

</script>

<template>
    <h1>Borrar todas las tareas</h1>
    <button v-on:click="submitDeleteAll" class="btn btn-danger">Borrar Todos</button>
</template>