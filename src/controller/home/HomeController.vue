<template>
  <div>
    <div data-reactroot="" class="view container container-fill container-column">
      <div class="views">
        <div class="view">
          <div class="container-scrollable view-bg">
            <div class="mb-infor border-b">
              <div class="ui-row-flex ui-grid-flex box-align mb-infor">
                <div class="ui-col ui-member-img"><img src="http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3qFZxiaSxTia4eXpk73lE6GoBib73uV05WRn9e3TOYgeD3FMRojPdT04jG5bfMiclEtEiaq9UUeHxN5Q/0"></div>
                <div class="ui-col ui-col-1 ui-grid-flex-info user-infor">
                  <h1></h1>
                  <div><span>{{ msg }}/{{HomeGetterCheckoutStatus}}</span> (次)
                  </div>
                </div>
              </div>
              <div class="pn-bd box-align">
                <div class="pn-num"><span>0</span></div>
              </div>
  
              <div class="pn-tomanth">
                <div class="ui-row-flex ui-grid-flex-list pn-munber">
                  <div class="ui-col ui-col-1 ">
                    本月推广
                    <span>(次)</span></div>
                  <div class="ui-col ui-col-1 ui-text-right pn-tot">
                    <div>2</div><span>数据结算为前一天</span></div>
                </div>
              </div>
            </div>
            <TextDiv ref="profile"></TextDiv>
            <div>
              <h1>推广记录</h1>
            </div>
            <div class="pn-list">
              <LinkLi :key="item.id" v-for="item in menuLists" :router="item.router" @greet="incrementTotal">{{item.info | text}}</LinkLi>
            </div>
  
            <div>
              <button display="block" type="danger" class="ui-btn ui-btn-danger ui-btn-block">退出</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang = "ts">
  import Vue from 'vue';
  import vuex from 'vuex';
  import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
import { Component, Inject, Model, Prop, Watch } from 'vue-property-decorator'
 /* import Component from 'vue-class-component';
  import { createDecorator } from 'vue-class-component'*/
  import LinkLi from './LinkLi.vue';
  import TextDiv from './TextDiv.vue';
 
  @Component({
    name: 'HomeController',
    components: {
      LinkLi,
      TextDiv
    }
  })
  
  export default class HomeController extends Vue {
 
    /*computed: {
        
      }*/
  @Getter('HomeGetterCheckoutStatus') getterFoo
    msg: number = 123;
    name:string = '小明'
    menuLists = [{
      info: '推广记录',
      router: `/about`
    }]
  
    incrementTotal(router) {
  
      this.$router.push(router)
  
    }
    beforeCreate() {
      //console.log('实例已经创建,msg变量还未渲染到模板')
    }
  
    created() {
      console.log(this.getterFoo)
      //console.log('实例已经创建,msg变量还未渲染到模板');
    }
    // lifecycle hook
    mounted() {
      //this.msg = 222
      //console.log(this.$store)
  
      //console.log(this.$store.state.HomeMutation.checkoutStatus)
      //console.log(this.$store.getters.checkoutStatus)
        //this.$store.dispatch('checkout', this.msg, '111')
      /**
        通过refs 直接指向子组件
       */
      //this.$refs.profile.greet()
      //console.log(this.$children)
      // console.log('已经挂载到模板上:msg变量渲染到模板');
    }
    
    get random () {
    return Math.random()
  }
  
    // computed
    // get computedMsg() {
    //   //return this.$store.getters.HomeGetterCheckoutStatus
    //   //console.log('aa')
    //   //调用方式一
    //   //console.log(this.$store.getters)
    //   //console.log( this.$store.getters.count)
    //   //return this.$store.getters.
    //   //return 'computed ' + this.$store.state.HomeMutation.checkoutStatus
    // }
  
   
  
  
    updated() {
      // console.log('实例更新啦')
    }
  
    destroyed() {
      // console.log('销毁啦')
    }
  
  
  
    // method
    greet() {
      //alert('greeting: ' + this.msg)
    }
  }
</script>