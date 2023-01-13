<script>
    import { mapActions } from 'pinia';
    import { useTodosStore } from '../stores/todos';

    export default {
        data() {
            return {
                todo: {}
            }
        },
        methods: {
            ...mapActions(useTodosStore, {
                addTodo: 'addTodo'
            }),
            submitForm() {
                this.addTodo(this.todo)
                this.todo = {}
                this.$router.push('/')
            }
        }
    }

</script>

<template>
    <div class="col-sm-6 col-md-4 col-lg-4 container">
        <form id="new-prod" @submit.prevent="submitForm(todo)">
            <header>
                <h1>Añadir Tarea</h1>
            </header>
            <fieldset>
                <legend class="bg-dark text-white text-center" id="tablaProd">Añadir Tarea</legend>
                <div class="form-group">
                    <label for="newprod-name">Titulo:</label>
                    <input type="text" id="newprod-name" class="form-control" v-model="todo.title">
                </div>
                <br>
                <button type="submit" class="btn btn-default btn-dark m-1">Añadir</button>
            </fieldset>
        </form>
    </div>
</template>