<template>
  <div class="ui-row-flex ui-grid-flex ui-border-b ui-arrowlink" @click="greet(message)">
    <div class="ui-col ui-col-1 ui-grid-flex-info dark-grey">
      <slot>请注意，这里可以自定义(支持html)</slot>
    </div>
  </div>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  @Component({
    name: 'LinkLi',
    props: {
      message: String
    }
  })
  export default class LinkLi extends Vue {
  
    beforeCreate() {
      //console.log('实例已经创建,msg变量还未渲染到模板')
    }
  
    created() {
      //console.log('实例已经创建,msg变量还未渲染到模板');
    }
    // lifecycle hook
    mounted() {
      //console.log('已经挂载到模板上:msg变量渲染到模板');
    }
  
    updated() {
      //console.log('实例更新啦')
    }
  
    destroyed() {
      //console.log('销毁啦')
    }
  
    // computed
    get computedMsg() {
      return 'computed ' + this.msg
    }
  
    text(){
      alert('我调用了子组件方法')
    }
    // method
    greet(type) {
      console.log(type);
      /***
        广播触发父事件
        */
      this.$emit('greet');
      //alert('greeting: ' + this.msg)
    }
  }
</script>