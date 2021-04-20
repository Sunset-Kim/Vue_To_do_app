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

export const store = new Vuex.Store({
    state: {
        headerText: `Todo it! Store`,
        todoItems: storage.fetch(),
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        }
    },
    mutations: {
        addOneItem(state, newTodoitem) {
            console.log(state, newTodoitem);
            if(state.todoItems.some(element => element.item == newTodoitem)) {
                console.log('이미 그 할일은 입력되었어!')
                return
            } else {
                const obj = { completed: false, item: newTodoitem };
                localStorage.setItem(newTodoitem, JSON.stringify(obj));
                state.todoItems.push(obj);
            }
        },
        removeOneItem(state,obj){
            console.log(obj)
            localStorage.removeItem(obj.todoItem.item);
            state.todoItems.splice(obj.index,1);
        },
        toggleComplete(state, obj) {
            console.log(state,obj);
            console.log(state.todoItems);
            state.todoItems[obj.index].completed = !state.todoItems[obj.index].completed;
            // 데이터를 갱신
            localStorage.removeItem(obj.todoItem.item);
            localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem));
          },
        clearAll(state) {
            state.todoItems = [];
            localStorage.clear();
        }
    }
})