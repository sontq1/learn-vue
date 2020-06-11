import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
import Todo from './Todo';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'todo',
    path: '/todo',
    component: Todo
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });


new Vue({
  render: h => h(App),
  router
}).$mount('#app');
