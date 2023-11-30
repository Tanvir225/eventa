import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Service from "../../Components/Service/Service";


const Home = () => {

    const {id} = useParams()










    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Service></Service>
        </div>
    );
};

export default Home;