<script setup>
    defineProps({
        products: {
            type: Array,
            required: true
        }
    })
</script>

<template>
    <div class="card-list">
        <div v-for="product in products" :key="product.id" class="card">
            <!-- <img :src="product.image" :alt="product.title" /> -->
            <div class="card-body">
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }}</p>
                <p>Price: ${{ product.price }}</p>
                <p>Stock: {{ product.stock }}</p>
                <p>Category: {{ product.category }}</p>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .card-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        width: 100%;
    }
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 10px;
        text-align: center;
        width: 20%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s;
        color: black;
    }
    .card:hover {
        transform: translateY(-5px);
    }
    .card-body {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .card-body h3 {
        margin: 0;
        padding: 0;
    }
    .card-body p {
        margin: 0;
        padding: 0;
    }
    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 10px;
    }
</style>