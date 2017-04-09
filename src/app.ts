import Vue from 'vue';
import {App,router} from './routers';
import '../www/styles/less/app.less';
import './controller/home/content.css';
import * as filters from './filters/index';

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
