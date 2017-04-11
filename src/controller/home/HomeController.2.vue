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
                  <div><span>{{ msg }}/{{checkoutStatus}}</span> (次)
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
            <div>
              <h1>推广记录</h1>
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
  import {
    mapGetters,
    mapState,
    mapActions
  } from 'vuex';
  export default {
    name: 'HomeController',
    computed: {
      ...mapGetters({
        checkoutStatus: 'checkoutStatus'
      }),
      ...mapState({
          // 箭头函数可使代码更简练
          msg: (state) => {
            return state.HomeMutation.msg
          }
        }
      },
      
      mounted() {
        this.$http.get('http://localhost:8000/v1/posts/2').then(response => {
          console.log()
          // success callback
        }, response => {
          // error callback
        });
      }
</script>