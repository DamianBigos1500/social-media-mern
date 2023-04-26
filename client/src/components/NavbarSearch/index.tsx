import { FC } from 'react';
import styles from './navbarSearch.module.scss';

interface NavbarSearchProps {}

const NavbarSearch: FC<NavbarSearchProps> = ({}) => {
  return <div className={styles.nav_search}>NavbarSearch</div>;
};

export default NavbarSearch;
