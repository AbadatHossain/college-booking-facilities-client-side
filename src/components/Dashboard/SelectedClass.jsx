import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const SelectedClass = () => {
  const user = useContext(AuthContext);
  const [selectedClass, setSelectedClass] = useState([]);

  useEffect(() => {
    if (user.user) {
      fetch(`http://localhost:8000/selectedClass/${user.user.email}`)
        .then((res) => res.json())
        .then((data) => setSelectedClass(data));
    }
  }, [user.user]);


  const handleDelete = (id) => {
    console.log(id)
    const proceed = confirm("Are you sure to delete");
    if (proceed) {
      fetch(`http://localhost:8000/selectedClass/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
          }
        });
    }
  };

  return (
    <div>

        
      
        <>
       
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Instructor Name</th>
                  <th>Available seat</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {/* row 1 */}
                
                {selectedClass.map((s, index)=><>
                    <tr className="text-center">
                    <td className="mr-3">{index+1}</td>
                  <td>
                    {" "}
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12 rounded">
                        <img
                          src={s.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{s.name}</td>

                  <td>{s.instructorName}</td>
                  <td>{s.availableSeats}</td>
                  <th>
                    <div className="card-actions justify-end">
                      <button onClick={()=>handleDelete(s._id)}
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          padding: "10px",
                          margin: "5px",
                        }}
                        className="btn btn-primary"
                      >
                        Delete
                      </button>
                      <button 
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          padding: "10px",
                          margin: "5px",
                        }}
                        className="btn btn-primary"
                      >
                        Pay
                      </button>
                    </div>
                  </th>
                </tr></>
                    
                )}
              </tbody>
            </table>
          </div>
        </>
     
    </div>
  );
};

export default SelectedClass;
