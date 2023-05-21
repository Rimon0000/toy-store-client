import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../Pages/MyToys/UpdateToy";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path: "/myToys",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:"/updateToy/:id",
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`https://toy-server-theta.vercel.app/addToy/${params.id}`)

        },
        {
          path: "/allToys", 
          element: <AllToys></AllToys>
        },
        {
          path:"/allToys/:id",
          element: <ToyDetails></ToyDetails>,
          loader: ({params}) => fetch(`https://toy-server-theta.vercel.app/addToy/${params.id}`)
        },
        {
          path: "/blog",
          element:<Blog></Blog>
        }
      ]
    },
  ]);

export default router