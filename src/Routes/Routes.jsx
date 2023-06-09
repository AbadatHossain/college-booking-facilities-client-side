import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Sidebar from "../components/Dashboard/Sidebar";
import Classes from "../pages/Classes/Classes";
import PrivateRoute from "../components/PrivateRoute";


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
    path:"/instructor",
    element: <SignUp></SignUp>
  },
 
  {
    path: "/classes",
    element: <Classes></Classes>
  },
  {
    path: '/dashboard',
    element: (
      
        <PrivateRoute>
          <DashboardLayout></DashboardLayout>
        </PrivateRoute>
      
    ),
    children: [
      {
        path: "/dashboard",
        element: <Sidebar></Sidebar>
      },
      {
        path: "/dashboard/mySelectedClasses",
        element: 
        // element: <SelectedClass></SelectedClass>
      },
      
      
     
    ],
  },
]);
export default router;
