import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SelectedClass = () => {
  const user = useContext(AuthContext);
  const [selectedClass, setSelectedClass] = useState([]);

  useEffect(() => {
    if (user.user) {
      fetch(`http://localhost:8000/selectedClass/${user.user.email}`)
        .then(res => res.json())
        .then(data => setSelectedClass(data))
    }
  }, [user.user])


  return (
    <div>
      {
        selectedClass.map(s =>
          <>
            <div>
              <div className={`card w-96 shadow-xl`}>
                <figure>
                  <img
                    src={s.picture}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Class: {s.name}</h2>
                  <p> Instructor Name: {s.instructorName}</p>
                  <p> Available Seats: {s.availableSeats}</p>
                  <p> Price: {s.price}</p>
                  <div className="card-actions justify-end">
                    <button style={{ backgroundColor: "green", color: "white", padding: "10px", margin: "5px" }} className="btn btn-primary">Delete</button>
                    <button style={{ backgroundColor: "green", color: "white", padding: "10px", margin: "5px" }} className="btn btn-primary">Pay</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

export default SelectedClass;