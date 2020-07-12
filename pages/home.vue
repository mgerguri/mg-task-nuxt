<template>
  <div class="home-container font-semibold text-mg-dark text-2xl flex items-center justify-center">
    welcome
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "home",
    beforeMount() {
      if (!this.user) {
        this.$router.push('/')
      }
    },
    computed: {
      ...mapState({
        user: state => state.user
      })
    }
  }
</script>

<style lang="scss" scoped>
  .home-container {
    height: calc(100vh - 73px);
    overflow: auto;
  }
</style>
