<template>
  <div id="menu">
    <input type="checkbox" id="menu__active"/>
    <label for="menu__active" class="menu__active">
      <div class="menu__toggle">
      </div>
      <div class="menu__listings">
        <div class="circle--main">
          <div class="menu__item notes__rect">
            <img src="@/assets/Notes.svg" class="icons notes__icon" />
          </div>
          <div class="menu__item history__rect">
            <img src="@/assets/History.svg" class="icons history__icon" />
          </div>
          <div class="menu__item dashboard__rect">
            <img src="@/assets/Dashboard.svg" class="icons dashboard__icon" />
          </div>
        </div>
      </div>
    </label>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#menu {
  position: relative;
  // top: -22vh;
  // left: -20vw;
}
.circle--main input[type="checkbox"] {
    display: none;
    // opacity: 0;
}
// input[checkbox] {
//   display: none;
// }
.circle--main {
  display: flex;
  align-items: center;
  // justify-content: center;
  text-align: center;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  border: 70px solid #000;
}
#menu__active:checked ~ label .menu__toggle {
  transition: all 1s;
}
// #menu__active:checked ~ label .menu__listings {
#menu__active:checked ~ label .circle--main {
  transform: rotate(10deg) scale(1);
  transition: transform 1s;
}
.menu__listings {
  z-index: 10;
  // position: absolute;
  // top: -100px;
  // left: -200px;
  // width: 100%;
  // height: 100%;
  // background-color: lightblue;
  border-radius: 50%;
  padding: 20px;
  opacity: 0.8;
  transform: scale(0.1) rotate(150deg);
  transition: transform 1s;
}
.menu {
  &__active {
    // position: relative;
  }
  &__toggle {
  position: relative;
  margin: 0 auto;
  // top: 33%;
  // left: 40%;
  z-index: 2;
  height: 50px;
  border-radius: 50%;
  width: 50px;
  background-color: blue;
  transition: transform 1.3s;
  cursor: pointer;
  pointer-events: auto;
  }
  &__item {
    position: absolute;
    height: 70px;
    width: 230px;
    left: 200px;
    // background-color: orange;
    border: 2px solid orange;
  }
}
.notes__rect {
  origin: 0% 50%;
  transform: rotate(10deg);
}
.history__rect {
  transform-origin: 0% 50%;
  transform: rotate(40deg);
}
.dashboard__rect {
  transform-origin: 0% 50%;
  transform: rotate(80deg);
  margin-bottom: 40px;
}
.icons {
  background-color: black;
  height: 50px;
  width: 50px;
  float: right;
}
.notes__icon{
  transform: rotate(-10deg);
}
.history__icon {
  transform: rotate(-40deg);
}
.dashboard__icon {
  transform: rotate(-80deg);
}
@keyframes rotator {
0% { transform:rotate(0) scale(0) }
100% { transform:rotate(720deg) scale(1) }
}
</style>
