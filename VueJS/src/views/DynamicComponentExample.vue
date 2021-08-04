<template>
  <div id="app">
    <router-view />
    <h2> This is the example of dynamic Components </h2>
    <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{ tab }}</button>
    <component :is="currentActiveTab"></component>
  </div>
</template>
<script>
import ProfileC from '../components/ProfileC'
import EditProfileC from '../components/EditProfileC'
export default {
  name: 'DCExample',
  data () {
    return {
      currentTab: 'ProfileC',
      tabs: ['ProfileC', 'EditProfileC']
    }
  },
  components: {
    ProfileC,
    EditProfileC
  },
  computed: {
    currentActiveTab () {
      console.log('CurrentTab = ', this.currentTab)
      return this.currentTab
    }
  }
}
</script>
<style>

</style>
