import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

const Home = React.lazy(() => import('./page/Home'));
const Login = React.lazy(() => import('./page/Login'));
const NotFound = React.lazy(() => import('./page/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    path: '*',
    element: <RootLayout />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
