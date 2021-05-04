

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Daca Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Belly King Blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJQ3nrnd6P7Rd18YsanEJStKDv165Ezxncg&usqp=CAU" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1aff1a', height: '5px' , duration: 5000 },
  


  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/date-filter.js',
    '~plugins/core-components.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://daca-blog-default-rtdb.firebaseio.com',
    fbAPIKey: 'AIzaSyCmwoDFVA-cwaMcN2jDv4oi2TqFaDxYp-c'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
