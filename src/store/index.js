import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'

import systemConfig from './modules/config'
import tagsView from './modules/tagsView'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        systemConfig,
        tagsView,
    },
    mutations,
    getters
})
