import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    beforeEach: (to, from, next) => {
      console.log("checkeing...")
      if (this.$store.getters.getLoginStatus == true) {
        console.log("checked...")
        next();
        return;
      }
    },
    component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router