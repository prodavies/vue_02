import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Signup from '../views/SignUp.vue';
import Success from '../views/LoginSuccess.vue';

Vue.use(VueRouter);


const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/login',
      name: 'Login',
     component: Login,
      meta: {
        public: true,  // Allow access to even if not logged in
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  })
  
  export default router