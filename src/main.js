import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import axios from 'axios'

import { routes } from './routes'
import { store } from './store/store';

// Convenience item - this.$http
Vue.prototype.$http = axios
Vue.use(Router)

// Setting up routes
const router = new Router({
    routes,
    mode: 'history'
})

// Instantiation
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})