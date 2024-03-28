<template>
  <button @click="deleteTodo">Delete done Todos</button>
</template>

<script>
export default {
  name: "DeleteButton",

  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    deleteTodo() {
      const doneTodo = this.items
        .filter((item) => item.done)
        .map((item) => item.id);

      this.$emit("deleteDoneTodo", doneTodo);
    },
  },
};
</script>
