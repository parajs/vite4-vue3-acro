import Layout from '@/layout/index.vue';
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/home/Home.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/user/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/user/Login.vue')
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/circle',
                name: 'circle',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/circle/index.vue')
            },
        ]
    }
]

export default routes;
