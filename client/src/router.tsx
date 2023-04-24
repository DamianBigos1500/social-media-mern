import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { action } from './page/Login';
import Providers from './components/Providers';
import DashboardLayout from './layouts/DashboardLayout';

const Home = React.lazy(() => import('./page/Home'));
const Login = React.lazy(() => import('./page/Login'));
const NotFound = React.lazy(() => import('./page/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Providers />,
    children: [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          { path: '/', element: <Home /> },
          {
            path: '/login',
            element: <Login />,
            action: action,
          },
        ],
      },
      {
        path: '/',
        element: <DashboardLayout />,
        children: [
          { path: '/', element: <Home /> },
          {
            path: '/login',
            element: <Login />,
            action: action,
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
    ],
  },
]);

export default router;
