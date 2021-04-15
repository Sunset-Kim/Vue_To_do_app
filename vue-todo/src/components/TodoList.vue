<template>
  <div>
      <ul>
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
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
  data: function() {
    return {
      todoItems: []
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
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem,index){
      console.log(this.todoItems[0].completed);
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
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