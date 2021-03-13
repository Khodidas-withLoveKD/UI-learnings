<template>
  <div id="form-validation">
    <form class="form">
      Check your Console !!!
      <p>
        Name <input type="text" v-model.lazy="name" />
      </p>
      <p>
        Email <input type="email" v-model.trim="email" @blur="getEmail(email)"/>
      </p>
      <p>
        Age <input type="number" v-model.number="age" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      age: 0
    }
  },
  watch: {
    age (newVal, oldVal) {
      console.log(' Type of Age = ', typeof newVal)
    },
    name (newVal, oldVal) {
      // to check the v-model.lazy property
      console.log('Hit NAme \n newVal = ' + newVal + ' | oldVal = ' + oldVal)
    },
    email (newVal, oldVal) {
      console.log('newVal = ' + newVal + ' | oldVal = ' + oldVal)
    }
  },
  methods: {
    getEmail (em) {
      console.log('Trimmed Email  = ', em)
    }
  }
}
</script>

<style>

</style>
