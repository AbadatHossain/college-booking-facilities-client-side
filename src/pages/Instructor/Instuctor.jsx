
import { useContext, useEffect, useState } from "react";



import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import InstructorCard from "./InstructorCard";

const Instructor = () => {

  const [getInstructorClasses, setGetInstructorClasses] = useState([])
  const [instructor, setInstructor] = useState(false);
  const user = useContext(AuthContext)
  // console.log(instructor);



  useEffect(() => {
    if (user.user) {
      axios.get(`http://localhost:8000/user/${user.user.email}`)
        .then(res => {
          if (res.data) {
            setInstructor(true);
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  }, [user.user])




  console.log(getInstructorClasses)
  useEffect(() => {
    fetch('http://localhost:8000/instructorClasses')
      .then(res => res.json())
      .then(data => setGetInstructorClasses(data))
  }, [])





  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-x-3 justify-between">
        
      {
        getInstructorClasses?.map(getInstructorClasses => <InstructorCard
        
          key={getInstructorClasses.id}
          getInstructorClasses={getInstructorClasses}
          instructor={instructor}      
        ></InstructorCard>)
        }   
    </div>
  
  );

};

export default Instructor;
