<template>
  <div class="posts-page">
      <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '../../components/Posts/PostList.vue';
export default {
  components:{
    PostList
  },
  asyncData(context){
    return new Promise((resolve,reject) => {
      setTimeout(()=> {
        resolve({
          loadedPosts: [
        {
          id:'1',
          title:'La Belly',
          previewText:'Dacan speciality',
          thumbnail:'https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg'
        },
        {
          id:'2',
          title:'Belly King',
          previewText:'Dacan favourite burger',
          thumbnail:'https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg'
        },
        
      ]
        });
      },1000);
    }).then(data => {
      return data
    }).catch(e=> {
      context.error(e);
    })
  }
  
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

