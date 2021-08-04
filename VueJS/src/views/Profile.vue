<template>
  <div id="profilePage">
    <form @submit.prevent="formSubmit">
      <label for="name" class="name"><b>Name: {{ ProfileDetails.name }}</b></label>
      <br><br>
      <label for="email" class="email"><b>Email: {{ ProfileDetails.email }}</b></label>
      <br><br>
      <button type="submit"> Edit </button>
      <p class="test">This is for other purposes</p>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Profile',
  data () {
    return {
      isDarkTheme: true
    }
  },
  computed: {
    ...mapGetters({
      ProfileDetails: 'profileDetailsStore/getProfileDetails'
    })
  },
  methods: {
    formSubmit () {
      console.log('Inside forMSubmit')
      this.$router.push('/nestedroutes/edit')
    }
  }
}
</script>

<style lang="scss" scoped>
// css  variables
$primary: rgb(233, 34, 144);
$sec-color: rgb(12, 113, 133);
$primary-size: 70px;

// mixins
@mixin do_cool_stuff($my_color, $size) {
  color: $my_color;
  font-size: $size;
  text-shadow: 10px 10px 8px $sec-color;
}
#profilePage{
  margin-top: 15%;
  @if (isDarkTheme) {
    background: rgb(63,63,63);
  }
  @else {
    background: silver;
  }
}
.name {
  color: $primary;
  font-size: $primary-size;
}
.email {
  @include do_cool_stuff(rgb(2,45,78), 50px);
}
.test {
  @extend .name
}
</style>
