<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:하위컴포넌트에서 발생시킨 이벤트이름 ="현재컴포넌트의 메소드명" -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:complete="toggleComplete"></TodoList>
    <TodoFooter v-on:todoAllclear="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';
import TodoFooter from './components/TodoFooter.vue';

 
export default {
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
        let obj = { completed: false, item: todoitem };
        // localStorage.setItem(this.newTodoitem, obj); 객체는 저장이 안된다.
        localStorage.setItem(todoitem, JSON.stringify(obj));
        this.todoItems.push(obj);
      }
      
    },
    removeOneItem: function(todoItem,index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    toggleComplete: function(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 데이터를 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAll: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created: function() {
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
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader': TodoHeader,
    'TodoList': TodoList,
    'TodoInput': TodoInput,
    'TodoFooter': TodoFooter,
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