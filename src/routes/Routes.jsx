import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../components/Error";
import Home from "../pages/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import PrivateRoute from "../components/Privateroute";
import AddProducts from "../pages/Addproducts";
import BrandProducts from "../components/BrandProducts";
import Product from "../components/Product";
import UpdateProduct from "../components/UpdateProduct";
import MyCart from "../pages/Mycart";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path:'*',
            element:<NotFound></NotFound>

        },
        {
            path: '/login',
            element: <Login></Login>

        },
        {   
            path:"/register",
            element: <Register></Register>,
        },
       {path: '/addProducts',
       element: <PrivateRoute>
           <AddProducts></AddProducts>
       </PrivateRoute>,} ,
       {
        path: '/brandProducts/:brandName',
        element: <PrivateRoute>
            <BrandProducts></BrandProducts>
        </PrivateRoute>,
        loader: () => fetch('https://brand-shop-server-37q6aggdw-tanims-projects-44b97d8f.vercel.app/product')
    },
       {
        path: '/brandProducts/:brandName/product/:_id',
        element: <PrivateRoute>
            <Product></Product>
        </PrivateRoute>,
        loader: () => fetch('https://brand-shop-server-37q6aggdw-tanims-projects-44b97d8f.vercel.app/product')
    },
    {
        path:'/updateProduct/:id',
        element:<PrivateRoute>
        <UpdateProduct></UpdateProduct>
    </PrivateRoute>  ,
        loader: ({params})=> fetch(`https://brand-shop-server-37q6aggdw-tanims-projects-44b97d8f.vercel.app/product/${params.id}`)
    },
    {path: '/myCart',
       element: <PrivateRoute>
           <MyCart></MyCart>
       </PrivateRoute>,
       loader: () => fetch('https://brand-shop-server-37q6aggdw-tanims-projects-44b97d8f.vercel.app/product')
    }
      ],
    },
  ]);
  export default router;