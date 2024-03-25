<template>
  <li>
    <label>
      <input type="checkbox" name="todo" :value="todo.id" />
      {{ todo.description }}
    </label>
  </li>
</template>

<script>
export default {
  name: "TodoListItem",

  props: {
    todo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
