import axios from "axios";
import { useEffect, useState } from "react";

const ManageClasses = () => {
  const [myClass, setMyClass] = useState([]);
  const [id, setId] = useState();
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    getClasses();
  }, []);
  const getClasses = () => {
    axios
      .get(`http://localhost:8000/allClasses`)
      .then((res) => setMyClass(res.data));
  };

  const handleApprove = (id) => {
    axios.put(`http://localhost:8000/approveClass/${id}`).then((res) => {
      if (res.data.acknowledged) {
        getClasses();
      }
    });
  };

  const handleDenyModal = (id) => {
    setId(id);
    window.my_modal_1.showModal();
  };

  const handleDeny = () => {
    axios
      .post(`http://localhost:8000/deny/${id}`, { feedback: feedback })
      .then((res) => {
        if (res.data.acknowledged) {
          setFeedback("");
          getClasses();
        }
      });
  };

  return (
    <div>
      <h1>Manage Classes</h1>
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
              <th>Total enrolled Student</th>
              <th>Status</th>
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
                  <td>0</td>
                  <td>{s.status}</td>
                  <th>
                    <div className="card-actions justify-end">
                      <button
                        onClick={() => {
                          handleApprove(s._id);
                        }}
                        disabled={
                          s.status === "approved"
                            ? "disable"
                            : s.status === "denied"
                            ? "disable"
                            : ""
                        }
                        className="bg-sky-500 rounded p-2 mr-2"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDenyModal(s._id)}
                        disabled={
                          s.status === "approved"
                            ? "disable"
                            : s.status === "denied"
                            ? "disable"
                            : ""
                        }
                        className="bg-sky-500 rounded p-2"
                      >
                        Deny
                      </button>
                    </div>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal  */}
      {/* <button className="btn" onClick={() => window.my_modal_1.showModal()}>open modal</button> */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Add Feedback</h3>
          <input
            className="border-2 border-red-500"
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            name=""
            id=""
          />
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={() => handleDeny()} className="btn">
              Okay
            </button>
            <button className="btn">Cancel</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ManageClasses;
