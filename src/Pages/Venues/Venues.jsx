import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { FaFilter, FaSearch } from "react-icons/fa"
import { Input, Option, Select } from "@material-tailwind/react";
import Card from "../../Components/Card/Card";

const Venues = () => {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <Navbar></Navbar>
            we are working on it

        </div>
    );
};

export default Venues;