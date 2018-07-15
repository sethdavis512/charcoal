import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';

import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/sign-up',
        component: SignUp
    }
  ],
});
