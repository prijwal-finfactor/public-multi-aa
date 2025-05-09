import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../screens/Dashboard';
import ConsentFlow from '../screens/ConsentFlow';
import AccountLinking from '../screens/AccountLinking';
import Layout from '../components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/consent-flow',
        element: <ConsentFlow />,
      },
      {
        path: '/account-linking',
        element: <AccountLinking />,
      },
    ],
  },
]);