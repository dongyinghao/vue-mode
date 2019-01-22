import Vue from 'vue'
import Vuex from 'vuex'
import system from './modules/system'
import cache from './modules/cache'
import account from './modules/account'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    system,
    account,
    cache
  },
  strict: debug
})
