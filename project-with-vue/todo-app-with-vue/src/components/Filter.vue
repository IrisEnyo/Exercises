<template>
  <section class="filter">
    <label for="all"
      >All
      <input type="radio" name="filter" :id="all" :checked="!checked" />
    </label>

    <label for="open"
      >Open
      <input type="radio" name="filter" :id="open" />
    </label>

    <label for="done"
      >Done
      <input type="radio" name="filter" :id="done" />
    </label>
  </section>
</template>

<script>
export default {
  checked: false,
  name: "TodoHeader",
  id: "all",

  // computed: {
  //   filterTodos() {
  //     if (this.id === all) {
  //       return
  //     }
  //   },
  // },
};
</script>

<!-- <style scoped>
.filter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style> -->
