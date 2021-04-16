<template>
  <div>
      <ul>
        <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
          <i v-on:click="toggleComplete(todoItem,index)" v-bind:class="{checkBtnCompleted: todoItem.completed}" class="checkBtn fas fa-check"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
          <span v-on:click="removeTodo(todoItem, index)" class="removeBtn">
            <i class="fas fa-trash-alt"></i>
          </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeTodo: function(todoItem, index) {
      this.$emit('removeItem', todoItem, index)
      
    },
    toggleComplete: function(todoItem,index){
      this.$emit('complete',todoItem, index);
    }
  },
}

</script>

<style scoped>

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 .9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left : auto;
  color: #de4343;
  cursor: pointer;
}

</style>