<template>
    <nav>
        <router-link to="/">ECOMMERCE</router-link>
        
        <router-link to="/carts">Carrito</router-link>

    </nav>
</template>

<script setup>

</script>

<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background-color: #42b883;
        color: white;
    }
    nav a {
        color: white;
        text-decoration: none;
        margin-right: 20px;
    }
    nav a:hover {
        text-decoration: underline;
   }

</style>