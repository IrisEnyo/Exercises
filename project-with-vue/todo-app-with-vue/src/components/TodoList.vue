<template>
  <ol>
    <TodoListItem v-for="todo of items" :key="todo.id" :todo="todo" />
  </ol>
</template>

<script>
import TodoListItem from "@/components/TodoListItem.vue";

export default {
  name: "TodoList",

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
};
</script>
