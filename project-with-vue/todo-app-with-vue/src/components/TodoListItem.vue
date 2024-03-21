<template>
  <label v-for="(todo, index) of todos" :key="todo.id" :for="`item-${index}`">
    <li>
      {{ ++index }}. {{ todo.description }}
      <input type="checkbox" name="checkbox" :id="`item-${--index}`" />
    </li>
  </label>
</template>

<script>
export default {
  name: "TodoListItem",

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
};
</script>
