import { Link } from "react-router-dom";
import authImg from "../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

  // const {createUser} = useContext(AuthContext);

  // const handleRegister = e =>{
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   console.log(name, email, password);

  //   createUser(email, password)
  //   .then((userCredential) => {
  //     // Signed up 
  //     const user = userCredential.user;
  //     console.log(user);
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorMessage, errorCode);
  //   });
  // }

  const [registerError, setRegisterError] = useState(null);
  const [success, setSuccess] = useState("");
  // step-04
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, name, photo);

    // reset message
    setRegisterError('');
    setSuccess('');

    if(password.length < 6){
      setRegisterError('Password must be longer than 6 characters');
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError('Password must have at least one uppercase Character');
      return;
    }
    else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~\-=`{}[\]:";'<>?,./]).{6,}$/.test(password)){
      setRegisterError('Password must have at least one special character');
      return;
    }

    // step-05
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully Registered.")
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });

      
      
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="px-12" src={authImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl font-bold justify-center align-middle text-center pt-8">
              Register Now
            </h1>
            <p className="text-center text-sm text-slate-500 pt-2">
              Have your own access
            </p>
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
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
              {registerError && (
                  <p className="text-red-700">{registerError}</p>
                )}
                {
                  success && <p className="text-sm text-green-700">{success}</p>
                }
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#FF3811] hover:bg-[#ff1911]" type="submit">
                  Register
                </button>
              </div>
            </form>
            <div className="text-center ">
              <h2 className="pb-4">
                Already have any Account?{" "}
                <span className="text-center text-[#FF3811] font-bold">
                  <Link to={`/login`}>Login</Link>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
