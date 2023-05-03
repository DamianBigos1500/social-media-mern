import { FC, Suspense } from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import styles from './rootLayout.module.scss';
import SidebarRight from '../../components/SidebarRight';
import Protected from '../../features/auth/components/Protected';
import LoadingSpinner from '../../LoadingSpinner';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <div>
          <Navbar />
          <div className={styles.root_content}>
            <Sidebar />

            <div className={styles.content}>
              <Outlet />
            </div>

            <SidebarRight />
          </div>
    </div>
  );
};

export default RootLayout;
