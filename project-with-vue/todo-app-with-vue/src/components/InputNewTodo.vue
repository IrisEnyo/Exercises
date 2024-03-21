<template>
  <form>
    <p>Add your Todo:</p>
    <input type="text" v-model="newTodoText" />
    <p>{{ newTodoText }}</p>
    <button @click.prevent="addNewTodo()" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: "InputNewTodo",

  data() {
    return {
      newTodoText: "",
    };
  },

  methods: {
    addNewTodo() {
      this.newTodoText = this.newTodoText.trim().toLowerCase();

      alert("clicked!");
    },
  },
};
</script>
