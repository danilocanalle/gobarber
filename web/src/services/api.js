import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3333/',
  baseURL: 'https://gobarber.threehands.com.br/',
});

export default api;
