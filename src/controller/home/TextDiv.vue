<template>
  <div @click="greet">测试DIV</div>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  @Component({
    name: 'TextDiv'
  })
  export default class TextDiv extends Vue {
      greet(){
        console.log('测试子组件调用')
      }
      mounted() {
        /**
          通过$parent 触发父组件事件
         */
        //this.$parent.greet()
      }
  }
</script>