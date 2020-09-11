import Vue from 'vue'
import Vuex from 'vuex'

import { state, mutations } from './default'
import countries from './modules/countries'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        countries
    },
    
    state,
    mutations
})

export default store