import axios from 'axios';

const http = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '' : 'http://localhost:8080',
  withCredentials: true,
});

http.init = function () {
  this.interceptors.response.use(null, function (response) {
    const {request: error} = response;

    if (error.status === 401) {
      sessionStorage.removeItem('user');

      return Promise.reject({res: error, text: error.statusText});
    }

    return Promise.reject(error);
  });
};

export default http;
