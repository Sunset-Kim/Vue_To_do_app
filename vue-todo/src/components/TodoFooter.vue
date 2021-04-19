<template>
  <div class="clearAllContainer">
    <span v-on:click="clearAll" class="clearAllBtn">Clear All</span>
    
  </div>
</template>

<script>
export default {
  methods: {
<<<<<<< Updated upstream
    clearAll: function() {
      console.log('안녕');
      localStorage.clear();
=======
    clearAll(){
      this.$emit('todoAllclear')
>>>>>>> Stashed changes
    }
  }
}
</script>

<style scoped>
  .clearAllContainer{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background: white;
    border-radius: 5px;
    margin: 0 auto;
    cursor: pointer;

  }
  .clearAllBtn {
    color: #e20303;
    display: block;
  }
</style>