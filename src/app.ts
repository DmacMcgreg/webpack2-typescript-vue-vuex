import Vue from 'vue';
import {App,router} from './routers';
import * as filters from './filters/index';
import '../www/styles/less/app.less';
import './controller/home/content.css';
/**
 * 全局注入过滤器
 */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
