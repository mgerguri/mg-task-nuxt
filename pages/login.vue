<template>
  <div class="my-16 mx-auto">
    <div v-if="user_error" class="max-w-sm rounded m-auto flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3 mb-4" role="alert">
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
      <p>{{ user_error }}</p>
    </div>

    <div class="max-w-sm rounded m-auto overflow-hidden shadow-lg">
      <div class="title w-full font-bold text-2xl bg-mg-blue text-mg-dark py-8 px-10">Login</div>
      <form class="px-12 py-16">
        <div class="mb-6">
          <input v-model="payload.username"
            class="custom-input appearance-none border-none border-mg-dark text-gray-900 w-full py-2 px-3 leading-tight focus:outline-none"
            id="username" type="text" placeholder="EMAIL">
        </div>
        <div class="mb-2">
          <input v-model="payload.password"
            class="custom-input appearance-none w-full border-none border-mg-dark text-gray-900 py-2 px-3 mb-3 leading-tight focus:outline-none"
            id="password" type="password" placeholder="PASSWORD">
        </div>
        <p v-if="login_error" class="text-red-500 text-xs mb-4">{{ login_error }}</p>
        <div class="mt-6">
          <button @click="login" type="button" class="button bg-mg-dark w-full py-3 rounded text-white font-semibold">LOGIN</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "login.vue",
    loading: {
      color: '#0a444b',
      height: '15px'
    },
    data() {
      return {
        payload: {
          username: null,
          password: null
        },
        login_error: null,
        user_error: null
      }
    },
    methods: {
      ...mapActions({
        userLogin: "userLogin",
        getUserData: "getUserData"
      }),
      login() {
        this.$nuxt.$loading.start()

        this.userLogin(this.payload).then(res => {
          this.getUserData().then(() => {
            this.user_error = null
            this.$router.push('home')
          }).catch(error => {
            this.user_error = 'User not found'
          })
          this.login_error = null
        }).catch(error => {
          this.login_error = error.response.data.error
        }).finally(() => {
          this.$nuxt.$loading.finish()
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .custom-input {
    border-bottom: 2px solid;
  }
</style>
