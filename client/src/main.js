import Vue from 'vue';
import vueRouter from 'vue-router';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

Vue.use(vueRouter);
