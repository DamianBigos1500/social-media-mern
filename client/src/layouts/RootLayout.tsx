import { FC, useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import React from 'react';

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch('http://127.0.0.1:8000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          console.log(response);

          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          console.log(resObject);
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div>
      <Navbar />
      <React.Suspense fallback={<>...</>}>
        <Outlet />
      </React.Suspense>
    </div>
  );
};

export default RootLayout;
