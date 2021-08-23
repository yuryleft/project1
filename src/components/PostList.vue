<template>
<div v-if="posts.length > 0">
    <h3>Список </h3>
    <transition-group name="post-list">
   <PostItem 
    v-for="post in posts"
     :key="post.id"
     :post="post"
      @remove="$emit('remove',post)"/>
      </transition-group>
</div>
<div v-else>
    <h3>Список пуст</h3>
</div>


</template>

<script>
import PostItem from './PostItem.vue'
export default {
    components:{
        PostItem
    },
    props:{
        posts:{
            type:Array,
            required:true,
        }
    }
}
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.35s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.34s ease;
}
</style>