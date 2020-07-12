<template>
  <div class="banner flex w-full relative ph:flex-wrap md:flex-wrap sm:flex-wrap">
    <div class="w-1/2 banner-text text-mg-dark flex flex-col justify-center bg-mg-blue">
      <h1 class="font-semibold m-0 text-6xl tracking-tight">Nothelferkurse in deiner Region</h1>
      <p class="my-1 font-medium">Ein motiviertes Team mit dem Ziel, das Wissen über die Erste Hilfe interessant und einfach zu
        vermitteln. Wir sind ein privater, vom ASTRA anerkannter und SGS zertifizierter Anbieter für Nothelferkurse in
        der Schweiz.</p>

      <Dropdown :active="active_dropdown_item" :options="dropdown_options" />
    </div>
    <div class="w-1/2 banner-img ph:h-64 sm:h-64 md:h-64 ph:w-full sm:w-full md:w-full"></div>

    <div class="desktop">
      <LeftPartX/>
      <RightPartX/>
    </div>
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

    .banner-text {
      padding: 100px 0;

      h1 {
        padding: 0 50px;
        z-index: 2;
      }

      p {
        z-index: 2;
        max-width: 80%;
        margin-top: 15px;
        padding: 0 50px;
      }
    }

    .banner-img {
      background: url("../assets/images/friends_image.jpg") no-repeat center;
      background-size: cover;
    }
  }

  @media (max-width: 768px) {
    .banner {

      .banner-text {
        width: 100%;
        padding: 50px 0;

        h1 {
          padding: 0 20px;
          font-size: 1.8rem;
        }

        p {
          max-width: 100%;
          padding: 0 20px;
        }
      }
    }
  }
</style>
