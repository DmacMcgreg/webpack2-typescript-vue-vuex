<template>
  <div>
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script lang = "ts">
  import Vue from 'vue';
  
  export default {
    data() {
      return {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
      }
    },
    mounted(){
      setTimeout(()=>{
        this.question = 'fuck'
      },2000)
    },
    watch: {
      question(newQuestion) {
        console.log(newQuestion)
        this.answer = newQuestion
        //this.selFilm = this.getDataById(this.filmLists, this.itemId)
      }
    }
  }
</script>