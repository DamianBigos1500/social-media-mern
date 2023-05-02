import { FC, useContext } from 'react';
import styles from './navbarIcons.module.scss';
import Icons from '../Icons';
import { AuthContext } from '../../context/AuthContext';
import { Dropdown, DropdownContent, DropdownTriger } from '../UI/Dropdown2';
import customDropdownStyles from '../../styles/customDropdown.module.scss';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from '../UI/Dropdown';

interface NavbarIconsProps {}

const NavbarIcons: FC<NavbarIconsProps> = ({}) => {
  const { user } = useContext(AuthContext);

  const logout = () => {};

  return (
    <div className={styles.nav__icons}>
      <Icons.AiOutlineUserAdd size={30} className={styles.nav__icon} />
      <Icons.HiOutlineChatBubbleOvalLeftEllipsis
        size={30}
        className={styles.nav__icon}
      />
      <Icons.IoMdNotificationsOutline size={30} className={styles.nav__icon} />

      {/* <DropdownMenu>
        <DropdownMenuTrigger className={customDropdownStyles.dropdown__trigger}>
          <div className={styles.nav__dropdown_menu}>
            <img
              src={user?.picture}
              className={styles.nav__profile_image}
              style={{ width: '40px', height: '40px' }}
              alt="profile image"
            />
            <Icons.AiFillCaretDown size={12} className={styles.nav__icon} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <button onClick={logout}>logout</button>
        </DropdownMenuContent>
      </DropdownMenu> */}

      <Dropdown>
        <DropdownTriger>Trigger</DropdownTriger>
        <DropdownContent className={customDropdownStyles.dropdown__content}>
          COntent
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export default NavbarIcons;
