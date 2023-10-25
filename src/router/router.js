
import { createRouter, createWebHistory } from "vue-router";
import ProductLists from "../components/ProductLists.vue"
import Product from "../components/Product.vue"
import NavBar from "../components/NavBar.vue"
import Carousel from "../components/Carousel.vue"
import AddToCart from "../components/AddToCart.vue"

const routes = [
    {path:"/",
        components:{default:Carousel, navbar: NavBar},
        name:"/"
    },
    {path:"/productlists", 
        components:{default:ProductLists, navbar:NavBar},
        name:"/productlists"
    },
    {
        path:"/product/:id", components:{default:Product, navbar:NavBar},
        name:"product"
    },
   
]


const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router