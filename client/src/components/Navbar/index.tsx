import { FC, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>

      {user && <span>{user?.email}</span>}
    </div>
  );
};

export default Navbar;
