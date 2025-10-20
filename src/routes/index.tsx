import { createBrowserRouter } from 'react-router-dom';
import Layout from '../shared/layouts/Layout';
import Auth from '../components/auth/pages/Auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Auth />,
      }

    ]
  }
]);

export default router;