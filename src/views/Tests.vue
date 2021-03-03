<template>
  <div id="test">
    <div class="bigDiv">There is something here.....
      <button type="button" @click="fetchUrlUsingThen"> using .then()</button>
      <button type="button" @click="fetchUrlUsingAsyncAwait"> using async-await</button>
      <button type="button" @click="fetchUrlUsingPromiseAll"> using Promise.all() to hit two APIs at a time</button>
      <button type="button" @click="fetchUrlUsingPostman"> using Postman to Mock Server</button>
    </div>
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
import axios from 'axios'
export default {
  data () {
    return {
      user: 'Khodidas-withLoveKD',
      queryUrl: 'https://api.github.com/users/'
    }
  },
  methods: {
    fetchUrlUsingPostman () {
      const url = 'https://96d1fd2c-dc66-4b89-a33c-302fe6d66cce.mock.pstmn.io/stuff/'
      axios.get(url)
        .then((response) => {
          console.log('Psotman Resp = ', response.data)
        })
    },
    fetchUrlUsingThen () {
      axios.get(this.queryUrl + this.user)
        .then(resp => {
          console.log('resp = ', resp.data)
        })
        .catch(errorResp => {
          console.log('error = ', errorResp)
        })
      for (let i = 0; i < 100; i++) {
        console.log('This is after i = ', i)
      }
    },
    async fetchUrlUsingAsyncAwait () {
      console.log('This is BEFORE the Fetching thing')
      const resp = await axios.get(this.queryUrl + this.user)
      console.log('This is AFTER the Fetching thing')
      console.log('resp = ', resp.data)
      console.log('This is AFTER getting Response')
    },
    fetchUrlUsingPromiseAll () {
      const promise1 = new Promise((resolve, reject) => {
        console.log('Inside Promise 1')
        setTimeout(resolve, 100, axios.get('https://api.github.com'))
        setTimeout(reject, 200, console.error('Gor error '))
      })
      const promise2 = new Promise((resolve, reject) => {
        console.log('Inside Promise 2')
        setTimeout(resolve, 100, axios.get(this.queryUrl + this.user))
        setTimeout(reject, 200, console.error('Gor error '))
      })
      Promise.all([promise1, promise2])
        .then(([response1, response2]) => {
          console.log('response1 = ', response1)
          console.log('resp 2 = ', response2)
        })
    }
  }
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
