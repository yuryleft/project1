export const postModule = {
    state:() => ({
       posts:[],
       selectedSort:"",
       searchQuerry:'', 
       page:1,
       limit:10,
       totalPages:0,
       sortOptions:[
         {value:'title', name:'По названию'},
          {value:'body', name:'По Описанию'}
       ]
    }),
    getters:{
        sortedPosts(state){
            return[ ...state.posts].sort((post1,post2) => {
              return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            })
          },
          sortedAndSearchedPosts(state,getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(getters.searchQuerry.toLowerCase()))
          }
    },
    mutations:{
        setPosts(state, posts){
            state.posts = posts;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setPage(state, page) {
            state.page = page
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
    },
    actions:{
        async fetchPosts({state,commit}){
            try{
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                params:{
                  _page: state.page,
                  _limit:state.limit,
                }
              });
              commit('settotalPages',Math.ceil(response.headers['x-total-count']/state.limit));
              commit('setPosts', [... state.posts, ... response.data]);
            }
            catch (e) {
                alert('Ошибка');
              }
          }

    },
    
}