import { createBrowserRouter } from 'react-router-dom';
import Layout from '../shared/layouts/Layout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [

    ]
  }
]);

export default router;