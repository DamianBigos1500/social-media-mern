import { FC } from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Sidebar from '../../components/Sidebar';
import styles from './rootLayout.module.scss';
import SidebarRight from '../../components/SidebarRight';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <div>
      <Navbar />
      <React.Suspense fallback={<>...</>}>
        <div className={styles.root_content}>
          <Sidebar />
          <div className={styles.content}>
            <Outlet />
          </div>
          <SidebarRight />
        </div>
      </React.Suspense>
    </div>
  );
};

export default RootLayout;
