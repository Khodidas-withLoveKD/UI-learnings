<template>
  <div id="scroll-to">
    <button v-scroll-to="'#element'">
      Scroll to #element
    </button>
    <h1 id="element">Hi. I'm element</h1>
  </div>
</template>

<script>
// import VueScrollTo from 'vue-scrollto'
export default {
  // mixins: [VueScrollTo],
  // VueScrollTo: {
  //   easing: 'ease-in',
  //   duration: 2000
  components: {
  }
}
</script>

<style lang="scss">
h1, button {
  margin-bottom: 1000px;
}
</style>
