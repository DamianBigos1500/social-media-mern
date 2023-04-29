import { FC } from 'react';
import styles from './navbarLikedPageItem.module.scss';

interface ILikedPage {
  abbreviation: string;
  name: string;
}

interface NavbarLikedPageItemProps {
  likedPage: ILikedPage;
}

const NavbarLikedPageItem: FC<NavbarLikedPageItemProps> = ({ likedPage }) => {
  return (
    <li className={styles.nav__liked_page}>
      <span>{likedPage.abbreviation}</span>
      <span>{likedPage.name}</span>
    </li>
  );
};

export default NavbarLikedPageItem;
