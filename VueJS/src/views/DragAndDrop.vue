<template>
  <div id="drag-and-drop">
    <div class="draggable-div">
      <img src="@/assets/logo.png" draggable="true">
    </div>
    <div class="draggable-div">
    </div>
    <div class="draggable-div">
      <!-- <draggable  -->
    </div>
    <div class="draggable-div">
    </div>
    <div class="draggable-div">Drag ME!!!
    </div>
    <div class="draggable-div">
    </div> <br><br><br><br><br>
    <div class="same-as-project">
        <transition-group type="transition">
          <ul v-for="box in boxes" :key="box.id">
            <draggable v-model="boxes" @start="drag=true" @end="drag=false">
            <li>
              <div id="drag-box"></div>
              Name: {{ box.name }} <br>
              Phone: {{ box.phone }}
              <input type="text" placeholder="Something  Here" @click="stop($event)">
            </li>
            </draggable>
          </ul>
        </transition-group>
    </div>
    <hr>
    <div class="another-test">
      <draggable v-model="boxes" @start="drag=true" @end="drag=false" v-bind="getOptions()">
        <div v-for="element in boxes" :key="element.id">
          <li>
            {{element.name}}<br>
            {{ element.phone}} <br>
            <input type="text" placeholder="Something  Here">
          </li>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  created () {
    console.log('CL = ', this.$options.methods.preventDrag)
  },
  methods: {
    preventDrag (event) {
      console.log('Inside PreventDrag')
      event.preventDefault()
    },
    stop (event) {
      console.log('Inside stop:')
      event.stopPropagation()
    },
    getOptions () {
      const options = {
        filter: 'input',
        preventOnFilter: false
      }
      console.log('options:', options)
      return options
    }
  },
  data () {
    return {
      boxes: [
        {
          id: 1,
          name: 'KD',
          phone: 1234
        },
        {
          id: 2,
          name: 'Shubham',
          phone: 1234
        },
        {
          id: 3,
          name: 'Harsha',
          phone: 1234
        },
        {
          id: 4,
          name: 'DaSEXh',
          phone: 1234
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.draggable-div {
  position: relative;
  float: left;
  height: 50px;
  width: 100px;
  margin: 10px;
  border: 2px solid black;
  img {
    width: 100%;
    height: 100%;
  }
}
same-as-project, another-test {
  display: block;
}
another-test {
  background-color: cadetblue;
}
ul {
  list-style-type: none;
}
li {
  border: 2px solid blueviolet;
  width: 200px;
}
#drag-box {
  height: 20px;
  width: 30px;
  border: 2px solid red;
}
#drag-box:hover {
  cursor: all-scroll;
}
</style>
