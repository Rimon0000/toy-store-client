import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/registration",
          element: <Registration></Registration>
        },
        {
          path: "/addToy",
          element: <AddToy></AddToy>
        },
        {
          path: "/myToys",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        }
      ]
    },
  ]);

export default router