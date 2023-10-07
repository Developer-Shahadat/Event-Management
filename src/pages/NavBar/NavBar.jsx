import { NavLink } from "react-router-dom";

const NavBar = () => {
    const navLink = <>
        <NavLink  to="/home" className={({ isActive, isPending }) =>
                                        isPending ? 'pending' : isActive ? 'text-[#FF444A] underline' : ''}><li><a href="">Home</a></li></NavLink>
        <NavLink  to="/service" className={({ isActive, isPending }) =>
                                        isPending ? 'pending' : isActive ? 'text-[#FF444A] underline' : ''}><li><a href="">Service</a></li></NavLink>
        <NavLink  to="/about us" className={({ isActive, isPending }) =>
                                        isPending ? 'pending' : isActive ? 'text-[#FF444A] underline' : ''}><li><a href="">About Us</a></li></NavLink>
        <NavLink  to="/login" className={({ isActive, isPending }) =>
                                        isPending ? 'pending' : isActive ? 'text-[#FF444A] underline' : ''}><li><a href="">Log In</a></li></NavLink>
    </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">EduNation</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
            <li tabIndex={0}>
              
            </li>
           
          </ul>
        </div>
        <div className="navbar-end">
         <NavLink to="/signup"> <a className="btn">Sign Up</a></NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
