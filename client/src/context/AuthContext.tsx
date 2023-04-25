import React, { FC, ReactNode, useEffect, useState } from 'react';
import IUser from '../types/IUser';
import axios from '../lib/axios';

interface AuthContextProps {
  user: IUser | null;
  setUser: any;
}

export const AuthContext = React.createContext<AuthContextProps>({
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
        const response = await axios.get(
          'http://127.0.0.1:8000/auth/login/success'
        );

        setUser(response.data.user);
        console.log('error');
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
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
