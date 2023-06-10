
import { Navigate } from 'react-router-dom';

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebase.config';


const PrivateRoute = ({ children }) => {
  // const user = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  console.log(user);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children;
};

export default PrivateRoute;