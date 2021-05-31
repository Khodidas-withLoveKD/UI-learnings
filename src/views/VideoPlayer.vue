<template>
    <div>
        <!-- <video ref="videoPlayer" class="video-js" data-setup="videoOptions"> -->
        <!-- <video ref="videoPlayer" class="video-js" :options="playerOptions"> -->
        <video ref="videoPlayer" class="video-js vjs-default-skin vjs-big-play-centered"
          data-setup='{
            "controls": true,
            "width": 1000,
            "height": 600,
            "preload": "metadata"
            }'>
          <!-- <source src="@/assets/video.mp4" type="video/mp4"> -->
          <source src="https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8" type="application/x-mpegURL">
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
        controls: true
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
    require('videojs-hls-quality-selector')

    this.player = videojs(this.$refs.videoPlayer, function onPlayerReady () {
      console.log('onPlayerReady', this)
    })
    if (this.player.ready()) {
      console.log('REASDY')
      this.player.play()
    }
    const controlBar = this.player.getChild('ControlBar')
    controlBar.removeChild(controlBar.getChild('SubsCapsButton'))
    this.player.hlsQualitySelector({
      displayCurrentQuality: true
      // vjsIconClass: 'vjs-icon-cog'
    })
    this.player.muted(true)
    // console.log('controlBar:', controlBar)
    console.log('Plater = ', this.player)
    let qualityLevels = this.player.qualityLevels()
    // qualityLevels.removeQualityLevel()
    // this.levels_.splice(i, 1)[0]
    console.log('qLevels:', qualityLevels)
    console.log('qLevels LENGTH:', qualityLevels.length)
    console.log('qualityLevels.levels_:', typeof qualityLevels.levels_)
    // console.log('qualityLevels.levels_:', qualityLevels.levels_.splice(0, 1)[0])

    const levels = []
    qualityLevels.on('addqualitylevel', function (event) {
      const qualityLevel = event.qualityLevel
      console.log('qualityLevel:', qualityLevel)
      if (qualityLevel.height <= 720) {
        // this.player.qualityLevels().levels_.push(qualityLevel)
      }
    })
    console.log('AFTER =============')
    qualityLevels = levels
    this.player.qualityLevels().removeQualityLevel(720)
    console.log('Levels:', levels)
    console.log('qualityLevel:', qualityLevels)
    console.log('qLevels:', this.player.qualityLevels())
    console.log('qLevels LENGTH:', qualityLevels.length)
    console.log('qualityLevels.levels_:', typeof qualityLevels.levels_)
    // console.log('qualityLevels.levels_:', qualityLevels.levels_.splice(0, 1)[0])
    // for (const quality of qualityLevels) {
    //   console.log('quality:', quality)
    //   if (quality.height > 720) {
    //     quality.enabled = false
    //   }
    // }
    // qualityLevels.forEach(quality => {
    //   console.log('quality:', quality)
    //   if (quality.height > 720) {
    //     quality.enabled = false
    //   }
    // })
    // qualityLevels.on('addqualitylevel', function (event) {
    //   const qualityLevel = event.qualityLevel

    //   if (qualityLevel.height <= 720) {
    //     qualityLevel.enabled = true
    //   } else {
    //     qualityLevel.enabled = false
    //   }
    // })
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
