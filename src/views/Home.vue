<template>
  <div class="home">
    <h1>This is the first page</h1>
    <h3><router-link to="/profile">Routing Example</router-link></h3>
    <h3><router-link to="/dynamicComp">Dynamic Component Example</router-link></h3>
    <h3><router-link to="/nestedroutes">Nested Routing Example</router-link></h3>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>
