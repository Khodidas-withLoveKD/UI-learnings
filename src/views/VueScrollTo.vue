<template>
  <div id="scroll-to">
    <PropTesting :flag="false" :component="component">Flag = false</PropTesting>
    <PropTesting :flag="true" :component="component">Flag = true</PropTesting>
    {{ component.value }}
  </div>
</template>

<script>
import PropTesting from '../components/PropTesting'
export default {
  components: {
    PropTesting
  },
  data () {
    return {
      component: {
        value: 'Value',
        name: 'Name'
      }
    }
  },
  watch: {
    component (newVal, oldVal) {
      console.log('oldVal:', oldVal)
      console.log('newVal:', newVal)
    }
  }
}
</script>

<style lang="scss">
h1, button {
  margin-bottom: 1000px;
}
</style>
