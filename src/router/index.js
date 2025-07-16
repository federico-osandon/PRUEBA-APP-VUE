import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import NotFound404 from '../pages/NotFound404.vue'
import ProductPage from '../pages/ProductPage.vue';
import CartsPage from '../pages/CartsPage.vue';


export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // Landing
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        // About
        {
            path: '/products/:pid',
            name: 'producto',
            component: ProductPage
        },
        {
            path: '/carts',
            name: 'carts',
            component: CartsPage,
        },

        // Not Found
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
            component: NotFound404
        },
  ],
});

export default router;
