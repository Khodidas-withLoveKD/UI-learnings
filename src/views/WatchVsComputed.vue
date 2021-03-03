<template>
  <div id="watch-vs-computed">
    {{ counter }} <br>
    <button @click="updateCounter">Counter++</button>
    <input type="text" v-model="someText">
    <p>Counter by Computed = {{computedOfCounter}}</p>
    <p>Text by Computed = {{computedOfText}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      someText: ''
    }
  },
  computed: {
    computedOfCounter () {
      return this.counter
    },
    computedOfText () {
      return this.someText
    }
  },
  beforeCreate () {
    console.log('Inside BeforeCreated')
  },
  watch: {
    counter (newVal, oldVal) {
      console.log(`Old Value = ${oldVal} | New Value = ${newVal}`)
    },
    someText: {
      handler: 'updateCounter',
      immediate: true
      // this.updateCounter()
    }
  },
  methods: {
    updateCounter () {
      // console.log('Inside updateCounter')
      this.counter++
    }
  }
}
</script>

<style>

</style>
