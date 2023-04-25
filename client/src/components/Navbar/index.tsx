import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from './navbar.module.scss';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>

      {user && <span>{user?.email}</span>}
    </div>
  );
};

export default Navbar;
