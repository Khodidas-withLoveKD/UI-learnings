<template>
  <div id="form-validation">
    <form class="form" @submit.prevent="validate">
      <div v-for="(detail, index) in details" :key="detail.index" :set="v = $v.details.$each.$iter">
        <p>name: <input type="text" ref="name" v-model="detail.name" :class="status(v[index].name)" @keypress="v[index].name.$touch"></p>
        <p>email: <input type="text" ref="email" v-model="detail.email" :class="emailStatus(v[index].email)" @keypress="v[index].email.$touch"></p>
        <p>age: <input type="number" ref="age" v-model="detail.age"></p>
      </div>
      <button type="submit">Submit</button>
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
      details: [
        {
          name: '',
          email: '',
          age: 21
        },
        {
          name: 'Shubham',
          email: 'ss@gmail.com',
          age: 20
        },
        {
          name: '',
          email: '',
          age: 21
        },
        {
          name: 'Shubham',
          email: 'ss@gmail.com',
          age: 20
        },
        {
          name: '',
          email: '',
          age: 21
        },
        {
          name: 'Shubham',
          email: 'ss@gmail.com',
          age: 20
        },
        {
          name: '',
          email: '',
          age: 21
        },
        {
          name: 'Shubham',
          email: 'ss@gmail.com',
          age: 20
        }
      ]
    }
  },
  validations: {
    details: {
      $each: {
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
      }
    }
  },
  methods: {
    validate () {
      // console.log('Validation = ', this.$v.details.$each)
      for (const index in this.$v.details.$each) {
        const objectFields = this.$v.details.$each[index]
        // console.log('objectFields:', objectFields)
        for (const objectFieldsKey in Object.entries(objectFields)) {
          const objectFieldsInput = Object.entries(objectFields)[objectFieldsKey]
          if (objectFieldsInput.includes('$')) return false
          const refTag = objectFieldsInput[0]
          console.log('refTag:', refTag)
          const input = objectFieldsInput[1]
          if (input.$invalid) {
            console.log('input:', input)
            console.log('TYPEOF this.$refs[input] = ', typeof this.$refs[refTag])
            // console.log('this.$refs[input] = ', this.$refs[refTag][0])
            for (const i in this.$refs[refTag]) {
              console.log('this.$refs[input] = ', this.$refs[refTag][i])
              const elementToBeFocused = this.$refs[refTag][i]
              if (i === index) {
                console.log('elementToBeFocused', elementToBeFocused)
                elementToBeFocused.focus()
                // if found one invalid field => break out of validate ()
                return
              }
            }
          }
        }
      }
    },
    validateNameAndFileUpload () {
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
            if (input === 'uploadedFileName') {
              console.log('INSIDE IF')
              const temp = 'fileInput'
              this.$nextTick(() =>
                this.$refs[temp].focus())
              break
            } else {
              this.$refs[input].focus()
              console.log('input:', input)
              break
            }
          }
        }
      }
    },
    status (validation) {
      // console.log('Text: ', validation)
      // console.log('dirty:', validation.$dirty)
      // console.log('e rror:', (!validation.minLength || !validation.maxLength))
      // console.log('dirty:', validation.required)
      return {
        error: (validation.$model.length === 0 && validation.$dirty) || (!validation.minLength || !validation.maxLength)
        // dirty: !validation.$invalid
      }
    },
    emailStatus (validation) {
      // console.log('email: ', validation)
      // console.log('$touch: ', validation.$touch)
      // console.log('error:', (!validation.minLength || !validation.maxLength))
      // console.log('dirty:', validation.$dirty || validation.$model.length > 0)
      console.log('error: ', validation.$invalid)
      return {
        error: validation.$invalid && validation.$dirty
      //   dirty: !validation.$invalid
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
