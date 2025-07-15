<script setup>
    import { useCounterStore } from '../store/counter'

    const counterStore = useCounterStore()
    defineProps({
        product: {
            type: Object,
            required: true
        }
    })


</script>
<template>
    <div>
        <h2>Counter: {{ counterStore.count }}</h2>
        <button @click="counterStore.increment">+</button>
        <button @click="counterStore.decrement">-</button>
        <!-- botón para agregar el producto al carrito -->
        <button @click="counterStore.addToCart({...product, quantity: counterStore.count})">Agregar al carrito</button>
    </div>
</template>


<style>


</style>