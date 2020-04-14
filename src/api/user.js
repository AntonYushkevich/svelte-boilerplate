import http from '../utils/http';
import qs from 'querystring';

export default class User {
  static login({ username, password }) {
    return http.post('/admin/login', qs.stringify({ username, password }));
  }

  static getMenu() {
    return http.get('/admin/main/menu');
  }
}
