import { FC } from 'react';
import styles from './sidebarNavigation.module.scss';
import { Link } from 'react-router-dom';
import Icons from '../../UI/Icons';

interface SidebarNavigationProps {}

const iconSize = 26;

const SidebarNavigation: FC<SidebarNavigationProps> = ({}) => {
  return (
    <div className={styles.sidebar__nav}>
      <Link to="/">
        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>
            <Icons.BiCategory size={iconSize} />
          </span>
          <span className={styles.sidebar__nav_link}>Feed</span>
        </div>
      </Link>

      <Link to="/friends">
        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>
            <Icons.FaUserFriends size={iconSize} />
          </span>
          <span className={styles.sidebar__nav_link}>Friends</span>
        </div>
      </Link>

      <Link to="/events">
        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>
            <Icons.BsCalendar4Event size={iconSize} />
          </span>
          <span className={styles.sidebar__nav_link}>Event</span>
        </div>
      </Link>

      <Link to="/videos">
        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>
            <Icons.BsPlayBtn size={iconSize} />
          </span>
          <span className={styles.sidebar__nav_link}>Watch Videos</span>
        </div>
      </Link>

      <Link to="/photos">
        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>
            <Icons.HiOutlinePhoto size={iconSize} />
          </span>
          <span className={styles.sidebar__nav_link}>Photos</span>
        </div>
      </Link>

      <Link to="/files">
        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>
            <Icons.FiFileText size={iconSize} />
          </span>
          <span className={styles.sidebar__nav_link}>Files</span>
        </div>
      </Link>

      <Link to="/marketplace">
        <div className={styles.sidebar__nav_item}>
          <span className={styles.sidebar__nav_icon}>
            <Icons.BsHouse size={iconSize} />
          </span>
          <span className={styles.sidebar__nav_link}>Marketplace</span>
        </div>
      </Link>
    </div>
  );
};

export default SidebarNavigation;
