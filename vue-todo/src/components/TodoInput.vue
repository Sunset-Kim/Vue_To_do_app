<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoitem" v-on:keyup.enter="addTodo">
      <span v-on:click="addTodo" class="addContainer">
        <i class="fas fa-plus addBtn"></i>
      </span>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      newTodoitem: '',
    }
  },
  methods:{
    addTodo: function () {
      if(this.newTodoitem !== '') {
        // this.$emit('이벤트 이름 작명','인자1','인자2'...)
        this.$emit('addTodoItem',this.newTodoitem);
        this.clearInput();
      }
      
    },
    clearInput: function() {
      this.newTodoitem = '';
    },
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

}
.addBtn {
  color: white;
  vertical-align: middle;
}

</style>

