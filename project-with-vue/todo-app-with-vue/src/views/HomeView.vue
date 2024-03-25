<template>
  <TodoFilter />
  <DeleteButton />
  <InputNewTodo @addTodo="addNewTodo" />
  <TodoList :items="todos" />
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
  },
};
</script>

<!-- <style scoped>
h1 {
  text-align: center;
}
</style> -->
