<template>
  <section class="filter">
    <label for="all">
      <input
        type="radio"
        name="filter"
        id="all"
        value="all"
        checked
        v-model="filter"
        @change="filterTodos"
      />All
    </label>

    <label for="open">
      <input
        type="radio"
        name="filter"
        id="open"
        value="open"
        v-model="filter"
        @change="filterTodos"
      />Open
    </label>

    <label for="done">
      <input
        type="radio"
        name="filter"
        id="done"
        value="done"
        v-model="filter"
        @change="filterTodos"
      />Done
    </label>
  </section>
</template>

<script>
export default {
  name: "TodoFilter",

  data() {
    return {
      filter: "all",
    };
  },

  methods: {
    filterTodos() {
      console.log(this.filter);

      // if (this.filter === "all") {
      //   return this.items;
      // } else if (this.filter === "open") {
      //   return this.items.filter((item) => !item.done);
      // } else if (this.filter === "done") {
      //   return this.items.filter((item) => item.done);
      // }
      // return console.log(this.items);
    },
  },
};
</script>

<!-- <style scoped>
.filter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style> -->
