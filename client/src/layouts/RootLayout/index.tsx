import { FC, Suspense } from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import styles from './rootLayout.module.scss';
import SidebarRight from '../../components/SidebarRight';
import Protected from '../../features/auth/components/Protected';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <div>
      <Protected>
        <>
          <Navbar />
          <div className={styles.root_content}>
            <Sidebar />

            <div className={styles.content}>
              <Outlet />
            </div>

            <SidebarRight />
          </div>
        </>
      </Protected>
    </div>
  );
};

export default RootLayout;
