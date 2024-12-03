import { createRouter, createWebHistory } from 'vue-router'
import ProductList from './components/ProductList.vue'
import CatagoryList from './components/CatagoryList.vue'
import ProductDetail from './components/ProductDetail.vue'
import CartList from './components/CartList.vue'
const routes = [
    {
        path: '/',
        name: 'Default',
        component: ProductList,
    },
    {
        path: '/products', // khi chạy bài tự động hiển thị component ProductList
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/catagory', // nếu url của web là /catagory thì sẽ chuyển sang component CatagoryList
        name: 'CatagoryList',
        component: CatagoryList
    },
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        props: true,
    },
    {
        path: '/cart',
        name: 'CartList',
        component: CartList,
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})