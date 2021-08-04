<template>
  <div id="profilePage">
    <form @submit.prevent="formEdit">
      <label for="name"><b>Name: </b></label>
      <input type="text" v-model="profileDetails.name">
      <br><br>
      <label for="email"><b>Email: </b></label>
      <input type="text" v-model="profileDetails.email">
      <br><br>
      <button type="submit"> Save </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EditProfileC',
  data () {
    return {
      profileDetails: {
        name: null,
        email: null
      }
    }
  },
  methods: {
    ...mapActions({
      editProfileDetails: 'profileDetailsStore/editProfileDetails'
    }),
    formEdit () {
      this.editProfileDetails(this.profileDetails)
      alert('Details Updated')
    }
  }
}
</script>

<style>

</style>
