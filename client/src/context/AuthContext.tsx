import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import IUser from '../types/IUser';
import axios from '../lib/axios';
import BACKEND_URL from '../config/BACKEND_URL';

interface AuthContextProps {
  user: IUser | null;
  setUser: any;
  isAuthenticated?: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: null,
});

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/auth/login/success`);

        setUser(response.data.user);
        console.log('user is active');
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  if (isLoading) return null;

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated: user ? true : false }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
