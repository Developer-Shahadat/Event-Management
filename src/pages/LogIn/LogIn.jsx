
const LogIn = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form  className="card-body">
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
                // type={password? "text" : "password"}
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              {/* <span onClick={() => setPassword(!password)} className="-top-8 ml-72 relative   ">
                    {
                      password ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible ></AiFillEyeInvisible>
                    }
                  </span> */}
            <div className="my-5">
                <input type="checkbox" name="terms" id="" />
                <span className="ml-2">Accept Our Terms And Condition</span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
           
          </form>
          {/* <div>
              {
                  signup && <p>{signup}</p>
              }
          </div>
          <div>
              {
                  success && <p>{success}</p>
              }
          </div> */}
          <div>
              {/* <p className="m-2">Already have an account? <Link to="/login"><a >Log In</a></Link></p> */}
           </div>
        </div>
      </div>
        </div>
    );
};

export default LogIn;