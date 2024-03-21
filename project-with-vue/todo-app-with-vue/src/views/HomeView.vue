<template>
  <Filter />
  <DeleteButton />
  <InputNewTodo />
  <TodoList />
</template>

<script>
import Filter from "@/components/Filter.vue";
import DeleteButton from "@/components/DeleteButton.vue";
import InputNewTodo from "@/components/InputNewTodo.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    Filter,
    DeleteButton,
    InputNewTodo,
    TodoList,
  },
};
</script>

<!-- <style scoped>
h1 {
  text-align: center;
}
</style> -->
