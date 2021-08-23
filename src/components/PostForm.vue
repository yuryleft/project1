<template>
   <form @submit.prevent> 
      <h3>Создать пост</h3>
      <my-input 
        v-model="post.title"
        type="text"
        placeholder="Название"/>

      <my-input 
        v-model="post.body"
        type="text"
        placeholder="Описание"/>
      <my-button 
      style="align-self: center"
       @click="createPost">
       Добавить пост
       </my-button >
       </form>
</template>

<script>
export default {
    data(){
        return{
             post:{
                title:'',
                body:''
            }
        }
    },
    methods:{
        createPost(){
        this.post.id =Date.now();
        this.$emit('create',this.post)
            this.post = {
                title:'',
                body:''
            }
        }
    }

}
</script>

<style scoped>
.post{
padding: 10px;
border: 2px solid grey;
margin: 10px 0;
}

form{
  display: flex;
  flex-direction: column;
}

</style>