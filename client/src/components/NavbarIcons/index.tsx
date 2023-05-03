import { FC, useContext } from 'react';
import styles from './navbarIcons.module.scss';
import Icons from '../Icons';
import { AuthContext } from '../../context/AuthContext';
import NavbarDropdown from '../NavbarDropdown';

interface NavbarIconsProps {}

const NavbarIcons: FC<NavbarIconsProps> = ({}) => {
  const { user } = useContext(AuthContext);


  return (
    <div className={styles.nav__icons}>
      <Icons.AiOutlineUserAdd size={30} className={styles.nav__icon} />
      <Icons.HiOutlineChatBubbleOvalLeftEllipsis
        size={30}
        className={styles.nav__icon}
      />
      <Icons.IoMdNotificationsOutline size={30} className={styles.nav__icon} />

      <NavbarDropdown user={user} />
    </div>
  );
};

export default NavbarIcons;
