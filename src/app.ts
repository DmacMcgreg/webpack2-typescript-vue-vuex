import Vue from 'vue';
import {App,router} from './routers';
import '../www/styles/less/app.less';
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
