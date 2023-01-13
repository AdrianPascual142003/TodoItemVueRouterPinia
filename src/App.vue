<script>
import { RouterLink, RouterView } from 'vue-router'
import AppMenu from './components/AppMenu.vue';
import TodoTable from './views/TodoTable.vue';
import { useTodosStore } from './stores/todos';
import { mapActions } from 'pinia';
import TodoForm from './views/TodoForm.vue';
import DeleteAll from './views/DeleteAll.vue';


  export default {
    components: {
    AppMenu,
    TodoTable,
    TodoForm,
    DeleteAll
},
    methods: {
      ...mapActions(useTodosStore, {
        loadData: 'loadData'
      })
    },
    mounted() {
      this.loadData()
    }
  }

</script>

<template>
  <div class="container">
    <h1>Listado de Todos</h1>
    <AppMenu></AppMenu>
    <RouterView />
  </div>
</template>