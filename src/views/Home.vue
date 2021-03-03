<template>
  <div class="home">
    <h1>This is the first page</h1>
    <h3><router-link to="/profile">Routing Example</router-link></h3>
    <h3><router-link to="/dynamicComp">Dynamic Component Example</router-link></h3>
    <h3><router-link to="/nestedroutes">Nested Routing Example</router-link></h3>
    <h3><router-link to="/testing">Few Tests Here !!!</router-link></h3>
    <h3><router-link to="/grid-view">Grid View Responsive Site !!!</router-link></h3>
    <h3><router-link to="/watch-vs-computed">Watch Vs. Computed</router-link></h3>
    <h3><router-link to="/drragable-div">Drag and Drop</router-link></h3>
    <h3><router-link to="/transitions">Transitions</router-link></h3>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
