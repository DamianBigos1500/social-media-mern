import useAuth from '../../../../hooks/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
};

const UnAuthenticated: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? children : <Navigate to={'/'} />;
};

export default UnAuthenticated;
