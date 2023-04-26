import Axios from 'axios';
import BACKEND_URL from '../config/BACKEND_URL';

const axios = Axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axios;
