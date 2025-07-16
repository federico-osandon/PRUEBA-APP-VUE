<script setup>
    import { RouterView } from 'vue-router';
import NavBar from './components/ui/NavBar.vue'
   
</script>

<template>
    <main>
        <NavBar />
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <RouterView />        
    </main>
    <!-- <HomePage /> -->
</template>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>
