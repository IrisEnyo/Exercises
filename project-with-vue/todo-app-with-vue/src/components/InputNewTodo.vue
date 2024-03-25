<template>
  <form>
    <p>Add your Todo:</p>
    <input type="text" v-model="newTodoText" />
    <p>{{ newTodoText }}</p>
    <button @click.prevent="addNewTodo" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: "InputNewTodo",
  emits: ["addTodo"],

  data() {
    return {
      newTodoText: "",
    };
  },

  methods: {
    addNewTodo() {
      // this.newTodoText = this.newTodoText.trim().toLowerCase();

      const newTodo = {
        description: this.newTodoText.trim(),
        done: false,
      };
      this.$emit("addTodo", newTodo);

      this.newTodoText = "";
    },
  },
};
</script>
