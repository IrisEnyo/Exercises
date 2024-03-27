<template>
  <li>
    <label>
      <input type="checkbox" name="todo" :value="todo.id" @click="updateTodo" />
      {{ todo.description }}
    </label>
  </li>
</template>

<script>
export default {
  name: "TodoListItem",
  emits: ["updateDoneTodo"],

  data() {
    return {
      value: "",
    };
  },

  props: {
    todo: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    updateTodo() {
      const clickedTodo = this.todo;
      this.$emit("updateDoneTodo", clickedTodo);
    },
  },
};
</script>
