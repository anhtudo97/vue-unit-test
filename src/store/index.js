import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = {
  state: () => ({
    count: 0,
  }),
  getters: {
    count: state => state.count
  },
  mutations: {
    SET_COUNT: (state, count) => {
      state.count = count
    },
  },
  actions: {
    increment: ({ commit, state }) => commit('SET_COUNT', state.count + 1),
    decrement: ({ commit, state }) => commit('SET_COUNT', state.count - 1),
  },
}
