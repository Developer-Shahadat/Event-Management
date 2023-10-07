import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import Footer from "../Footer/Footer";


const Home = () => {
    const dataLoad = useLoaderData()
    return (
        <div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 ">
            {
                dataLoad.map(card => <Cards  card={card}></Cards>)
            }
            </div>
            <Footer></Footer> 
        </div>
    );
};

export default Home;