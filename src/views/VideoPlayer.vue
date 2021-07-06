<template>
  <div id="VideoPlayer">
    <VideoPlayerComponent
      :key="compoKey"
      :contentId="contentId"
      :videoSrc360p="src360p"
      :videoSrc480p="src480p"
      :videoSrc720p="src720p"
      :subtitleUrl="subtitleSrc"
      :thumbnailUrl="thumbnailUrl"
      :timeSpent="timeSpent"
      />
  </div>
</template>

<script>
import VideoPlayerComponent from '@/components/VideoPlayerComponent'
export default {
  components: {
    VideoPlayerComponent
  },
  data () {
    return {
      compoKey: 0,
      src360p: null,
      src400p: null,
      src720p: null
    }
  },
  methods: {
    doSomething () {
      console.log('doSomething:')
      this.src360p = 'https://pub-lxp-content.s3.amazonaws.com/DEV/1/8/VIDEO-360.mp4'
      this.src480p = 'https://pub-lxp-content.s3.amazonaws.com/DEV/1/8/VIDEO-480.mp4'
      this.src720p = 'https://pub-lxp-content.s3.amazonaws.com/DEV/1/8/VIDEO-720.mp4'
      console.log('this.compoKey:', this.compoKey)
      this.compoKey += 1
      console.log('this.compoKey:', this.compoKey)
    }
  },
  mounted () {
    console.log('this.compoKey:', this.compoKey)
    setTimeout(() => { this.doSomething() }, 5000)
  }
}
</script>

<style scoped>
#VideoPlayer {
  height: 100vh;
  width: 100vw;
}
</style>
