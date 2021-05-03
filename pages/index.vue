<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get best food news!</h1>
    </section>
    <section class="featured-posts">
       <PostPreview id="1" thumbnail="https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg"
        title="La Belly" previewText="Dacan's speciality"/>
        <PostPreview id="2" thumbnail="https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg"
        title="Belly King" previewText="Dacan's favourite"/>
        <PostPreview id="3" thumbnail="https://img.freepik.com/free-psd/top-view-fast-food-black-background-mock-up_23-2148321326.jpg?size=626&ext=jpg"
        title="Belly magic" previewText="Dacan's dessert"/>
    </section>
  </div>
</template>

<script>
import PostPreview from '../components/Posts/PostPreview.vue'
export default {
  components: {
    PostPreview
  }
  
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

