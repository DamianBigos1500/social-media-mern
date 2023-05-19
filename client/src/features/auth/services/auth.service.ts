import axios from '../../../lib/axios';

const authService = {
  register: ({ body }: any) => {
    return axios.post('/auth/register', body);
  },

  login: ({ body }: any) => {
    return axios.post('/auth/login', body);
  },

  logout: () => {
    return axios.post('/auth/logout');
  },
};

export default authService;
