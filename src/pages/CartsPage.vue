
<script setup>
import { useCounterStore } from '../store/counter'

const counterStore = useCounterStore()
</script>

<template>
    <div v-if="counterStore.cart.length > 0">
        <h2>Carrito</h2>
        <ul>
            <li v-for="item in counterStore.cart" :key="item.id">
                {{ item.title }} - Cantidad: {{ item.quantity }}
            </li>
        </ul>
    </div>
    <div v-else>
        <h2>El carrito está vacío</h2>
    </div>
</template>


<style scoped>
    h2 {
        color: #42b883;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        /* background-color: #f9f9f9; */
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 10px;
        margin-bottom: 10px;
    }

</style>