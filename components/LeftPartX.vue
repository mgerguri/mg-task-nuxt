<template>
    <div class="left-x ph:transform ph:rotate-90 sm:transform sm:rotate-90
      md:transform md:rotate-90"></div>

      <!--  ph:translate-y-5 sm:-translate-y-6 md:-translate-y-6 -->
</template>

<script>
    export default {
        name: "LeftPartX"
    }
</script>

<style lang="scss" scoped>
  .left-x {
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 50% 70%, 50% 49%, 50% 30%, 50% 30%);
    width: 400px;
    height: 400px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    margin-top: -200px;
    left: 50%;
    margin-left: -200px;;
    z-index: 1;
  }

  @media (max-width: 1023px) {
    .left-x {
      width: 300px;
      height: 300px;
      margin-top: -150px;
      margin-left: -150px;
    }
  }
</style>
