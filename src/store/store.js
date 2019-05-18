import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import getters from './getter'
import actions from './actions'


Vue.use(Vuex)

//save data in there
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

export default store