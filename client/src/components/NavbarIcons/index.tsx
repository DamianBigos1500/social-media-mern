import { FC, useContext } from 'react';
import styles from './navbarIcons.module.scss';
import Icons from '../Icons';
import { AuthContext } from '../../context/AuthContext';

interface NavbarIconsProps {}

const NavbarIcons: FC<NavbarIconsProps> = ({}) => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className={styles.nav__icons}>
      <Icons.AiOutlineUserAdd size={30} className={styles.nav__icon} />
      <Icons.HiOutlineChatBubbleOvalLeftEllipsis
        size={30}
        className={styles.nav__icon}
      />
      <Icons.IoMdNotificationsOutline size={30} className={styles.nav__icon} />
      <img
        className={styles.nav__profile_image}
        src={user?.picture}
        alt="profile image"
      ></img>
    </div>
  );
};

export default NavbarIcons;
