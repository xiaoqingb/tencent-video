import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                // 例子
                path: '/',
                name: 'Select',
                component: () => import('@/views/Home/Select.vue')
            },
            {
                // 例子
                path: '/select',
                name: 'Select',
                component: () => import('@/views/Home/Select.vue')
            }
        ]
    },
    {
        name: 'Play',
        path: '/play',
        component: () => import('@/views/Play.vue')
    },
    {
        name: 'Search',
        path: '/search',
        component: () => import('@/views/Search.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
