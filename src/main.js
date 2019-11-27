import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import axios from './httpConfig/http';
import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@/assets/fonts/material-design-icons/material-icons.css';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
