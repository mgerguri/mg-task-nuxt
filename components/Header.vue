<template>
  <nav class="flex items-center justify-between relative w-full">
    <div class="logo flex items-center flex-shrink-0 mr-12 cursor-pointer" @click="goHome">
      <h1 class="font-semibold text-6xl text-mg-dark tracking-tight">task*</h1>
    </div>
    <div class="block menu-icon">
      <button class="flex items-center text-mg-dark px-3 py-2" @click="mobile_active = true">
        <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div class="nav-menu lg:justify-between xl:justify-between lg:w-auto" :class="{ 'mobile-menu': mobile_active }">
      <div class="menu-items flex text-sm lg:flex-grow ml-5">
        <span class="close text-2xl" @click="mobile_active = false">X</span>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-4 xl:mr-6">
          Für Führerschein
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-4 xl:mr-6">
          BLS/AED Refresh
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-4 xl:mr-6">
          Nothilfe am Kind
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-4 xl:mr-6">
          Für Firmen
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 mr-4 xl:mr-6">
          Ersatzausweis
        </a>
        <a href="#" class="block mt-4 lg:inline-block lg:mt-0">
          Ratgeber
        </a>
      </div>
      <div class="login cursor-pointer" @click="goToLogin" v-if="!user">
        <a href="#"
           class="inline-block font-medium uppercase text-mg-grey text-sm px-8 py-2 leading-none border rounded border-grey-border hover:border-mg-blue hover:text-mg-blue hover:bg-white mt-4 lg:mt-0">Login</a>
      </div>
      <div @click="logout" class="cursor-pointer font-medium inline-block uppercase text-mg-grey k text-sm px-8 py-2 leading-none border rounded border-grey-border hover:border-mg-blue hover:text-mg-blue hover:bg-white mt-4 lg:mt-0" v-else>
        {{ full_name }}
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: "Header",
    data() {
      return {
        mobile_active: false
      }
    },
    computed: {
      ...mapState([
        "user"
      ]),
      full_name() {
        return this.user && `${this.user.data.first_name} ${this.user.data.last_name}`
      }
    },
    methods: {
      ...mapMutations({
        SET_USER: 'SET_USER'
      }),
      goToLogin() {
        this.mobile_active = false
        this.$router.push('login')
      },
      goHome() {
        this.$router.push('/')
      },
      logout() {
        this.mobile_active = false
        if (this.$route.name === 'home') {
          this.$router.push('/')
          this.SET_USER(null)
        } else {
          this.$router.push('home')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    .menu-icon {
      display: none;
    }

    .nav-menu {
      @apply w-full block flex-grow flex items-center;

      .menu-items {
        .close {
          cursor: pointer;
          position: absolute;
          right: 10px;
          top: 10px;
          display: none;
        }
      }
    }
  }

  @media (max-width: 1110px) {
    nav {
      .menu-icon {
        display: block;
      }

      .nav-menu {
        background-color: #fff;
        display: none;
        position: fixed;
        height: 100vh;
        overflow: auto;
        top: 0;
        left: 0;
        right: 0;

        &.mobile-menu {
          display: flex;
          flex-direction: column;
          z-index: 20;
        }

        .menu-items {
          margin: 0;
          padding: 40px 20px 0 20px;
          flex-direction: column;

          .close {
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 10px;
            display: block;
            z-index: 11;
          }

          a {
            flex: 1;
            margin: 0;
            padding: 20px 0;
          }
        }

        .login, .user {
          margin: 0 20px 20px;
        }
      }
    }
  }
</style>
