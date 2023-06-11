import { Link, useNavigate } from "react-router-dom";
import logImg from "../../assets/login.png";
import { useContext } from "react";


import { AuthContext } from "../../providers/AuthProvider";
import { saveUser } from "../../api/auth";

const SignUp = () => {
    
  const navigate = useNavigate();
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, email, password)

        createUser(email, password)
        .then(result =>{
          
          alert("signup successful")
          saveUser(result.user)
            const loggedUser = result.user
            console.log(loggedUser)
            navigate("/");
        })
        .catch(error => {
            console.log(error)
        })

    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content mt-10 gap-3 flex flex-col lg:flex-row">
        <div className="text-center mr-10 h-1/2 w-1/2">
          <img src={logImg} alt="" />
        </div>
        <div className="card flex-shrink-0 p-5 max-w-sm shadow-2xl bg-base-100 w-full">
          <div className="card-body w-full">
            <h1 className="text-3xl font-bold text-center text-sky-500">Register now!</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name  :</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="  name"
                  className="input outline-double w-full mt-2 mb-2"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email  :</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="  email"
                  className="input outline-double w-full mt-2 mb-2"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password  :</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="  password"
                  className="input outline-double w-full mt-2 mb-2"
                />


{/* <label className="label">
                  <span className="label-text"> confirm Password  :</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="  password"
                  className="input outline-double w-full mt-2 mb-2"
                /> */}



                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL  :</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="  photoURL"
                    className="input outline-double w-full mt-2 mb-2"
                  />
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input  className="btn bg-sky-500 w-full rounded-md py-3 text-white" type="submit" value="SignUp" />
              </div>
            </form>

            <p className="my-4 text-center">
              Have an account{" "}
              <Link className="font-bold text-pink-500" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
