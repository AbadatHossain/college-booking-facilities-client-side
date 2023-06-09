import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import axios from 'axios';


const RequiredStudent = ({ children }) => {
  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(false);
  const user = useContext(AuthContext);
  console.log(student, user);

  useEffect(() => {
    if (user.user) {
      setLoading(true);
      axios.get(`http://localhost:8000/user/${user.user.email}`)
        .then(res => {
          if (res.data) {
            setLoading(false);
            setStudent(true);
          } else {
            setLoading(false);
            setStudent(false);
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  }, [user.user])

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (!user.user) {
    return <Navigate to="/login" replace />
  } else if (student) {
    return children;
  }


};

export default RequiredStudent;