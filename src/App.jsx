

import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/Home/Home';
import BlankPage from './Page/Share/BlanckPage';
import Product from './firebase/product/Product';
import Share from './Page/Share/Share';
import Signup from './page/create-account/Signup';
import Login from './page/create-account/Loging';
import Blog from './page/Blogs/Blog';
import PrivateRoute from './Page/PrivateRoute/PrivateRoute';
import DashBoard from './page/DashBoard/DashBoard';



function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      errorElement: <BlankPage />,
      element: <Share></Share>,
      children: [
        {
          path: '/',
          element: <Home />,

        },
        {
          path: '/product',
          element: (<PrivateRoute><Product></Product></PrivateRoute>)
        },

        {
          path: '/signup',
          element: <Signup></Signup>
        }
        ,
        {
          path: '/login',
          element: <Login></Login>
        }
        ,
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/my-orders',
          element: <DashBoard></DashBoard>
        }

      ]



    },


  ]);


  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  )
}

export default App