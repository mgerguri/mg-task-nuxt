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
    name: 'Index',
    head () {
      return {
        title: 'Index Page of mg-task Website',
        meta: [
          { hid: 'description', name: 'description', content: 'Here you see the content of website the first time you visit' }
        ]
      }
    },
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
