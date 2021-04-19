<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';
import TodoFooter from './components/TodoFooter.vue';

 
export default {
<<<<<<< Updated upstream
=======
  data: function(){
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoitem){
      if(this.todoItems.some(element => element.item == todoitem)) {
        console.log('이미 그 할일은 입력되었어!')
        return
      } else {
        const obj = { completed: false, item: todoitem };
        // localStorage.setItem(this.newTodoitem, obj); 객체는 저장이 안된다.
        localStorage.setItem(todoitem, JSON.stringify(obj));
        this.todoItems.push(obj);
      }
      
    },
    removeOneItem(todoItem,index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    toggleComplete(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 데이터를 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          console.log(localStorage.getItem(localStorage.key(i)));
          console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));

          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // this.todoItems.push(localStorage.key(i).item);
        }
      }
    }
  },
>>>>>>> Stashed changes
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter,
  }
}
</script>

<style>
  body {
    text-align: center;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,.03);
  }
</style>