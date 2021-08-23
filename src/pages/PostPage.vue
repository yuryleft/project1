<template>
<div>
  <h2>Страница с постами</h2>
  
 <div class="appbtns">
   <my-button @click="showDialoge">Создать пост</my-button>
    <my-input v-model="searchQuerry" placeholder="Поиск..."/>
   <my-select
    v-model="selectedSort" :options="sortOptions"
    />
 </div>

  <my-dialoge v-model:show="dialogeVisible">
      <post-form
    @create="createPost"/>
  </my-dialoge>
 
   <post-list 
   :posts="sortedAndSearchedPosts"
   @remove="removePost"/>
   
   <div class="page-wrapper">
     <div
      v-for="pageNum in totalPages" 
      :key="pageNum"
      class="page"
      :class="{
        'active-page': page === pageNum
      }"
      @click="changePage(pageNum)"
      >
      {{pageNum}}
      </div>

   </div>

</div>

</template>



<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import axios from 'axios';
export default {
  components:{
    PostForm,
    PostList
  },
  data() {
    return{
     posts:[],
       dialogeVisible:false,
       selectedSort:"",
       searchQuerry:'', 
       page:1,
       limit:10,
       totalPages:0,
       sortOptions:[
         {value:'title', name:'По названию'},
          {value:'body', name:'По Описанию'}
       ]
    }
  },
  methods:{
    createPost(post){
      this.posts.push(post);
      this.dialogeVisible = false;
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialoge(){
      this.dialogeVisible=true;
    },
    changePage(pageNum){
     this.page=pageNum 
    },
    async fetchPosts(){
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
          params:{
            _page: this.page,
            _limit:this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit);
        this.posts = response.data;
      }
      catch (e) {
          alert('Ошибка');
        }
    }
  },
  mounted(){
    this.fetchPosts();
  },
  computed:{
    sortedPosts(){
      return[ ...this.posts].sort((post1,post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuerry.toLowerCase()))
    }
  },
  watch:{
    page(){
      this.fetchPosts()
    }
    },
  }

</script>

<style scoped>

.appbtns{
  display: flex;
  justify-content: space-between;
}
.page-wrapper{
display: flex;
margin: 10px;
justify-content: center;

}
.page{
  border: 1px solid grey;
  padding: 10px;
  cursor: pointer;
}
.active-page{
  border: 1px solid rgb(0, 0, 0);
  background: rgb(158, 158, 158);
}
</style>
