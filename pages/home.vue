<template>
  <div class="home-container font-semibold text-mg-dark text-2xl flex items-center justify-center">
    welcome
  </div>
</template>

<script>
  export default {
    name: "home",
    head () {
      return {
        title: 'Home Page of mg-task Website',
        meta: [
          { hid: 'description', name: 'description', content: 'Here you see the content of website once you have logged in' }
        ]
      }
    },
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
