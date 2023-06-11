import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
// import { Navigate } from 'react-router-dom';

const RequiredAdmin = ({ children }) => {
  const [admin, setAdmin] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useContext(AuthContext);
  console.log(admin);

  useEffect(() => {
    if (user.user) {
      setLoading(true);
      axios
        .get(`http://localhost:8000/checkAdmin/${user.user.email}`)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setLoading(false);
            setAdmin(true);
          } else {
            setLoading(false);
            setAdmin(false);
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [user.user]);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (!loading && admin) {
    return children;
  }

  // if (!user.user) {
  //   return <Navigate to="/login" replace />
  // } else if (admin) {
  //   return children;
  // }
};

export default RequiredAdmin;
