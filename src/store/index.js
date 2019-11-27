import Vue from 'vue';
import Vuex from 'vuex';

// import modules
import alarm from './module/alarm';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    alarm,
  },
  strict: debug,
});
