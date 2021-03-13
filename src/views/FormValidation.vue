<template>
  <div id="form-validation">
    <form class="form" @submit.prevent="submitForm">
      <div>
        test<input type="text" ref="test" v-model="$v.test.$model" :class="status($v.test)">
      </div>
      <p>
        {{ $v }}
        <br><br>
        <h2>Required = {{ $v.name.required }} </h2>
        <h2>Invalid = {{ $v.name.$invalid }} </h2>
        Name <input type="text" v-model.trim="$v.name.$model" ref="name"
        class="input-field"
        :class="status($v.name)"
        >
        <div class="invalid-input">
          <span v-if="!$v.name.required && $v.name.$dirty">Name field is required Laude!!</span>
          <span v-if="!$v.name.minLength">Must have alteast {{ $v.name.$params.minLength.min }} characters</span>
          <span v-if="!$v.name.maxLength">Cannot have more than {{ $v.name.$params.maxLength.max }} characters Laude!!</span>
        </div>
      <p>
        Email <input type="text" v-model="$v.email.$model" :class="status($v.email)"/>
        <div class="invalid-input">
      va    <span v-if="$v.email.$error">invalid email!</span>
        </div>
      <p>
        Age <input type="number" v-model.number="$v.age.$model" />
      </p>
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, between, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  data () {
    return {
      test: '',
      name: '',
      email: '',
      age: 0
    }
  },
  validations: {
    test: {
      required,
      minLength: minLength(4)
    },
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10)
    },
    email: {
      required,
      email
    },
    age: {
      between: between(18, 30)
    }
  },
  methods: {
    status (validation) {
      console.log('Text: ', validation)
      console.log('dirty:', validation.$dirty)
      console.log('error:', validation.$error)
      return {
        error: validation.$error,
        dirty: validation.$dirty
      }
    },
    submitForm () {
      if (this.$v.$invalid) {
        console.log('IF => this.$v', this.$v)
        for (const key in Object.entries(this.$v)) {
          const input = Object.keys(this.$v)[key]
          if (input.includes('$')) return false
          console.log('AFTER IF => input:', input)
          console.log('$v[input] = ', this.$v[input])
          console.log('this.$v[input].$invalid = ', this.$v[input].$invalid)
          if (this.$v[input].$invalid) {
            console.log('input:', input)
            console.log('this.$refs[input] = ', this.$refs[input])
            this.$refs[input].focus()
            console.log('input:', input)
            break
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.invalid-input {
  color: red;
  font-size: 14px;
}
.dirty {
  border-color: #5A5;
  background: #EFE;
}

.dirty:focus {
  outline-color: #8E8;
}

.error {
  border-color: red;
  background: #FDD;
}

.error:focus {
  outline-color: #F99;
}
</style>
