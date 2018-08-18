import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'

import Login from '../views/Login'
import SignUp from '../views/SignUp'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/sign-up',
            component: SignUp
        }
    ]
})
