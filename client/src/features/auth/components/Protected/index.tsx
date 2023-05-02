import useAuth from '../../../../hooks/useAuth';
import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type ProtectedProps = {
  children: JSX.Element;
};

const Protected: FC<ProtectedProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation().pathname;

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={'/login'} state={{ from: location }}  />
  );
};

export default Protected;
