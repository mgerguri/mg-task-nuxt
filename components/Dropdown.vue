<template>
  <div class="dropdown-container font-medium"
       @mouseleave="show_dropdown = false">
    <div class="active-item text-mg-dark" @click="show_dropdown = !show_dropdown">{{ active.name }}</div>
    <div class="dropdown-menu shadow" v-if="show_dropdown">
      <div class="p-3 cursor-pointer opacity-75 hover:opacity-100" v-if="option.id !== active.id" v-for="option in options" @click="change(option)">
        <span class="text-mg-dark">{{ option.name }}</span>
        <span class="text-xs text-mg-gray">({{ option.label }})</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Dropdown",
    props: ['options', 'active'],
    data() {
      return {
        show_dropdown: false
      }
    },
    methods: {
      change(option) {
        $nuxt.$emit('changeOption', option)
        this.show_dropdown = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dropdown-container {
    position: relative;
    margin: 20px auto 0 auto;
    width: 75%;
    background-color: #fff;
    z-index: 2;

    .active-item {
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #000;
      cursor: pointer;
    }

    .dropdown-menu {
      position: absolute;
      top: 40px;
      right: 2px;
      left: 2px;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 4px;
    }
  }

  @media (max-width: 1023px) {
    .dropdown-container {
      position: absolute;
      bottom: -10px;
      margin: 0 auto;
      left: 20px;
      right: 20px;
    }
  }
</style>
