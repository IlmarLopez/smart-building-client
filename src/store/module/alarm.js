/** VUEX module for contract management */
import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    // initial state
    entities: {},
    list: [],
    fetchListError: null,
    isFetchingList: false,
  },
  getters: {
    // getters
    /**
     * Return array of resources.
     */
    list: state => state.list.map(id => state.entities[id.toString()]),
    /**
     * Get resource by id.
     */
    byId: state => id => state.entities[id.toString()],
    /**
     * Return true if there is a logged error.
     */
    isError: state => state.fetchListError !== null,
    /**
     * Return true if there is a ongoing request.
     */
    isLoading(state) {
      return state.isFetchingList;
    },
  },
  mutations: {
    // mutations
    FETCH_LIST_START: (state) => {
      state.isFetchingList = true;
    },
    FETCH_LIST_SUCCESS: (state, response) => {
      const { data } = response;

      data.forEach((m) => {
        Vue.set(state.entities, m.id.toString(), m);
      });

      state.list = data.map(m => m.id.toString());
      state.isFetchingList = false;
      state.fetchListError = null;
    },
    FETCH_LIST_ERROR: (state, error) => {
      state.list = [];
      state.fetchListError = error;
      state.isFetchingList = false;
    },
  },
  actions: {
    // actions
    FETCH_LIST: ({ commit }) => {
      commit('FETCH_LIST_START');
      return new Promise((resolve, reject) => {
        Vue.prototype
          .$http({ url: 'alarmListServlet', method: 'GET' })
          .then((response) => {
            resolve(response);
            console.log(response);
            commit('FETCH_LIST_SUCCESS', response);
          })
          .catch((err) => {
            reject(err);
            commit('FETCH_LIST_ERROR', err);
          });
      });
    },
  },
};
