// import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";



const ClassCard = ({ getClass, student }) => {
  const user = useContext(AuthContext)
  const navigate = useNavigate();
  const { name, picture, instructorName, price, availableSeats } = getClass;
  // console.log(student);

  const handleSelect = (getClass) => {

    if (!user.user) {
      console.log("user");
      navigate('/login');
      return
    }

    getClass.email = user?.user?.email
    console.log(getClass)

    fetch(`http://localhost:8000/selectedClass`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(getClass),
    })
      .then(res => res.json())
      .then(data => console.log(data))

  }

  return (
    <div>
      <div className={`card w-96 ${availableSeats == 0 ? "bg-red-600 text-white" : "bg-base-100"} shadow-xl`}>
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        
      </div>
    </div>
  );
};

export default ClassCard;