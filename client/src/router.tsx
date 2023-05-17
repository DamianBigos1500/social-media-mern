import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Login, { action } from './page/Login';
import Providers from './components/Providers';
import DashboardLayout from './layouts/DashboardLayout';
import UnAuthenticated from './features/auth/components/Unauthorized';
import Home from './page/Home';
import NotFound from './page/NotFound';
import Protected from './features/auth/components/Protected';
import Activate, {
  ActivatePageErrorBoundary,
  activatePageLoader,
} from './page/Activate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Providers />,
    children: [
      {
        path: '/login',
        element: (
            <Login />
        ),
        action: action,
      },
      {
        path: '/',
        element: (
            <RootLayout />
        ),
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/activate/:token',
            loader: activatePageLoader,
            element: <Activate />,
            errorElement: <ActivatePageErrorBoundary />,
          },
        ],
      },
      {
        path: '/profile',
        element: (
          <Protected>
            <div>profile</div>
          </Protected>
        ),
      },
      {
        path: '/dashboard',
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
