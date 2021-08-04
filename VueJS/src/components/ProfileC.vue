<template>
  <div id="profilePage">
    <form @submit.prevent="formSubmit">
      <label for="name"><b>Name: {{ ProfileDetails.name }}</b></label>
      <br><br>
      <label for="email"><b>Email: {{ ProfileDetails.email }}</b></label>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProfileC',
  computed: {
    ...mapGetters({
      ProfileDetails: 'profileDetailsStore/getProfileDetails'
    })
  }
}
</script>

<style>
#profilePage{
  margin-top: 15%;
}
</style>
