import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../screens/Dashboard';
import SelectAAProvider from '../screens/SelectAAProvider';
import MobileVerification from '../screens/MobileVerification';
import VerifyOTP from '../screens/VerifyOTP';
import SelectFIAccount from '../screens/SelectFIAccount';
import ConsentDetails from '../screens/ConsentDetails';
import ConsentConfirmation from '../screens/ConsentConfirmation';
import AccountAggregator from '../screens/AccountAggregator';
import Success from '../screens/Success';

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
        path: '/select-aa-provider',
        element: <SelectAAProvider />,
      },
      {
        path: '/mobile-verification',
        element: <MobileVerification />,
      },
      {
        path: '/verify-otp',
        element: <VerifyOTP />,
      },
      {
        path: '/select-fi-account',
        element: <SelectFIAccount />,
      },
      {
        path: '/consent-details',
        element: <ConsentDetails />,
      },
      {
        path: '/consent-confirmation',
        element: <ConsentConfirmation />,
      },
      {
        path: '/account-aggregator',
        element: <AccountAggregator />,
      },
      {
        path: '/success',
        element: <Success />,
      },
    ],
  },
]);