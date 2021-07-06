<template>
  <div>
    <section class="menu menu--circle">
      <input type="checkbox" id="menu__active"/>
      <label for="menu__active" class="menu__active">
        <div class="menu__toggle">
        </div>
        <div class="menu__listings">
          <ul class="circle">
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a href="https://codepen.io/logrithumn" class="button">
                    <img src="@/assets/Notes.svg">
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a href="#" class="button">
                    <img src="@/assets/History.svg">
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div class="placeholder">
                <div class="upside">
                  <a href="#" class="button">
                    <img src="@/assets/Dashboard.svg">
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </label>
    </section>

  </div>
</template>
<script>
export default {
  name: 'CircularSubmenu'
}
</script>
<style lang="scss" scoped>
body {
  padding: 0;
  margin: 0;
  background-color: black;
  color: #fff;
}
body * {
  box-sizing: border-box;
}
.menu {
  pointer-events: none;
}
.menu--circle {
  position: absolute;
  // z-index: 13;
  width: 500px;
  height: 500px;
  background-color: #392338;
  opacity: 0.3;
  overflow: hidden;
}
.menu__active {
  position: relative;
}
.menu__toggle {
  z-index: 11;
  position: absolute;
  // top: -100px;
  // left: -100px;
  width: 30px;
  height: 30px;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  transition: transform 1.3s;
  cursor: pointer;
  pointer-events: auto;
}
.inner__circle {
  position: absolute;
  top: 21px;
  left: 45px;
  width: 300px;
  height: 300px;
  background-color: blue;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 11;
}
.menu__listings {
  z-index: 10;
  position: absolute;
  top: -100px;
  left: -200px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  padding: 20px;
  opacity: 0.8;
  transform: scale(0.1) rotate(150deg);
  transition: transform 1s;
}
.menu__arrow ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.menu__arrow--top {
  top: 0.5em;
  left: 220px;
}
.menu__arrow--top .arrow {
  transform: rotate(-45deg);
}
.menu__arrow--left {
  top: 220px;
  left: 0.5em;
}
.menu__arrow--left .arrow {
  transform: rotate(-135deg);
}
.arrow {
  width: 20px;
  height: 20px;
  border-right: 6.666666666666667px solid #fff;
  border-top: 6.666666666666667px solid #fff;
  border-radius: 3px;
  transition: border-color 0.3s;
  cursor: pointer;
  pointer-events: auto;
}
.arrow:hover {
  border-color: #ff947f;
  transition: border-color 0.3s;
}
.circle {
  position: relative;
  padding: 110px;
  margin: 0;
  height: 0%;
  width: 00%;
  background-color: rgb(24, 22, 22);
  border-radius: 50%;
  border: 50px solid black;
  transform: rotate(108deg);
  overflow: hidden;
  list-style: none;
}
.circle li {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  transform-origin: 0 100%;
}
.circle li .placeholder {
  position: absolute;
  left: -100%;
  padding-top: 1.5em;
  width: 200%;
  height: 200%;
  text-align: center;
  transform: skewY(54deg) rotate(18deg);
}
.circle li .placeholder .upside {
  transform: rotate(180deg);
}
.circle li .placeholder a {
  text-decoration: none;
  pointer-events: auto;
}
.circle li .placeholder button {
  pointer-events: auto;
}
.circle li .placeholder .button {
  font-size: 2.3em;
  background-color: transparent;
  border: none;
  color: #392338;
  cursor: pointer;
}
.circle li:nth-child(1) {
  transform: rotate(0deg) skewY(-54deg);
  background-color: rgb(24, 23, 23);
}
.circle li:nth-child(2) {
  transform: rotate(36deg) skewY(-54deg);
  background-color: rgb(29, 28, 28);
}
.circle li:nth-child(3) {
  transform: rotate(72deg) skewY(-54deg);
  background-color: rgb(20, 19, 19);
}
#menu__active {
  position: fixed;
  top: -99999px;
  left: -99999px;
}
#menu__active:checked ~ label .menu__listings {
  transform: rotate(10deg) scale(1);
  transition: transform 1s;
}
#menu__active:checked ~ label .menu__toggle {
  background-color: #392338;
  transition: all 1s;
}
#menu__active:checked ~ label .inner__circle {
  background-color: #392338;
  transition: all 1s;
}
#menu__active:checked ~ label .hamburger {
  border-color: transparent;
  transition: border-color 0.333333333333333s;
}
#menu__active:checked ~ label .hamburger:after {
  top: -2px;
  border-color: #fff;
  transform: translateX(-50%) rotate(45deg);
  transition: top, transform;
  transition-duration: 0.25s, 1s;
}
#menu__active:checked ~ label .hamburger:before {
  bottom: -2px;
  border-color: #fff;
  transform: translateX(-50%) rotate(-45deg);
  transition: bottom, transform;
  transition-duration: 0.25s, 1s;
}
#menu__active:checked ~ label .button:hover {
  color: #c1264e;
}
#menu__active:checked ~ label .menu__arrow {
  visibility: visible;
  transition: all 1s 1.111111111111111s;
}
#menu__active:checked ~ label .menu__arrow--top label {
  display: none;
}
#menu__active:checked ~ label .menu__arrow--top label[for="degree--up-0"] {
  display: block;
}
#menu__active:checked ~ label #degree--up-0:checked ~ .menu__listings {
  transform: rotate(116deg);
}
#menu__active:checked ~ label #degree--up-0:checked ~ .menu__arrow--top label {
  display: none;
}
#menu__active:checked ~ label #degree--up-0:checked ~ .menu__arrow--top label[for="degree--up-1"] {
  display: block;
}
#menu__active:checked ~ label #degree--up-1:checked ~ .menu__listings {
  transform: rotate(224deg);
}
#menu__active:checked ~ label #degree--up-1:checked ~ .menu__listings ~ .menu__arrow--top label {
  display: none;
}
#menu__active:checked ~ label #degree--up-1:checked ~ .menu__listings ~ .menu__arrow--top label[for="degree--up-2"] {
  display: block;
}

</style>
