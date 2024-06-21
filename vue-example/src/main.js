import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Status from './components/Status.vue';
import SubmitData from './components/SubmitData.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: Login },
  { path: '/status', component: Status },
  { path: '/submit-data', component: SubmitData },
  { path: '/', component: Home }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
