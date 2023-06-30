import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sign from '../views/Sign.vue'
import Login from '../views/Login.vue'
import Header from '../views/Header.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {requiresAuth: true},
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: Sign
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  { 
    path: '/header',
    name: 'header',
    component: Header
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach( (to,from,next) => {
  let routerAuthCheck = true;
      if (to.matched.some(record => record.meta.requiresAuth)){
          if(routerAuthCheck){
              next();
          }
          else{
              router.replace('/')
          }
      }
      else{
        next();
      }
});

export default router
