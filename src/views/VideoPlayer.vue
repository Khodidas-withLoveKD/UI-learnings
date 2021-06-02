<template>
    <div>
        <!-- <video ref="videoPlayer" class="video-js" data-setup="videoOptions"> -->
        <!-- <video ref="videoPlayer" class="video-js" :options="playerOptions"> -->
        <video ref="videoPlayer" class="video-js vjs-default-skin vjs-big-play-centered">
          <!-- <source src="@/assets/video.mp4" type="video/mp4"> -->
          <source src="https://pub-lxp-content.s3.amazonaws.com/DEV/1/8/VIDEO-360.mp4" type="video/mp4" label="360p">
          <source src="https://pub-lxp-content.s3.amazonaws.com/DEV/1/8/VIDEO-480.mp4" type="video/mp4" label="480p">
          <source src="https://pub-lxp-content.s3.amazonaws.com/DEV/1/8/VIDEO-720.mp4" type="video/mp4" selected="true" label="720p">
           <track src="https://pub-lxp-content.s3.amazonaws.com/DEV/1/8/subtitle.vtt" label="English" kind="captions" srclang="en-us" default >
          <!-- <source src="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" type="application/x-mpegURL"> -->
        </video>
    </div>
</template>

<script>
import videojs from 'video.js'
// import 'videojs-youtube/dist/Youtube.min.js'
import 'video.js/dist/video-js.min.css'

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      player: null,
      playerOptions: {
        controls: true,
        height: 540,
        width: 750
      }
    }
  },
  methods: {
    videoOptions () {
      const obj = {
        controls: true
      }
      console.log('obj:', obj)
      return obj
    }
  },
  mounted () {
    require('videojs-contrib-quality-levels')
    // require('videojs-hls-quality-selector')
    // require('videojs-http-source-selector') // Symbol nano che baaki works great, too many console.logs
    // require('videojs-selector-quality-hls')
    // require('videojs-max-quality-selector') // does not work
    require('@silvermine/videojs-quality-selector')(videojs)
    require('@silvermine/videojs-quality-selector/dist/css/quality-selector.css')

    this.player = videojs(this.$refs.videoPlayer, this.playerOptions, function onPlayerReady () {
      const controlBar = this.getChild('ControlBar')
      // controlBar.removeChild(controlBar.getChild('SubsCapsButton'))
      controlBar.addChild('QualitySelector')
      console.log('CONTROLBAR = ', controlBar)
      this.muted(true)
      // ============= TimeStamp ====================
      this.currentTime(24)
      // this.maxQualitySelector()
      // this.httpSourceSelector() // Symbol nano che baaki works great, too many console.logs
      console.log('onPlayerR READDYDYDYDYDYDY', this)
      this.on('loadedmetadata', function () {
        console.log('DURATION = ', this.duration())
        const qualityLevels = this.qualityLevels()
        qualityLevels.removeQualityLevel(qualityLevels[4])
        qualityLevels.removeQualityLevel(qualityLevels[1])
        // ================== Quality Thing ======================
        // ==== Silvermine =======
        // ====== HLS ========
        //   const qualityLevels = this.qualityLevels()
        //   console.log('qualityLevels:', qualityLevels)
        //   console.log('=== PLAYER READY ====')
        //   console.log('qualityLevels2:', qualityLevels)
        //   qualityLevels.removeQualityLevel(qualityLevels[4])
        //   qualityLevels.removeQualityLevel(qualityLevels[0])
        //   // removeQualityLevel(qualityLevels[4])
        //   // this.qualityLevels = qualityLevels
        //   // console.log('YOYOYOqualityLevels2:', this.qualityLevels)
        //   qualityLevels.on('addqualitylevel', function (event) {
        //     const qualityLevel = event.qualityLevel

      //     if (qualityLevel.height >= 720) {
      //       qualityLevel.enabled = true
      //     } else {
      //       qualityLevel.enabled = false
      //     }
      //   })
      //   this.hlsQualitySelector({
      //     displayCurrentQuality: true
      //   // vjsIconClass: 'vjs-icon-cog'
      //   })
      // })
      })
    })
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>
<style>
</style>
