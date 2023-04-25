import { FC } from 'react';
import styles from './sidebar.module.scss';
import { Link } from 'react-router-dom';

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__nav}>
        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>I</span>
          <span className={styles.sidebar__nav_link}>
            <Link to="">Feed</Link>
          </span>
        </div>

        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>I</span>
          <span className={styles.sidebar__nav_link}>
            <Link to="">Friends</Link>
          </span>
        </div>

        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>I</span>
          <span className={styles.sidebar__nav_link}>
            <Link to="">Event</Link>
          </span>
        </div>

        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>I</span>
          <span className={styles.sidebar__nav_link}>
            <Link to="">Watch Videos</Link>
          </span>
        </div>

        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>I</span>
          <span className={styles.sidebar__nav_link}>
            <Link to="">Photos</Link>
          </span>
        </div>

        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>I</span>
          <span className={styles.sidebar__nav_link}>
            <Link to="">Files</Link>
          </span>
        </div>

        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>I</span>
          <span className={styles.sidebar__nav_link}>
            <Link to="">Marketplace</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
