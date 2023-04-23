import { FC } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
