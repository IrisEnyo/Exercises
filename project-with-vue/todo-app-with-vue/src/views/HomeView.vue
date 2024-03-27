<template>
  <TodoFilter />
  <DeleteButton :items="todos" @deleteDoneTodo="deleteTodo" />
  <InputNewTodo @addTodo="addNewTodo" />
  <TodoList :items="todos" @updateDoneTodo="updateTodo" />
</template>

<script>
import TodoFilter from "@/components/TodoFilter.vue";
import DeleteButton from "@/components/DeleteButton.vue";
import InputNewTodo from "@/components/InputNewTodo.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    TodoFilter,
    DeleteButton,
    InputNewTodo,
    TodoList,
  },

  data() {
    return {
      todos: [
        {
          description: "HTML",
          id: 1,
          done: true,
        },

        {
          description: "CSS",
          id: 2,
          done: false,
        },
      ],
    };
  },

  async created() {
    const response = await fetch("http://localhost:4730/todos");
    const apiTodos = await response.json();

    this.todos = apiTodos;
  },

  methods: {
    async addNewTodo(newTodo) {
      const response = await fetch("http://localhost:4730/todos/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      const newApiTodo = await response.json();
      this.todos.push(newApiTodo);
      console.log(this.todos);
    },

    async updateTodo(clickedTodo) {
      const updatedTodo = {
        description: clickedTodo.description,
        done: (clickedTodo.done = !clickedTodo.done),
        id: clickedTodo.id,
      };

      const response = await fetch(
        "http://localhost:4730/todos/" + updatedTodo.id,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedTodo),
        }
      );
      const newUpdatedTodo = await response.json();
      console.log(newUpdatedTodo);

      return newUpdatedTodo;
    },

    async deleteTodo(doneTodo) {
      if (doneTodo === 0) {
        return;
      }

      await Promise.all(
        doneTodo.map(async (id) => {
          await fetch(`http://localhost:4730/todos/${id}`, {
            method: "DELETE",
          });
        })
      );
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
};
</script>

<!-- <style scoped>
h1 {
  text-align: center;
}
</style> -->
