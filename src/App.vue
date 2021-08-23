<template>
<NavBar></NavBar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
  components:{
    NavBar
  }
}
</script>

<style>
.app{
  padding: 20px;
}
</style>