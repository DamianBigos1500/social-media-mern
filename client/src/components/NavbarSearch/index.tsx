import { FC } from 'react';
import styles from './navbarSearch.module.scss';
import Icons from '../Icons';

interface NavbarSearchProps {}

const NavbarSearch: FC<NavbarSearchProps> = ({}) => {
  return (
    <div className={styles.nav_search}>
      <div className={styles.nav_search__bar}>
        <input
          className={styles.nav_search__input}
          placeholder="Type here"
        />

        <span className={styles.nav_search__icon}>
          <Icons.BiSearchAlt size={20} />
        </span>
      </div>
    </div>
  );
};

export default NavbarSearch;
