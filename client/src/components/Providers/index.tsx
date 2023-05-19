import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import AuthContextProvider from '../../context/AuthContext';

interface ProvidersProps {}

const Providers: FC<ProvidersProps> = () => {
  return (
    <AuthContextProvider>
      <Outlet />
    </AuthContextProvider>
  );
};

export default Providers;
