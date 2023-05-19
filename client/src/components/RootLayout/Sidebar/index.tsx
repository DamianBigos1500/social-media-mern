import { FC } from 'react';
import styles from './sidebar.module.scss';
import SidebarUser from '../SidebarUser';
import SidebarNavigation from '../SidebarNavigation';
import SidebarLikedPages from '../SidebarLikedPages';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className={styles.sidebar}>
      <SidebarUser />

      <SidebarNavigation />

      <SidebarLikedPages />
    </div>
  );
};

export default Sidebar;
