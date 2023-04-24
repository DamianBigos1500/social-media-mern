import React from 'react';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <div>
      <div>DASHBOARD</div>
      <React.Suspense fallback={<>...</>}>
        <Outlet />
      </React.Suspense>
    </div>
  );
};

export default index;
