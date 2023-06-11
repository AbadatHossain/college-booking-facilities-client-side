// import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ getClass, student }) => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  const { name, picture, instructorName, price, availableSeats } = getClass;
  console.log(student);

  const handleSelect = (getClass) => {
    if (!user.user || !student) {
      console.log("user");
      navigate("/login");
      return;
    }

    getClass.email = user?.user?.email;
    console.log(getClass);

    fetch(`https://summer-camp-assignment-server.vercel.app/selectedClass`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(getClass),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div
        className={`card w-96 ${
          availableSeats == 0 ? "bg-red-600 text-white" : "bg-base-100"
        } shadow-xl mt-10 py-10 px-5`}
      >
        <figure >
          <img className="w-80 h-100% items-center" src={picture} alt="game" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Class: {name}</h2>
          <p> Instructor Name: {instructorName}</p>
          <p> Available Seats: {availableSeats}</p>
          <p> Price: {price}</p>
          <div className="card-actions items-center text-center">
            <button
              onClick={() => handleSelect(getClass)}
              
              disabled={availableSeats == 0 ? true : false}
              className="bg-sky-500 font-bold p-2 rounded"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
