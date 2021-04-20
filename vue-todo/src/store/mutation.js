const addOneItem = (state, newTodoitem) => {
    console.log(state, newTodoitem);
    if(state.todoItems.some(element => element.item == newTodoitem)) {
        console.log('이미 그 할일은 입력되었어!')
        return
    } else {
        const obj = { completed: false, item: newTodoitem };
        localStorage.setItem(newTodoitem, JSON.stringify(obj));
        state.todoItems.push(obj);
    }
};
const removeOneItem = (state,obj) => {
    console.log(obj)
    localStorage.removeItem(obj.todoItem.item);
    state.todoItems.splice(obj.index,1);
};

const toggleComplete = (state, obj) => {
    console.log(state,obj);
    console.log(state.todoItems);
    state.todoItems[obj.index].completed = !state.todoItems[obj.index].completed;
    // 데이터를 갱신
    localStorage.removeItem(obj.todoItem.item);
    localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem));
}

const clearAll = (state) => {
    state.todoItems = [];
    localStorage.clear();
}

export { addOneItem, toggleComplete, removeOneItem, clearAll } 