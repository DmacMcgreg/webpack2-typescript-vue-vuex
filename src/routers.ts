import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Modeules from './controller/index';
Vue.use(VueRouter);
const router = new VueRouter({
  //mode: 'history',
  routes: [
      { path: '/', component: Modeules.HomeController },
      {path:'/about',component:Modeules.PromoteController}
  ]
});

export {
    App,
    router
}