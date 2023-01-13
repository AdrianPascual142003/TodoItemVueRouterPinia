<script>
    import { mapState } from 'pinia';
    import TodoItem from '../components/TodoItem.vue';
    import { useTodosStore } from '../stores/todos';

export default {
    computed: {
        ...mapState(useTodosStore, {
            todos: "todos"
        })
    },
    components: { TodoItem }
}

</script>

<template>
    <br>
    <table v-if="todos.length" class="table text-center">
        <thead class="thead-dark bg-dark">
            <tr class="text-light">
                <th scope="col">Id</th>
                <th scope="col">Titulo</th>
                <th scope="col">Done</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"></TodoItem>
        </tbody>
    </table>
    <h4>Total Items: {{ todos.length }}</h4>
</template>