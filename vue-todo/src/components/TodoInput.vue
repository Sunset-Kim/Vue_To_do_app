<template>
  <div class="inputBox shadow">
      <input ref="input" type="text" v-model="newTodoitem" v-on:keyup.enter="addTodo">
      <span v-on:click="addTodo" class="addContainer">
        <i class="fas fa-plus addBtn"></i>
      </span>
        <!-- use the modal component, pass in the prop -->
      <Modal v-if="showModal" @close="showModal = false">
        <!--
          you can use custom content here to overwrite
          default content
        -->
        <h3 slot="header">경고창!</h3>
        <p slot="body">입력값이 없습니다.</p>
        <p slot="footer">
          <button @click="showModal = false">종료</button>
        </p>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/modal.vue'

export default {
  data: function(){
    return {
      showModal: false,
      newTodoitem: '',
    }
  },
  components: {
    Modal : Modal,
  },
  methods:{
    addTodo: function () {
      if(this.newTodoitem !== '') {
        // this.$emit('이벤트 이름 작명','인자1','인자2'...)
        this.$store.commit('addOneItem', this.newTodoitem);
        this.clearInput();
      } else {
        this.$refs.input.blur();
        this.showModal = true;
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

