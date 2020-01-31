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
                name: 'select',
                component: () => import('@/views/Home/Select.vue')
            },
            {
                // 例子
                path: '/select',
                name: 'Select',
                component: () => import('@/views/Home/Select.vue')
            },
            {
                // 例子
                path: '/movie',
                name: 'Movie',
                component: () => import('@/views/Home/Movie.vue')
            },
            {
                // 例子
                path: '/TV',
                name: 'TV',
                component: () => import('@/views/Home/TV.vue')
            },
            {
                // 例子
                path: '/Variety',
                name: 'Variety',
                component: () => import('@/views/Home/Variety.vue')
            },
            {
                // 例子
                path: '/Comic',
                name: 'Comic',
                component: () => import('@/views/Home/Comic.vue')
            },
            {
                // 例子
                path: '/Entertainment',
                name: 'Entertainment',
                component: () => import('@/views/Home/Entertainment.vue')
            },
            {
                // 例子
                path: '/Music',
                name: 'Music',
                component: () => import('@/views/Home/Music.vue')
            },
            {
                // 例子
                path: '/Game',
                name: 'Game',
                component: () => import('@/views/Home/Game.vue')
            },
            {
                // 例子
                path: '/Documentary',
                name: 'Documentary',
                component: () => import('@/views/Home/Documentary.vue')
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
        path: '/play',
        component: () => import('@/views/Search.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
