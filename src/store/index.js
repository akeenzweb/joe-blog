import { createStore } from 'vuex'

export default createStore({
  state: {
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
