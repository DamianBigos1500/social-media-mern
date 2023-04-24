import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import AuthContextProvider from '../../context/AuthContext';

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <AuthContextProvider>
      <Outlet />
    </AuthContextProvider>
  );
};

export default index;
