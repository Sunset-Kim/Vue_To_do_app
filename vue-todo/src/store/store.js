import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
    fetch() {
        const arr = [];
            if (localStorage.length > 0) {
              for (let i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                  // this.todoItems.push(localStorage.key(i).item);
                }
              }
            }
        return arr;
    }
};

import * as getters from './getters'
import * as mutations from './mutation'

export const store = new Vuex.Store({
    state: {
        headerText: `Todo it! Store`,
        todoItems: storage.fetch(),
    },
    getters: getters,
    mutations: mutations,
})