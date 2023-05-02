import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const state = useContext(AuthContext);

  return { ...state };
};

export default useAuth;
