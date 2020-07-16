<template>
  <div class="home-container font-semibold text-mg-dark text-2xl flex items-center justify-center">
    welcome
  </div>
</template>

<script>
  export default {
    name: "home",
    validate({ store }) {
      return store.state.user
    }
  }
</script>

<style lang="scss" scoped>
  .home-container {
    height: calc(100vh - 73px);
    overflow: auto;
  }
</style>
