/**
 * ajaxRequest configuration
 * */
import axios from 'axios';
import apiURL from './api';

// axiosDefault configuration
axios.defaults.timeout = 10000; // timeout
axios.defaults.baseURL = apiURL; // Default address

// Routing request interception
// http request Interceptor
axios.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
    // Determine if there is a ticket. If it exists, then every HTTP header is added to ticket.
    if (window.localStorage.getItem('token')) {
      // eslint-disable-next-line no-param-reassign
      config.headers.common.Authorization = `Bearer ${window.localStorage.getItem('token')}`;
    }
    // config.headers['Accept-Language'] = 'en'
    return config;
  },
  error => Promise.reject(error.response),
);

// Routing response interception
// http response Interceptor
axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      // Returns the error code -1 to clear the ticket information and jump to the login page.
      window.localStorage.removeItem('token');
      window.location.href = '/';
      // window.location.href = 'http://admin.myhmp.org/#/login'
    }
  },
);
export default axios;
