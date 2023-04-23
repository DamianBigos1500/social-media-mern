import { FC, useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import React from 'react';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {


  return (
    <div>
      <Navbar  />
      <React.Suspense fallback={<>...</>}>
        <Outlet />
      </React.Suspense>
    </div>
  );
};

export default RootLayout;
