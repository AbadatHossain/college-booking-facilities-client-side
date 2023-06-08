import { Link, useNavigate } from "react-router-dom";
import logImg from "../../assets/login.png";
import { useContext, useState } from "react";


import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGooleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
       console.log(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content mt-10 gap-3 flex flex-col lg:flex-row">
        <div className="text-center mr-10 h-1/2 w-1/2">
          <img src={logImg} alt="" />
        </div>
        <div className="card flex-shrink-0 p-5 max-w-sm shadow-2xl bg-base-100 w-full">
          
          <div className="card-body ">
            <h1 className="text-3xl font-bold text-center text-sky-500 mb-5">
              Login now!
            </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control mb-2 ">
                <label className="label">
                  <span className="label-text">Email :</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="  email"
                  className="input outline-double w-full mt-2 "
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
                  className="input outline-double w-full mt-2 mb-2 "
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

             

              <div className="form-control mt-6">
                <input  className="btn bg-sky-500 w-full rounded-md py-3 text-white" type="submit" value="Login" />
              </div>
            </form>

            <div className="relative flex items-center justify-center w-full mt-6 border border-t">
              <div className="absolute px-5 bg-white">Or</div>
            </div>
            <div className="flex mt-4 gap-x-2">
              <button
                onClick={handleGooleSignIn}
                type="button"
                className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
              <button
                onClick={handleGithubSignIn}
                className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
              </button>
            </div>
            <p className="my-4 text-center">
              New to car doctors{" "}
              <Link className="font-bold text-pink-500" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;





