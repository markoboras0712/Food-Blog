<template>
<div class="body">
<div class="about-section">
  <h1 class="bg-text">Our Cooking Team</h1>
</div>

<h2 style="text-align:center">Chefs</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="https://3ro88z1j1d6h4tqqcwxbpomb-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/Chef-Mike-Massanutten-Updated-300x300.jpg" alt="Jane" style="width:100%;">
      <div class="container">
        <h2>Chef Mike</h2>
        <p class="title">Hamburger master</p>
        <p>Belly King</p>
        <p>mike@labelly.com</p>
        <a target="_blank" href="https://www.tasteofblueridge.com/food-drink/chefs/chef-michael-ritenour/" class="button">Contact</a>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="http://thethoughtpotato.com/wp-content/uploads/White-Hibachi-Chef-300x300.jpg" alt="Mike" style="width:100%">
      <div class="container">
        <h2>Chef Mike</h2>
        <p class="title">Chicken Specialist</p>
        <p>La Belly</p>
        <p>mike@labelly.com</p>
        <a target="_blank" href="http://thethoughtpotato.com/family-stuck-with-white-hibachi-chef/" class="button">Contact</a>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://serviaboston.com/wp-content/uploads/2020/10/SERVIA_BRIAN-SAMUELS-PHOTOGRAPHY_SEPTEMBER-2020-0686-EDITED-300x300.jpg" alt="John" style="width:100%">
      <div class="container">
        <h2>Chef Claudio</h2>
        <p class="title">Pizza master</p>
        <p>Italian pizza</p>
        <p>claudio@labelly.com</p>
          <a target="_blank" href="https://serviaboston.com/our-team/" class="button">Contact</a>
      </div>
    </div>
  </div>
</div>
    
</div>
</template>

<style scoped>

.about-section{
  box-sizing: border-box;
  background-image: url('https://www.freewpheaders.com/wp-content/gallery/food-gallery/italian-pizza-web-header.jpg');
  background-position: center;
  background-size: cover;
  height: 400px;
}
.bg-text{
  color: white;
  text-align: left;
}
body {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 31.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>
