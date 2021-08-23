<template>
  <button class="btn">
   <slot></slot>
  </button>
</template>

<script>
export default {
name:'my-button'
}
</script>

<style scoped>
.btn{
  width: 100px;
  height: 40px;
  background-color:white ;
  border: 1px solid grey;
  cursor: pointer;
}
</style>

