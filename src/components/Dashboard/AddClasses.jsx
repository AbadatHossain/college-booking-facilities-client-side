import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import app from "../../firebase/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AddClasses = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    data.enrolledStudent = 0;
    data.availableSeats = Number(data.availableSeats);
    data.price = Number(data.price);
    console.log(data);
    axios.post("https://summer-camp-assignment-server.vercel.app/addClass", data).then((res) => {
      if (res.data.acknowledged) {
        console.log(res);
        reset();
      }
    });
  };
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  console.log(user);

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-3">Add Classes</h1>
      <br />
      <form  onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Class Name:</label>
        <input
          className="border-2 w-full mb-3"
          {...register("name", { required: true, maxLength: 20 })}
        />{" "}
        <br />
        <label htmlFor="">Class Image Url:</label>
        <input
          className="border-2 w-full mb-3"
          {...register("picture", { required: true })}
        />{" "}
        <br />
        <label htmlFor="">Instructor Name:</label>
        <input
          className="border-2 w-full mb-3"
          value={user?.displayName}
          {...register("instructorName", { required: true })}
        />{" "}
        <br />
        <label htmlFor="">Instructor Email:</label>
        <input
          className="border-2 w-full mb-3"
          value={user?.email}
          {...register("instructorEmail", { required: true })}
        />{" "}
        <br />
        <label htmlFor="">Available Seats:</label>
        <input
          className="border-2 w-full mb-3"
          type="number"
          {...register("availableSeats", { required: true })}
        />{" "}
        <br />
        <label htmlFor="">Price:</label>
        <input
          className="border-2 w-full mb-3"
          type="number"
          {...register("price", { required: true })}
        />{" "}
        <br />
        <input className="border-2 bg-sky-500 p-3 w-full rounded" type="submit" />
      </form>
    </div>
  );
};

export default AddClasses;
