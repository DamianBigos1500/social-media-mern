import axios from '@/lib/axios';

const authService = {
  login: async () => {
    try {
      await axios.post('/auth/login', {});
    } catch (error) {
      throw error;
    }
  },
  logout: async () => {
    await axios.post('/auth/logout');
  },
};

export default authService;
