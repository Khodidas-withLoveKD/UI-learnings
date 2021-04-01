<template>
  <div id="store">
    <DatePicker
      format="dd MMMM yyyy"
      v-model="updateDate"
    ></DatePicker>
    <!-- <p>{{ myDate }}</p> -->
    <button @click="formatDate">Just do it</button>
  </div>
</template>

<script>
import DatePicker from 'vuejs-datepicker'
import dateFormatter from './js/date-formatter'
export default {
  components: {
    DatePicker
  },
  data () {
    return {
      dates: [
        {
          value: new Date(),
          name: 'Something'
        },
        {
          value: new Date('December 17, 1995 03:24:00'),
          name: 'yo'
        }
      ]
    }
  },
  methods: {
    formatDate () {
      console.log('this.dates:', this.dates)
      dateFormatter.modifyDate(this.dates)
      console.log('this.dates:', this.dates)
    }
  },
  watch: {
    'date.today': function (newDate, oldDate) {
      // console.log('Date = ', newDate.getDate())
      // console.log('Month = ', newDate.getMonth() + 1)
      // console.log('Year = ', newDate.getFullYear())
    }
  },
  computed: {
    // myDate () {
    //   return moment(this.date.today).format('DD MMMM YYYY')
    // },
    updateDate: {
      get () {
        return this.date
      },
      set (unformattedDate) {
        //
      }
    }
  }
}

</script>

<style>

</style>
