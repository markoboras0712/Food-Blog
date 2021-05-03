<template>
  <div class="error-page">
    <h1>Url is not valid!</h1>
    <nuxt-link to="/">Back to Daca Food Posts</nuxt-link>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
