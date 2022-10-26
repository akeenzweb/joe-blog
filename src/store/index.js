import { createStore } from 'vuex'

export default createStore({
  state: {
    home: true,
    party: false,
    defaulters: false,
    blog: {}
  },
  getters: {
  },
  mutations: {
    selectBlog (state, blog) {
      state.blog = blog
    }
  },
  actions: {
  },
  modules: {
  }
})
