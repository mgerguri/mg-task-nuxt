<template>
  <div class="banner flex w-full relative ph:flex-col sm:flex-col md:flex-col">
    <div class="flex-1 banner-text flex flex-col justify-center bg-mg-blue">
      <div class="z-10 text-content text-mg-dark ph:ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10">
        <h1 class="font-semibold m-0 text-6xl ph:text-4xl sm:text-4xl md:text-4xl">Nothelferkurse in deiner Region</h1>
        <p class="font-medium mt-6">Ein motiviertes Team mit dem Ziel, das Wissen über die Erste Hilfe interessant und einfach zu
          vermitteln. Wir sind ein privater, vom ASTRA anerkannter und SGS zertifizierter Anbieter für Nothelferkurse in
          der Schweiz.</p>

        <Dropdown :active="active_dropdown_item" :options="dropdown_options" />
      </div>
    </div>
    <div class="flex-1 banner-img"></div>

    <LeftPartX/>
    <RightPartX/>
  </div>
</template>

<script>
  import LeftPartX from "~/components/LeftPartX";
  import RightPartX from "~/components/RightPartX";
  import Dropdown from "~/components/Dropdown";

  export default {
    name: "Banner",
    components: {Dropdown, RightPartX, LeftPartX},
    created() {
      this.$nuxt.$on('changeOption', option => {
        this.active_dropdown_item = option
      })
    },
    data() {
      return {
        dropdown_options: [
          {
            id: 1,
            name: 'Sellen',
            label: 'sellen',
          },
          {
            id: 2,
            name: 'Attendorn',
            label: '0,8 km entfernt',
          },
          {
            id: 3,
            name: 'Zürich',
            label: '1 km entfernt',
          },
          {
            id: 4,
            name: 'Oerlikon',
            label: '1 km entfernt',
          }
        ],
        active_dropdown_item: {
          id: 1,
          name: 'Sellen',
          label: 'sellen',
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    margin: 30px 0;
    height: 600px;

    .banner-text {

      .text-content {

        h1 {
          letter-spacing: 1px;
          max-width: 90%;
        }

        p {
          max-width: 75%;
          letter-spacing: 1px;
        }
      }
    }

    .banner-img {
      background: url("../assets/images/friends_image.jpg") no-repeat center;
      background-size: cover;
    }
  }
</style>
