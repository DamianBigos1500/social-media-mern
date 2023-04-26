import { FC } from 'react';
import styles from './navbar.module.scss';
import Logo from '../Logo';
import NavbarIcons from '../NavbarIcons';
import NavbarSearch from '../NavbarSearch';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {

  return (
    <div className={styles.navbar}>
      <Logo />
      <NavbarSearch />
      <NavbarIcons />

    </div>
  );
};

export default Navbar;
