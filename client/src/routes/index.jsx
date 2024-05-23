import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
