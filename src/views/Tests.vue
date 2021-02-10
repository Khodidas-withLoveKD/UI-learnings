<template>
  <div id="test">
    <div class="bigDiv">There is something here.....</div>
    <p> A lot of text here that you cannot imagine. Well, you can imagine but as yu see you have to read a lot and still you are reading it and I suggest you to stop but I know you won't. Stop I said !!! Well, it seems you are very stubborn. Well, go on and waste time to read which may not make much sense to you. Anyways..... thanks for giving so much time in reading this!!!!  A lot of text here that you cannot imagine. Well, you can imagine but as yu see you have to read a lot and still you are reading it and I suggest you to stop but I know you won't. Stop I said !!! Well, it seems you are very stubborn. Well, go on and waste time to read which may not make much sense to you. Anyways..... thanks for giving so much time in reading this!!!!</p>
    <!-- making a div and inside keeping many images componenets, passing values through prop -->
    <div class="img-container">
      <div class="column">
        <img src="@/assets/logo.png" />
        <img src="@/assets/Motiv_1.jpg" />
        <img src="@/assets/Motiv_2.jpg" />
        <img src="@/assets/Motiv_3.jpg" />
        <img src="@/assets/Motiv_4.png" />
        <img src="@/assets/Motiv_5.jpg" />
        <img src="@/assets/Motiv_6.jpg" />
      </div>
      <div class="column">
        <img src="@/assets/Motiv_3.jpg" />
        <img src="@/assets/Motiv_2.jpg" />
        <img src="@/assets/Motiv_1.jpg" />
        <img src="@/assets/Motiv_4.png" />
        <img src="@/assets/Motiv_6.jpg" />
        <img src="@/assets/Motiv_5.jpg" />
        <img src="@/assets/logo.png" />
      </div>
      <div class="column">
        <img src="@/assets/Motiv_3.jpg" />
        <img src="@/assets/Motiv_4.png" />
        <img src="@/assets/Motiv_1.jpg" />
        <img src="@/assets/logo.png" />
        <img src="@/assets/Motiv_2.jpg" />
        <img src="@/assets/Motiv_5.jpg" />
        <img src="@/assets/Motiv_6.jpg" />
      </div>
      <div class="column">
        <img src="@/assets/logo.png" />
        <img src="@/assets/Motiv_1.jpg" />
        <img src="@/assets/Motiv_3.jpg" />
        <img src="@/assets/Motiv_2.jpg" />
        <img src="@/assets/Motiv_4.png" />
        <img src="@/assets/Motiv_6.jpg" />
        <img src="@/assets/Motiv_5.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
*{
  box-sizing: border-box;
}
.bigDiv{
  border-style: double;
  float: left;
  height: 10%;
  width: 50%;
  text-align: center;
}
.img-container{
  border: 5px dashed red;
  display: flex;
  flex-flow: row wrap;
}
.column{
  flex: 25%;
  max-width: 25%;
}
img{
  margin: 5px;
  width: 90%;
}
@media screen and (min-width: 500px){
  .img-container{
    background-color: cyan;
  }
}
@media screen and (max-width: 800px) {
  .column{
    flex: 50%;
    max-width: 50%;
  }
}
@media screen and (max-width: 500px) {
  .column{
    flex:100%;
    max-width:100%;
  }
}
</style>
