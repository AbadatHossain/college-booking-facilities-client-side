import { useContext, useEffect, useState } from "react";

import ClassCard from "./ClassCard";

import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const Classes = () => {
  const [getClasses, setGetClasses] = useState([]);
  const [student, setStudent] = useState(false);
  const user = useContext(AuthContext);
  // console.log(student);

  useEffect(() => {
    if (user.user) {
      axios
        .get(`https://summer-camp-assignment-server.vercel.app/user/${user.user.email}`)
        .then((res) => {
          if (res.data) {
            setStudent(true);
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [user.user]);

  console.log(getClasses);
  useEffect(() => {
    fetch("https://summer-camp-assignment-server.vercel.app/getClasses")
      .then((res) => res.json())
      .then((data) => setGetClasses(data));
  }, []);

  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-x-3 justify-between">
      {getClasses?.map((getClass) => (
        <ClassCard key={getClass.id} getClass={getClass} student={student}>
          {" "}
        </ClassCard>
      ))}
    </div>
  );
};

export default Classes;
