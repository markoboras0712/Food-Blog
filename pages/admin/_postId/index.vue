<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>



<script>
import AdminPostForm from '../../../components/Admin/AdminPostForm.vue';
export default {
    components:{
        AdminPostForm
    },
    data(){
        return {
            loadedPost:{
            author:'Davor',
            title:'Stajcer',
            content:'My La Belly sandwich',
            thumbnailLink: 'https://e7.pngegg.com/pngimages/107/673/png-clipart-hamburger-barbecue-cheeseburger-barbecue-food-cheeseburger-thumbnail.png'
        }
        }
        
    }
    
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>