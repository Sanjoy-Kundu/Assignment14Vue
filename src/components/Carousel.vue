<script setup>
import {ref, reactive, onBeforeMount} from "vue"
import NavBar from './NavBar.vue';
import {useRoute} from "vue-router"
const route = useRoute();
const products = ref({})

onBeforeMount(()=>{
  fetch('https://dummyjson.com/products?limits=12')
.then(res => res.json())
.then(data =>{products.value = data.products})
})
</script>
<template>
    <NavBar/>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1681405203174-240c946cf06e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXIlMjBoZCUyMGltYWdlfGVufDB8fDB8fHww" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1625011165987-9874f85ed5cb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyJTIwaGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1619996801482-c85cade3dc28?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyJTIwaGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="container">
        <h2>Our Latest Product</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">

  <div class="col" v-for="product in products" :key="product.id">
    <div class="card h-100">
      <img  :src="product.thumbnail" class="img-fluid" style="width:300px; height: 300px;" alt="...">
      <div class="card-body">
        <h4 class="card-title">Name:{{ product.title }}</h4>
        <h5>Price: {{ product.price }}$</h5>
        <h5>Brand: {{ product.brand }}</h5>
        <p class="card-text">Des: {{ product.description }}</p>
        <div class="btn">
           <p> <router-link :to="{name:'product', params:{id:product.id}}"><button class="btn btn-primary">Details</button></router-link></p>
            <button class="btn btn-danger">Add To Cart</button>
        </div>
        
        
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<style scoped>
.btn{
    display: flex;
    justify-content: space-between;
}
</style>