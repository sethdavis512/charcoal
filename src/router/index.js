import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'

import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: SignUp
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    const currentUser = store.getters.email;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) {
        next('login');
    } else {
        next();
    }
});

export default router;