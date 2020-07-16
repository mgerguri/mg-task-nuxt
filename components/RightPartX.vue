<template>
    <div class="right-x ph:transform ph:rotate-90 sm:transform sm:rotate-90 md:transform md:rotate-90"></div>

    <!-- ph:translate-y-5 sm:-translate-y-6 md:-translate-y-6 -->
</template>

<script>
    export default {
        name: "RightPartX"
    }
</script>

<style lang="scss" scoped>
  .right-x {
    clip-path: polygon(50% 50%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    width: 400px;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 50%;
    margin-top: -200px;
    right: 50%;
    margin-right: -200px;
    z-index: 1;
  }

  @media (max-width: 1023px) {
    .right-x {
      width: 300px;
      height: 300px;
      margin-top: -150px;
      margin-right: -150px;
    }
  }
</style>
