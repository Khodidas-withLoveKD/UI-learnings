<template>
  <div id="image">
    <img src="@/assets/download.jpeg"
    id="eeveelutions"
    width="200"
    height="200"
    />
    <canvas
    id="canvas"
    ref="uploadCanvas"
    width="200"
    height="200">
    </canvas>
    <p><button @click="doSomething">Convert</button></p>
  </div>
</template>

<script src="https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js"></script>
<script>
export default {
  methods: {
    doSomething () {
      console.log('Inside doSOmething')
      const selectedSimpleImage = new SimpleImage(document.getElementById('eeveelutions'))
      setTimeout(() => {
        for (const pixel of selectedSimpleImage.values()) {
          const pixelCount = pixel.getRed() + pixel.getGreen() + pixel.getBlue()
          console.log('pixelCount:', pixelCount)
          let newColor = 0
          if (pixelCount > 383) newColor = 255
          pixel.setRed(newColor)
          pixel.setGreen(newColor)
          pixel.setBlue(newColor)
          pixel.setAlpha(255)
        }
      })
      selectedSimpleImage.drawTo(this.$refs.uploadCanvas)
    }
  }
}
</script>

<style>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
canvas {
  border: 1px solid #000;
}
</style>
