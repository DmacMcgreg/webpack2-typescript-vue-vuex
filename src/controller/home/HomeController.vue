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
                  <div><span>{{msg}}</span> (次)
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
            <div class="pn-list">
              <LinkLi :key="item.id" v-for="item in menuLists" :message="item.router" @greet="incrementTotal">{{item.info | Text}}</LinkLi>
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
  import Component from 'vue-class-component';
  import LinkLi from './LinkLi.vue';
  import TextDiv from './TextDiv.vue';
  @Component({
      name: 'HomeController',
      components:{LinkLi,TextDiv}
    }
  )
 
  export default class HomeController extends Vue {
    msg:string ="你好啊"
    menuLists = [{
        info: '推广记录',
        router: `/my/promotionRecord`
      },
      {
        info: '推广新用户',
        router: `/my/toPromote`
      },
      {
        info: '添加成员',
        router: `/my/addMembers`
      },
      {
        info: '我的成员',
        router: `/my/members/${this.user_id}`
      }
    ]
    
    incrementTotal(){
      console.log('子组件触发调用')
    }
    beforeCreate() {
      //console.log('实例已经创建,msg变量还未渲染到模板')
    }
  
    created() {
      //console.log('实例已经创建,msg变量还未渲染到模板');
    }
    // lifecycle hook
    mounted() {
      /*setTimeout(()=>{
        console.log('触发')
        this.msg ='Fuck11'
      },3000)*/
      //console.log(this.$children)
      //console.log(this.$data.msg)
      /**
        通过refs 直接指向子组件
       */
      //this.$refs.profile.greet()
      //console.log(this.$children)
      //console.log('已经挂载到模板上:msg变量渲染到模板');
    }
  
    updated() {
     // console.log('实例更新啦')
    }
  
    destroyed() {
     // console.log('销毁啦')
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