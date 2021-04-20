import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import todoApp from './modules/todoApp'
export const store = new Vuex.Store({
    modules: {
        todoApp
    }
})