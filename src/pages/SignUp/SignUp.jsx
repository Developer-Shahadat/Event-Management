import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const SignUp = () => {
    const [signup,setSignup] = useState('')
    const [success,setSuccess] = useState()
    const [password,setPassword] = useState(false)
    const handleClickSignUp = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkBox = e.target.terms.checked;
        setSignup("")
        setSuccess("")
    //console.log(name,email,password);
    if(password.length < 6){
        setSignup("Six equal or Six above")
        return;
    }
    else if(!/[A-Z]/.test(password)){
        setSignup('To UpperCase')
        return
    }
    else if (!checkBox) {
        setSignup('please accepted the terms and Condtion');
        return;
      }
         createUserWithEmailAndPassword(auth,email,password)
         .then(result => {
            console.log(result.user);
           setSuccess('SuccessFul')
         }) 
         .catch(error => {
            alert('Error Message',error)
            setSignup(error.message)
         })

    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleClickSignUp} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name </span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
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
              <div className="my-5">
                  <input type="checkbox" name="terms" id="" />
                  <span className="ml-2">Accept Our Terms And Condition</span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
             
            </form>
            <div>
                {
                    signup && <p>{signup}</p>
                }
            </div>
            <div>
                {
                    success && <p>{success}</p>
                }
            </div>
            <div>
                <p className="m-2">Already have an account? <Link to="/login"><a >Log In</a></Link></p>
             </div>
          </div>
        </div>
    </div>
  );
};

export default SignUp;
