import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";



const Details = () => {
    
    //all data
    const data = useLoaderData()
    console.log(data);
   



    //filter by category

    //useparams
    const {id} = useParams()
    console.log(id);

    const findData = data.find(data => data.id === id)
    console.log(findData);


    return (
        <div className="mb-2">
            <Navbar></Navbar>
            

            we are working on it
        </div>
    );
};

export default Details;