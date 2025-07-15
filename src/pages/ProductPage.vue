<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCounterStore } from '../store/counter'
import Counter from '../components/Counter.vue'

const product = ref(null)
const route = useRoute()
const { pid } = route.params
const counterStore = useCounterStore()

console.log(counterStore.count)


const fetchProduct = async (pid) => {
       try {
            const response = await fetch('/DATA/products.json')
            //    console.log('Response status:', response);
            if (!response.status === 200) {
                throw new Error('Network response was not ok')
            }
            const productData = await response.json();
            console.log('Products data:', productData.data);
            product.value = productData.data.find(product => product.id === parseInt(pid))
            console.log(product.value);
       } catch (error) {
           console.error('Error fetching products:', error);
       }
   }

    onMounted(async () => {
       await fetchProduct(pid);
        //  console.log('Products fetched:', products.value);
    });

</script>


<template>
    <div>
        

            <div v-if="product" class="card">
                <div>
                    <img :src="product.image" :alt="product.title" />

                </div>
                <div>
                    <h2>{{ product.title }}</h2>
                    <p>{{ product.description }}</p>
                    <p>Price: ${{ product.price }}</p>
                    <p>Stock: {{ product.stock }}</p>
                    <p>Category: {{ product.category }}</p>
                    <Counter :product="product" />
                </div>
            </div>
            <div v-else>
                <p>Loading...</p>
            </div>
   

    </div>
</template>

<style scoped>
    .product {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }
    img {
        width: 80%;
        height: 150px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 10px;
    }
    h2 {
        margin: 0;
        padding: 0;
    }
    p {
        margin: 0;
        padding: 0;
    }

    .card {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        min-height: 100vh;
    }
</style>
    