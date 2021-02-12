<template>
  <div id="grid-view-container">
    <div class="row">
      <div class="col-3 dp-img">
        <img id="dp" src="@/assets/Motiv_6.jpg" alt="Some here">
      </div>
      <div class="col-12 cover-photo">
        <img src="@/assets/i_have_no_life.jpeg" />
      </div>
    </div>
    <div class="row">
      <div class="col-3 about-section">
        <h1>something here</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
/* making it website first */
.col-1{ width: 8.33%}
.col-2{ width: 16.66%}
.col-3{ width: 25%}
.col-4{ width: 33.33%}
.col-5{ width: 41.66%}
.col-6{ width: 50%}
.col-7{ width: 58.33%}
.col-8{ width: 66.66%}
.col-9{ width: 75%}
.col-10{ width: 83.33%}
.col-11{ width: 91.66%}
.col-12{ width: 100%}

* {
  box-sizing: border-box;
}
[class*="col-"]{
  float: left;
}
img{
  width: 100%;
}
#dp{
  border-radius: 50%;
}
.grid-view-container{
  // display: flex;
}
.cover-photo{
  position: relative;
}
.dp-img{
  position: absolute;
  z-index: 1;
  margin: 8% 0% 0% 2%;
}
.about-section{
  background-color: cyan;
}
</style>
