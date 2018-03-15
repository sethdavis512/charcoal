import About from './views/About.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'

export const routes = [
    {
        path: '/about',
        component: About
    },
    {
        path: '/',
        component: Home,
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
