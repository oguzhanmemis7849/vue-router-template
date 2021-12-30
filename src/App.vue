<template>  
    <router-link to="/" active-class="active">
      Home
    </router-link>
    <router-link to="/about" active-class="active">
      About
    </router-link>
    <router-link to="/details/123" active-class="active">
      Details
    </router-link>
  <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>
  .active{
    color: red;
  }
</style>
