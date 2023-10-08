import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="text-center mt-72 text-3xl">
            <h1>Opps! Page Not Found</h1>
            <button className="btn btn-warning mt-4"><Link to="/home">Go To Home</Link></button>
        </div>
    );
};

export default Error;