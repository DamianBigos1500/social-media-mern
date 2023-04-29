import { FC } from 'react';
import styles from './navbarLikedPages.module.scss';
import NavbarLikedPageItem from '../NavbarLikedPageItem';

interface LikedPagesProps {}

const likedPages = [
  {
    abbreviation: 'FF',
    name: 'Footbal FC',
  },
  {
    abbreviation: 'BC',
    name: 'Badminton Club',
  },
  {
    abbreviation: 'UI',
    name: 'UI/UX Community',
  },
  {
    abbreviation: 'WD',
    name: 'Web Designer',
  },
];

const LikedPages: FC<LikedPagesProps> = ({}) => {
  return (
    <div className={styles.nav__liked_pages}>
      <h2 className={styles.nav__liked_pages__title}>Pages you like</h2>

      <ul className={styles.nav__liked_pages_list}>
        {likedPages.map((likedPage, index) => (
          <NavbarLikedPageItem key={index} likedPage={likedPage} />
        ))}
      </ul>
    </div>
  );
};

export default LikedPages;
