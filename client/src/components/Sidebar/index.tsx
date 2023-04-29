import { FC } from 'react';
import styles from './sidebar.module.scss';
import SidebarUser from '../SidebarUser';
import SidebarNavigation from '../SidebarNavigation';
import NavbarLikedPages from '../NavbarLikedPages';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className={styles.sidebar}>
      <SidebarUser />

      <SidebarNavigation />

      <NavbarLikedPages />
    </div>
  );
};

export default Sidebar;
