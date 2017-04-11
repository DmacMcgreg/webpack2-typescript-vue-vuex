<template>
  <div>
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}11</p>
    <div>
      {{searchKey}}
    </div>
  </div>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import { mapState, mapActions } from 'vuex';
  export default {
    name:'PromoteController',
    data() {
      return {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
      }
    },
  computed: mapState({
    // 箭头函数可使代码更简练
    searchKey: (state)=>{
      return state.PromoteMutation.searchKey
    }
  }),
    mounted(){
      //console.log(this.$store.state)
      // setTimeout(()=>{
      //   this.question = 'fuck'
      // },2000)
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