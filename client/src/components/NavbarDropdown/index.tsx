import { FC, Ref, useRef } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../UI/Dropdown';
import styles from './navbarDropdown.module.scss';
import IUser from '../../types/IUser';
import customDropdownStyles from '../../styles/customDropdown.module.scss';
import authService from '../../features/auth/services/auth.service';
import Icons from '../Icons';
import { useNavigate } from 'react-router-dom';

interface NavbarDropdownProps {
  user: IUser | null;
}

const NavbarDropdown: FC<NavbarDropdownProps> = ({ user }) => {
  const dropdownRef: any = useRef();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await authService.logout();
      navigate(0);
    } catch (error) {}
  };

  return (
    <DropdownMenu>
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
      <DropdownMenuContent
        ref={dropdownRef}
        className={customDropdownStyles.dropdown__trigger}
      >
        <button onClick={logout}>logout</button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropdown;
