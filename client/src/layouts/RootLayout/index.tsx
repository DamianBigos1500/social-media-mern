import { FC, Suspense } from 'react';
import Navbar from '../../components/RootLayout/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/RootLayout/Sidebar';
import styles from './rootLayout.module.scss';
import SidebarRight from '../../components/RootLayout/SidebarRight';
import Protected from '../../features/auth/components/Protected';
import LoadingSpinner from '../../components/LoadingSpinner';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <Protected>
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
    </Protected>
  );
};

export default RootLayout;
