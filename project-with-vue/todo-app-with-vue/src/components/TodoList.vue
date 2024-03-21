<template>
  <ul>
    <TodoListItem />
  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem.vue";

export default {
  name: "TodoList",

  components: {
    TodoListItem,
  },
};
</script>
