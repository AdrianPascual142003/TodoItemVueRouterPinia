import { defineStore } from 'pinia'
import axios, { Axios } from 'axios';

const url = "http://localhost:3000";

export const useTodosStore = defineStore('counter', {
  state() {
    return {
      todos: []
    }
  },
  // o usando arrow functions
  // state: () => ({
  //  count: 0
  // }),

  actions: {
    async loadData() {
      try {
        var todos = await axios.get(url + "/todos")
        this.todos = todos.data
      } catch (error) {
        alert(error)
      }
    },
    async changeState(todo) {
      try {
        var response = await axios.patch(url + '/todos/' + todo.id, {
          done: !todo.done
        })
        let todoFind = this.todos.find(item => item.id === todo.id)
        todoFind = response.data
      } catch (error) {
        alert(error)
      }
    },
    async deleteItem(id) {
      try {
        var response = await axios.delete(url + '/todos/' + id)
        const todo = this.todos.findIndex(item => item.id === id)
        this.todos.splice(todo, 1)
      } catch (error) {
        alert(error)
      }
    },
    async addTodo(todo) {
      try {
        var response = await axios.post(url + '/todos', {
          title: todo.title,
          done: false
        })
        this.todos.push(response.data)
      } catch (error) {
        alert(error)
      }
    },
     deleteAll() {
      try {
        this.todos.forEach(todo => this.deleteItem(todo.id))
      } catch (error) {
        alert(error)
      }
    }
  }
})
