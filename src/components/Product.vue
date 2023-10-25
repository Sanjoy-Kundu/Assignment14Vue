<script setup>
import {ref, reactive, onBeforeMount} from "vue"
import {useRoute} from "vue-router"
import NavBar from "./NavBar.vue";
const route = useRoute()
const id = route.params.id
const productDetails = ref({});

onBeforeMount(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(data => {
        productDetails.value = data
    })
})
</script>
<template>
    <NavBar/>
    <div class="container">
        <h1>Product Details</h1>
            <div class="row">
                <div class="col">
                    <img :src="productDetails.thumbnail" class="img-fluid" alt="...">
                </div>
                <div class="col">
                    <table class="table table-bordered table-hover">
                        <tr>
                            <th>Name</th>
                            <td>{{ productDetails.title }}</td>
                        </tr>
                        <tr>
                            <th>Category</th>
                            <td>{{ productDetails.category }}</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>{{ productDetails.price }}$</td>
                        </tr>
                        <tr>
                            <th>Rating</th>
                            <td>{{ productDetails.rating }}$</td>
                        </tr>
                        <tr>
                            <th>Stock</th>
                            <td>{{ productDetails.stock }}</td>
                        </tr>
                        <tr>
                            <th>Brand</th>
                            <td>{{ productDetails.brand }}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{{ productDetails.description }}</td>
                        </tr>
                        <tr>
                            <th>Return</th>
                            <td><router-link to="/">Home</router-link></td>
                        </tr>
                        <tr>
                            <th>Add To Cart</th>
                            <td class="text-danger">Add to Cart</td>
                        </tr>
                        
                    </table>
                </div>
            </div>
    </div>
</template>