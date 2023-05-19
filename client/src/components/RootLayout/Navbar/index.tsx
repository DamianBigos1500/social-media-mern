import { FC } from 'react';
import styles from './navbar.module.scss';
import Logo from '../../Logo';
import NavbarIcons from '../NavbarIcons';
import NavbarSearch from '../NavbarSearch';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_left}>
        <Logo />
        <NavbarSearch />
      </div>
      <NavbarIcons />
    </div>
  );
};

export default Navbar;
