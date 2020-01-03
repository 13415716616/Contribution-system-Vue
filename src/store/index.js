import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import contribution from './modules/contribution'

// default router permission control
import permission from './modules/async-router'

// dynamic router permission control (Experimental)
// import permission from './modules/async-router'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    contribution
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters
})
