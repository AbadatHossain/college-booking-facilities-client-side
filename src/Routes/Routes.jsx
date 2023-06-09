import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Sidebar from "../components/Dashboard/Sidebar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path:"/login",
    element: <Login></Login>
  },
  {
    path:"/signup",
    element: <SignUp></SignUp>
  },

  {
    path: '/dashboard',
    element: (
      
        <DashboardLayout></DashboardLayout>
      
    ),
    children: [
      {
        path: "/dashboard",
        element: <Sidebar></Sidebar>
      },
      {
        path: "/dashboard/myclasses",
        element: <Login></Login>
      }
      
      
     
    ],
  },
]);
export default router;
