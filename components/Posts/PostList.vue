<template>
    <section class="post-list">
        <PostPreview id="1" thumbnail="https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg"
        title="La Belly" previewText="Dacan's speciality"/>
        <PostPreview id="2" thumbnail="https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg"
        title="Belly King" previewText="Dacan's favourite"/>
        <PostPreview id="3" thumbnail="https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg"
        title="Belly magic" previewText="Dacan's dessert"/>
    </section>
</template>

<script>
import PostPreview from './PostPreview.vue'
export default {
    components:{
        PostPreview
    }
    
}
</script>


<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>