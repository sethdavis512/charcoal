import Vue from 'vue'
import Vuex from 'vuex'

import counter from './modules/counter'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        counter,
        user
    }
})
