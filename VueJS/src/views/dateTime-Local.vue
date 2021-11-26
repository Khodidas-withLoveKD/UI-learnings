<template>
  <div id="date-time">
    <!-- Use two separate inputs - one for date and one for time -->
    <input type="date" id="start" name="trip-start" v-model="attribute.date"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31">
       <br>
    <input type="time" id="appt" name="appt" v-model="attribute.time"
       min="09:00" max="18:00">
    <button type="submit" @click="showDate">
      Submit
    </button>
     <h3>DAte = {{ attribute.value }}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      attribute: {
        date: null,
        time: null
      }
    }
  },
  methods: {
    showDate () {
      console.log('Date = ', this.attribute.date)
      console.log('Time = ', this.attribute.time)
    }
  }
}
</script>

<style>

</style>
