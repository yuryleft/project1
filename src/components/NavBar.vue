<template>
  <div class="navbar">
       <div class="navbar-logo"  @click="$router.push('/')">Vue 3 проект</div>
       <div class="navbar-btns">
           <my-button @click="$router.push('/posts')">Посты</my-button>
           <my-button @click="$router.push('/about')">О сайте</my-button>
           
       </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.navbar{
    height: 50px;
    background-color: #333;
    box-shadow: 2px 2px 4px grey;
    display: flex ;
    align-items: center;
    justify-content: space-evenly;
}
.navbar-logo{
    color: white;
    cursor: pointer;
}

</style>