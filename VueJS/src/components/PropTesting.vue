<template>
  <div id="prop-testing">
    <p>Value of prop = {{ flag }}</p>
    <input v-model="component.value" />
    <button @click="print">Print Prop vlaue to console</button>
  </div>
</template>

<script>
export default {
  props: {
    flag: {
      type: Boolean,
      default: false
    },
    component: {
      type: Object
    }
  },
  methods: {
    print () {
      console.log('component = ', this.component.value)
    }
  }
}
</script>

<style>
</style>
