import { Link } from "react-router-dom";
import authImg from "../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  // const {createUser} = useContext(AuthContext)

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   console.log(email, password);

  //   createUser (email, password)
  //     .then((userCredential) => {
  //       // Signed up
  //       const user = userCredential.user;
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorMessage, errorCode);
  //     });
  // };

  const [loginError, setLoginError] = useState(null);
  const [success, setSuccess] = useState("");

  const { login, auth, setUser } = useContext(AuthContext);

  // Login with Password and Email

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // reset message
    setLoginError("");
    setSuccess("");

    login(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully logged in!!");
      })
      .catch((error) => {
        console.log(error);
        setLoginError("User Not Found!!");
      });
  };

  // Google as a Provider setup

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleGoogleSignOut = () => {
  //   signOut(auth)
  //     .then((result) => {
  //       console.log(result);
  //       setUser(null);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const notify = () => toast.success("Successfully Logged in!");

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl font-bold justify-center align-middle text-center pt-8">
              Login Now
            </h1>
            <p className="text-center text-sm text-slate-500 pt-2">
              Have your own access
            </p>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {loginError && (
                <p className="text-red-700">{loginError}</p>
              )}
              {success && <p className="text-sm text-green-700">{success}</p>}
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#FF3811] hover:bg-[#ff1911]">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center ">
              <h2 className="pb-4">
                Do not have any Account?{" "}
                <span className="text-center text-[#FF3811] font-bold">
                  <Link to={`/register`}>Register</Link>
                </span>
              </h2>
            </div>
          </div>
          <div className="text-center flex lg:text-left">
            <div className="">
              <img className="px-12 pb-6" src={authImg} alt="" />
              <div>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline hover:bg-[#FF3811] hover:text-white capitalize w-1/2 my-1"
                >
                  {/* <FaGooglePlusG></FaGooglePlusG> */}
                  Login with Google
                </button>
                <button className="btn btn-outline hover:bg-[#FF3811] hover:text-white capitalize w-1/2 my-1">
                  {/* <FaGithub></FaGithub> */}
                  Login with Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
