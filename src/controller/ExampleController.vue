<template>
  <div>Hello,Word</div>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  @Component
  export default class ExampleController extends Vue {
    msg = 123
  
    // use prop values for initial data
    helloMsg = 'Hello, ' + this.propMessage
    
    beforeCreate(){
      console.log('实例已经创建,msg变量还未渲染到模板')
    }

    created(){
      console.log('实例已经创建,msg变量还未渲染到模板')
    }
    // lifecycle hook
    mounted() {
      console.log('已经挂载到模板上:msg变量渲染到模板')
      //this.greet()
    }
    
    updated(){
      console.log('实例更新啦')   
    }

    destroyed(){
       console.log('销毁啦')
    }

    // computed
    get computedMsg() {
      return 'computed ' + this.msg
    }
  
    // method
    greet() {
      alert('greeting: ' + this.msg)
    }
  }
</script>