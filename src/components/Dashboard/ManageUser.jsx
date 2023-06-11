import axios from "axios";
import { useEffect, useState } from "react";

const ManageUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    axios
      .get("https://summer-camp-assignment-server.vercel.app/getUsers")
      .then((res) => setUsers(res.data));
  };

  const handleAdmin = (id) => {
    console.log(id);
    axios.put(`https://summer-camp-assignment-server.vercel.app/makeAdmin/${id}`).then((res) => {
      if (res.data.acknowledged) {
        getUsers();
      }
    });
  };

  const handleInstructor = (id) => {
    console.log(id);
    axios.put(`https://summer-camp-assignment-server.vercel.app/makeInstructor/${id}`).then((res) => {
      if (res.data.acknowledged) {
        getUsers();
      }
    });
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <br />
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}

            {users.map((s, index) => (
              <>
                <tr className="text-center">
                  <td className="mr-3">{index + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.role}</td>
                  <th>
                    <div className="card-actions justify-center">
                      <button
                        onClick={() => handleAdmin(s._id)}
                        disabled={
                          s.role === "admin"
                            ? "disable"
                            : s.role === "instructor"
                            ? "disable"
                            : ""
                        }
                        className="bg-sky-500 rounded p-2 mr-2"
                      >
                        Make Admin
                      </button>
                      <button
                        onClick={() => handleInstructor(s._id)}
                        disabled={
                          s.role === "admin"
                            ? "disable"
                            : s.role === "instructor"
                            ? "disable"
                            : ""
                        }
                        className="bg-sky-500 rounded p-2"
                      >
                        Make Instructor
                      </button>
                    </div>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
