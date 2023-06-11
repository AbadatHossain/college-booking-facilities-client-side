import { useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

const MyClasses = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const [myClass, setMyClass] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  // console.log(user);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://summer-camp-assignment-server.vercel.app/getClassForInstructor/${user.email}`)
        .then((res) => setMyClass(res.data));
    }
  }, [user]);
  return (
    <div>
      <h1>My classes</h1>
      <br />
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor Name</th>
              <th>Enrolled Student</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}

            {myClass.map((s, index) => (
              <>
                <tr className="text-center">
                  <td className="mr-3">{index + 1}</td>
                  <td>
                    {" "}
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          className="rounded"
                          src={s.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{s.name}</td>

                  <td>{s.instructorName}</td>
                  <td>{s.enrolledStudent}</td>
                  <td>{s.status}</td>
                  <td>{s.feedback ? s.feedback : "None"}</td>
                  <th>
                    <div className="card-actions justify-end">
                      <button className="bg-sky-500 p-2 rounded">Update</button>
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
export default MyClasses;
