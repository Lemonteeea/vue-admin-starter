import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export enum RouteNames {
  Home = 'home',
  About = 'about',
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: MainLayout,
    children: [
      {
        path: '/home',
        name: RouteNames.Home,
        component: HomeView,
        meta: {
          title: 'Home',
          icon: 'ic:outline-home',
        },
      },
      {
        path: '/about',
        name: RouteNames.About,
        component: () => import('../views/AboutView.vue'),
        meta: {
          title: 'About',
          icon: 'ic:outline-info',
        },
      },
    ],
  },
]
