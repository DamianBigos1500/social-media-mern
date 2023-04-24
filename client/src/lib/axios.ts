import Axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000';

const axios = Axios.create({
  baseURL: baseUrl,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axios;
