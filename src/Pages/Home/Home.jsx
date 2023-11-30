import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Service from "../../Components/Service/Service";
import Card from "../../Components/Card/Card";
import Review from "../../Components/Review/Review";
import Marquee from "react-fast-marquee";

const Home = () => {

    //get id 
    const { id } = useParams();


    // // navigate
    // const navigate = useNavigate()

    //get data
    const data = useLoaderData()


    // //function for handle Change
    // const handleSelect = (e)=>{
    //     e.preventDefault()
    //     const category = e.target.value;
    //     navigate(`/${category}`)

    // }

    //filtered data
    const filterData = data.filter(d => d.category === id.toLowerCase())
    console.log(filterData);

    //fake review 
    const review = [
        {
            id: 1,
            name: "Tanvir Rehman",
            image: "https://i.ibb.co/HpJ3VmR/man-4140048.png",
            reviews: "Outstanding service from start to finish. The eventa team went above and beyond to meet our needs."
        },
        {
            id: 2,
            name: "Thoufa AKter",
            image: "https://i.ibb.co/HpJ3VmR/man-4140048.png",
            reviews: "Outstanding service from start to finish. The eventa team went above and beyond to meet our needs."
        },
        {
            id: 3,
            name: "Muktila",
            image: "https://i.ibb.co/HpJ3VmR/man-4140048.png",
            reviews: "Outstanding service from start to finish. The eventa team went above and beyond to meet our needs."
        },
    ]










    return (
        <div>
            <Navbar></Navbar>


            <div className="relative">
                <Slider></Slider>
                <div className="w-1/2 mx-auto  z-20  left-[27%] -bottom-[15%] absolute  bg-slate-100 shadow-lg rounded-lg">
                    <form className='w-full text-yellow-600 p-10 font-semibold'>
                        <select className="select w-full select-secondary ">
                            <option disabled selected>What Are You Looking For</option>
                            <option>Shopping</option>
                            <option>Booking</option>
                            <option>Car</option>
                        </select>
                    </form>
                </div>
            </div>



            <div className="mt-24">
                <Service></Service>
            </div>

            <div className="mt-10 container mx-auto space-y-10">
                <h2 className="text-2xl  text-center font-bold text-blue-900 ">Memories in Bloom with <span className="text-yellow-500">featured</span></h2>
                <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        filterData && filterData.map(data => <Card key={data.id} data={data}></Card>)
                    }
                </div>
            </div>

            <div className="mt-10 space-y-5">
                <h2 className="text-2xl  text-center font-bold text-blue-900 "> Your Vision, Our <span className="text-yellow-500">Commitment.</span></h2>


                <Marquee>
                    <Review review={review}></Review>
                </Marquee>


            </div>
        </div>
    );
};

export default Home;