import axios from '../../../lib/axios';

const authService = {
  login: async () => {
    return axios.post('/auth/login', {});
  },

  logout: async () => {
    return axios.post('/auth/logout');
  },
};

export default authService;
