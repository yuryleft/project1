<template>
   <div class="post" >
       <div>
      <div>Название - {{post.title}}</div>
      <div>Описание - {{post.body}}</div>
      </div>
      <div class="post_btn">
           <my-button @click="$router.push(`/posts/${post.id}`)">Открыть пост</my-button>
          <my-button @click="$emit('remove',post)">Удалить</my-button>
      </div>
    </div>
</template>

<script>
export default {
props:{
    post:{
        type:Object,
        required:true,
    }
  }
}
</script>

<style scoped>
.post{
padding: 10px;
border: 2px solid grey;
margin: 10px 0;
display: flex;
align-items: center;
justify-content: space-between;
}
.post_btn{
    display: flex;
}
</style>