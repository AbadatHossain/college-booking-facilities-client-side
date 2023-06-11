import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";

const RequiredInstructor = ({ children }) => {
  const [instructor, setInstructor] = useState();
  const [loading, setLoading] = useState(false);
  const user = useContext(AuthContext);
  console.log(instructor);

  useEffect(() => {
    if (user.user) {
      setLoading(true);
      axios
        .get(`https://summer-camp-assignment-server.vercel.app/checkInstructor/${user.user.email}`)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setLoading(false);
            setInstructor(true);
          } else {
            setLoading(false);
            setInstructor(false);
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
  }

  if (!user.user) {
    return <Navigate to="/login" replace />;
  } else if (instructor) {
    return children;
  }
};

export default RequiredInstructor;
