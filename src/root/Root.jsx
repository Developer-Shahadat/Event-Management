import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import NavBar from "../pages/NavBar/NavBar";


const Root = () => {
    return (
        <div>
           <NavBar></NavBar>
            <Outlet></Outlet>
            <Home></Home>
        </div>
    );
};

export default Root;