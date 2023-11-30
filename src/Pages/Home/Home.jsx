import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Service from "../../Components/Service/Service";


const Home = () => {

    //get id 
    const {id} = useParams();

    //get data
    const data = useLoaderData()

    //filtered data
    const filterData = data.filter(d => d.category === id.toLowerCase())
    console.log(filterData);










    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Service></Service>
        </div>
    );
};

export default Home;