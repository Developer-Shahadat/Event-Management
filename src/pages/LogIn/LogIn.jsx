import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LogIn = () => {
  AOS.init({ duration : 2000});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState();
  const [password,setPassword] = useState(false)
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setError("");
    setSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // console.log(result.user);
        swal("Success", "You clicked the button!", "success");
      })
      .catch((error) => {
        // console.log(error.message);
        swal("Wrong Password or Email", "You clicked the button!", "warning");
      });
  };
  return (
    <div data-aos="fade-right" className="card mx-auto mt-10 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={password? "text" : "password"}
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <span onClick={() => setPassword(!password)} className="-top-8 ml-72 relative   ">
                      {
                        password ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible ></AiFillEyeInvisible>
                      }
                    </span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div>{error && <p className="ml-6">{error}</p>}</div>
      <div>{success && <p className="ml-6">{success}</p>}</div>
      <div>
                <p className="m-2">No Account?? <Link to="/signup"><a className="text-blue-600">Register</a></Link></p>
             </div>
    </div>
  );
};

export default LogIn;
