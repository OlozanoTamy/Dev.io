import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import Register from "../views/Register";
import Login from "../views/Login";
import UserProfile from "../views/UserProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
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
