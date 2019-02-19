import { DECREMENT, INCREMENT } from './mutationTypes'

const state = {
    count: 0
}

const getters = {
    count: state => state.count
}

const actions = {
    increment: ({ commit }) => commit(INCREMENT),
    decrement: ({ commit }) => commit(DECREMENT)
}

const mutations = {
    [INCREMENT](state) {
        state.count++
    },
    [DECREMENT](state) {
        state.count--
    }
}

export default {
    actions,
    getters,
    mutations,
    state
}
