import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import Footer from "../Footer/Footer";


const Home = () => {
    const dataLoad = useLoaderData()
    return (
        <>
        <div>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/jv6nW1F/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration-1284-29.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Education Purpose</h1>
            <p className="mb-5">Join our upcoming education and training event, designed to enhance your skills and knowledge in [specific field/topic]. Our expert instructors will provide hands-on learning experiences and valuable insights to help you excel in your career.</p>
            
            </div>
        </div>
        </div>
        </div>
        <div className="mt-10 ">
            <h2 className="text-3xl text-center">Our Service</h2>
        </div>
           <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 ">
            {
                dataLoad.map(card => <Cards  card={card}></Cards>)
            }
            </div>
            <Footer></Footer> 
        </>
    );
};

export default Home;