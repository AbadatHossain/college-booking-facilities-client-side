import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Sidebar from "../components/Dashboard/Sidebar";
import Classes from "../pages/Classes/Classes";

import RequiredStudent from "../components/RequiredStudent";
import SelectedClass from "../components/Dashboard/SelectedClass";
import Instructor from "../pages/Instructor/Instuctor";
import EnrolledClasses from "../components/Dashboard/EnrolledClasses";
import RequiredInstructor from "../components/RequiredInstructor";
import AddClasses from "../components/Dashboard/AddClasses";
import MyClasses from "../components/Dashboard/MyClasses";
import RequiredAdmin from "../components/RequiredAdmin";
import ManageClasses from "../components/Dashboard/ManageClasses";
import PrivateRoute from "./PrivateRoute";


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
    element: <Instructor></Instructor>
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
        element: <RequiredStudent>
          <SelectedClass></SelectedClass>
        </RequiredStudent>
      },
      
{
        path: "/dashboard/myEnrolledClasses",
        element: <RequiredStudent>
          <EnrolledClasses></EnrolledClasses>
        </RequiredStudent>
      },
      {
        path: "/dashboard/addClass",
        element: <RequiredInstructor>
          <AddClasses></AddClasses>
        </RequiredInstructor>
      },
      {
        path: "/dashboard/myClasses",
        element: <RequiredInstructor>
          <MyClasses></MyClasses>
        </RequiredInstructor>
      },
      {
        path: "/dashboard/manageClasses",
        element: <RequiredAdmin>
          <ManageClasses></ManageClasses>
        </RequiredAdmin>
      },


    ],
  },
]);
export default router;
