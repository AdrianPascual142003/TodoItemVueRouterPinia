<script>
    import { mapActions } from 'pinia';
    import { useTodosStore }  from '../stores/todos.js'

    export default {
        props: {
            todo: Object
        },
        methods: {
          ...mapActions(useTodosStore, ['changeState','deleteItem'])
        }
    }

</script>

<template>
    <tr>
    <th scope="row">{{todo.id}}</th>
    
    <td>
        <del v-if="todo.done">{{todo.title}}</del>
        <span v-else="todo.done">{{ todo.title }}</span>
    </td>
    <td>
        <input type="checkbox" v-model="todo.done" v-on:click="changeState(todo)">
    </td>
    <td>
        <input type="button" class="btn btn-danger" value="Borrar" @click="deleteItem(todo.id)">
    </td>
    </tr>
</template>