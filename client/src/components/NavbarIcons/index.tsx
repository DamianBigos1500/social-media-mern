import { FC } from 'react';
import styles from './navbarIcons.module.scss';
import Icons from '../Icons';

interface NavbarIconsProps {}

const NavbarIcons: FC<NavbarIconsProps> = ({}) => {
  return (
    <div className={styles.nav_icons}>
      <Icons.AiOutlineUserAdd size={30} className={styles.nav_icon} />
      <Icons.HiOutlineChatBubbleOvalLeftEllipsis
        size={30}
        className={styles.nav_icon}
      />
    </div>
  );
};

export default NavbarIcons;
