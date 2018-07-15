// STATE ===============
const state = {
    count: 0
}

// GETTERS ===============
const getters = {
    count: state => state.count
}

// ACTIONS ===============
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement')
}

// MUTATIONS ===============
const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    }
}

export default {
    actions,
    getters,
    mutations,
    state
}
