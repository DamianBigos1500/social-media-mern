import useAuth from '../../../../hooks/useAuth';
import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type ProtectedProps = {
  children: JSX.Element;
};

const Protected: FC<ProtectedProps> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    children
  ) : (
    <Navigate to={'/login'} state={{ from: location.pathname }} />
  );
};

export default Protected;
