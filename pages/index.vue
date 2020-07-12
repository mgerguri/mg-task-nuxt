<template>
  <div class="container m-0 max-w-none">
    <Banner v-if="route_name === 'index'"/>
    <nuxt-child v-else />
  </div>
</template>

<script>
  import Banner from "~/components/Banner";
  import { mapState } from 'vuex'

  export default {
    scrollToTop: true,
    components: {Banner},
    computed: {
      ...mapState([
        "user"
      ]),
      route_name() {
        return this.$route.name
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
