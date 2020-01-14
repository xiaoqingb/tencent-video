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
            }
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
