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
            <span class="info__text">Notes</span>
          </div>
          <div class="menu__item history__rect">
            <img src="@/assets/History.svg" class="icons history__icon" />
            <span class="info__text">History</span>
          </div>
          <div class="menu__item dashboard__rect">
            <img src="@/assets/Dashboard.svg" class="icons dashboard__icon" />
            <span class="info__text">Dashboard</span>
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
  height: 200px;
  width: 200px;
  position: absolute;
  // top: -22vh;
  // left: -20vw;
}
#menu input[type="checkbox"] {
    display: none;
}
.menu__listings {
  z-index: 10;
  position: relative;
  // top: -100px;
  // left: -200px;
  width: 100%;
  height: 100%;
  top: -157px;
  left: -135px;
  // border-radius: 50%;
  // padding: 20px;
  transform: scale(0.3) rotate(180deg);
  // transform-origin: 0% 50%;
  transition: transform 1s;
}
.circle--main {
  // position: relative;
  display: flex;
  align-items: center;
  // text-align: center;
  border-radius: 50%;
  height: 180px;
  width: 180px;
  border: 55px solid #000;
}
#menu__active:checked ~ label .menu__toggle {
  transition: all 1s;
}
#menu__active:checked ~ label .menu__listings {
  transform: rotate(1deg) scale(1);
  transition: transform 1s;
}
.menu {
  &__active {
    // position: relative;
  }
  &__toggle {
  position: relative;
  z-index: 12;
  // height: 10%;
  height: 25px;
  // top: -2.1vh;
  border-radius: 50%;
  // width: 10%;
  width: 25px;
  background-color: black;
  transition: transform 1.3s;
  cursor: pointer;
  pointer-events: auto;
  }
  &__item {
    position: absolute;
    height: 15%;
    width: 65%;
    left: 145px;
    // border: 2px solid orange;
  }
}
.notes__rect {
  origin: 0% 50%;
  transform: rotate(10deg);
  margin-left: 5px;
}
.history__rect {
  transform-origin: 0% 50%;
  transform: rotate(40deg);
}
.dashboard__rect {
  transform-origin: 0% 50%;
  transform: rotate(80deg);
  // margin-bottom: 5px;
}
.icons {
  // background-color: black;
  height: 95%;
  width: 25%;
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
.info__text {
  display: none;
}
.notes__icon:hover + .info__text {
  display: block;
  color: red;
  transform: rotate(-10deg);
  position: relative;
  // top: 3px;
  bottom: 7px;
  left: 120px;
}
.history__icon:hover + .info__text {
  display: block;
  color: red;
  transform: rotate(-40deg);
  position: relative;
  // top: 3px;
  bottom: 30px;
  left: 120px;
}
.dashboard__icon:hover + .info__text {
  display: block;
  color: red;
  transform: rotate(-80deg);
  position: relative;
  // top: 3px;
  bottom: 31px;
  left: 105px;
}
</style>
