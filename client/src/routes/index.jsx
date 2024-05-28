import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import Register from "../views/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const MyRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default MyRoutes;

//Creacion de las rutas por medio de react-route-dom
