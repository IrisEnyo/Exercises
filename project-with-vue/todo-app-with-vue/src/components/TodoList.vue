<template>
  <ol>
    <TodoListItem
      v-for="todo in items"
      :key="todo.id"
      :todo="todo"
      @updateDoneTodo="updateTodo"
    />
  </ol>
</template>

<script>
import TodoListItem from "@/components/TodoListItem.vue";

export default {
  name: "TodoList",
  emits: ["updateDoneTodo"],

  components: {
    TodoListItem,
  },

  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    updateTodo(clickedTodo) {
      this.$emit("updateDoneTodo", clickedTodo);
    },
  },
};
</script>
