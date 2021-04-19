<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:하위컴포넌트에서 발생시킨 이벤트이름 ="현재컴포넌트의 메소드명" -->
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
  data: function(){
    return {
      todoItems: []
    }
  },
  methods: {
    // clearAll: function() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
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