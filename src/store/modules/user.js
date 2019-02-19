import { CLEAR_USER, SET_USER_EMAIL } from './mutationTypes';

const state = {
    email: ''
}

const getters = {
    email: state => state.email,
}

const actions = {
    setUserEmail: ({ commit }, email) => {
        commit(SET_USER_EMAIL, email);
    },
    clearUser: ({ commit }) => {
        commit(CLEAR_USER);
    }
}

const mutations = {
    [CLEAR_USER]() {
        state.email = '';
    },
    [SET_USER_EMAIL](state, email) {
        state.email = email;
    }
}

export default {
    actions,
    getters,
    mutations,
    state
}
