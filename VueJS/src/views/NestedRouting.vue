<template>
  <div id="nestedRoutingExample">
    <h1> This is the Nested Routing page</h1>
    <router-link to="/nestedroutes/profile">Profile Page | </router-link>
    <router-link to="/nestedroutes/edit">Edit Page</router-link>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
