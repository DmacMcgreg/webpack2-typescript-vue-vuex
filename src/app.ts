import Vue from 'vue';
import {App,router} from './routers';
import '../www/styles/less/app.less';
import './controller/home/content.css';
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
