import { createRouter, createWebHistory } from 'vue-router'
import Todos from '../views/TodoTable.vue'
import TodoForm from '../views/TodoForm.vue'
import DeleteAll from '../views/DeleteAll.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todos',
      component: Todos
    },
    {
      path: '/addTodo',
      name: 'add-todos',
      component: TodoForm
    },
    {
      path: '/deleteAll',
      name: 'delete-all',
      component: DeleteAll
    }
  ]
})

export default router
