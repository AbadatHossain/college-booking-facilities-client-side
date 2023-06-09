
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";


const PrivateRoute = ({ children }) => {
  const user = useContext(AuthContext);
  console.log(user);


  if (!user.user) {
    return <Navigate to="/login" replace />
  }

  return children;
};

export default PrivateRoute;