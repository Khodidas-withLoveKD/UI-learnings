<template>
  <div id="app">
    <div class="hey">
      <AwesomeVueStarRating
      :star="this.star"
      :disabled="this.disabled"
      :maxstars="this.maxstars"
      :starsize="this.starsize"
      :hasresults="this.hasresults"
      :hasdescription="this.hasdescription"
      :ratingdescription="this.ratingdescription"
    />
    </div>
    <div class="something">
      <AwesomeVueStarRating
      class="star2"
      :star="this.star2"
      :disabled="this.disabled2"
      :maxstars="this.maxstars2"
      :starsize="this.starsize2"
      :hasresults="this.hasresults2"
      :hasdescription="this.hasdescription2"
      :ratingdescription="this.ratingdescription2"
    />
    </div>
  </div>
</template>

<script>
import AwesomeVueStarRating from 'awesome-vue-star-rating'

export default {
  name: 'App',
  components: {
    AwesomeVueStarRating
  },
  data () {
    return {
      star: 2,
      star2: 4,
      ratingdescription: [
        {
          text: 'Poor',
          class: 'star-poor'
        },
        {
          text: 'Below Average',
          class: 'star-belowAverage'
        },
        {
          text: 'Average',
          class: 'star-average'
        },
        {
          text: 'Good',
          class: 'star-good'
        },
        {
          text: 'Excellent',
          class: 'star-excellent'
        }
      ],
      ratingdescription2: [
        {
          text: 'I hate it',
          class: 'star-poor'
        },
        {
          text: 'I dont like it',
          class: 'star-belowAverage'
        },
        {
          text: 'Its Okay',
          class: 'star-average'
        },
        {
          text: 'I like it',
          class: 'star-good'
        },
        {
          text: 'I Love it',
          class: 'star-excellent'
        }
      ],
      hasresults: true,
      hasdescription: true,
      starsize: 'lg', // [xs,lg,1x,2x,3x,4x,5x,6x,7x,8x,9x,10x],
      maxstars: 5,
      disabled: false,
      hasresults2: true,
      hasdescription2: true,
      starsize2: 'lg', // [xs,lg,1x,2x,3x,4x,5x,6x,7x,8x,9x,10x],
      maxstars2: 5,
      disabled2: false,
      starsize3: 'xs'
    }
  }
}
</script>
<style lang="scss">
/** Customise Star color **/
div.hey{
  .star {
    color: blue;
  }
  .star.active {
    color:blue;
  }
  .list,
  .list.disabled {
    &:hover {
      .star {
        color: red !important;
      }
      .star.active {
        color: red;
      }
    }
  }
}
</style>
