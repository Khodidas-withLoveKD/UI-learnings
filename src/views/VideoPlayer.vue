<template>
    <div>
        <!-- <video ref="videoPlayer" class="video-js" data-setup="videoOptions"> -->
        <!-- <video ref="videoPlayer" class="video-js" :options="playerOptions"> -->
        <video ref="videoPlayer" class="video-js vjs-default-skin vjs-big-play-centered">
          <!-- <source src="@/assets/video.mp4" type="video/mp4"> -->
          <!-- <source src="https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8" type="application/x-mpegURL"> -->
          <source src="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" type="application/x-mpegURL">
        </video>
    </div>
</template>

<script>
import videojs from 'video.js'
import 'videojs-youtube/dist/Youtube.min.js'
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
        width: 750,
        plugins: {
          httpSourceSelector: {
            default: 'auto'
          }
        }
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
    require('videojs-http-source-selector') // Symbol nano che baaki works great, too many console.logs
    // require('videojs-selector-quality-hls')
    // require('videojs-max-quality-selector') // does not work

    this.player = videojs(this.$refs.videoPlayer, this.playerOptions, function onPlayerReady () {
      const controlBar = this.getChild('ControlBar')
      controlBar.removeChild(controlBar.getChild('SubsCapsButton'))
      console.log('CONTROLBAR = ', controlBar)
      this.muted(true)
      // ============= TimeStamp ====================
      this.currentTime(24)
      // this.maxQualitySelector()
      this.httpSourceSelector() // Symbol nano che baaki works great, too many console.logs
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
