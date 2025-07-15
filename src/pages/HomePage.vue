<script setup>
    import { onMounted, ref } from 'vue';
import List from '../components/List.vue';

   const products = ref([]);

   const fetchProducts = async () => {
       try {
           const response = await fetch('DATA/products.json')
        //    console.log('Response status:', response);
           if (!response.status === 200) {
               throw new Error('Network response was not ok')
           }
           const productsData = await response.json();
              console.log('Products data:', productsData.data);
           products.value = productsData.data;
       } catch (error) {
           console.error('Error fetching products:', error);
       }
   };

   onMounted(async () => {
       await fetchProducts();
        //  console.log('Products fetched:', products.value);
   });


</script>
<template>
    
        <h1>Welcome to the Home Page</h1>
        <List :products="products" />
   
</template>
<style scoped>
    main {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        min-height: 100vh;
    }
    .home-page {
        text-align: center;
        margin-top: 20px;
    }
    h1 {
        color: #42b883;
    }
    p {
        color: #35495e;
    }
</style>
