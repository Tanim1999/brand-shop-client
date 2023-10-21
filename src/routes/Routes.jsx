import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../components/Error";
import Home from "../pages/Home";
import Register from "../components/Register";

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
            path:"/register",
            element: <Register></Register>,
        }
      ],
    },
  ]);
  export default router;