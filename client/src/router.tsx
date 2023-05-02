import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Login, { action } from './page/Login';
import Providers from './components/Providers';
import DashboardLayout from './layouts/DashboardLayout';
import UnAuthenticated from './features/auth/components/Unauthorized';
import Home from './page/Home';
import NotFound from './page/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Providers />,
    children: [
      {
        path: '/login',
        element: (
          <UnAuthenticated>
            <Login />
          </UnAuthenticated>
        ),
        action: action,
      },
      {
        path: '/',
        element: <RootLayout />,
        children: [{ path: '/', element: <Home /> }],
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
