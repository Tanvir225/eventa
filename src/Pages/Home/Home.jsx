import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Slider from "../../Components/Slider/Slider";
import Service from "../../Components/Service/Service";
import Card from "../../Components/Card/Card";
import Review from "../../Components/Review/Review";
import Marquee from "react-fast-marquee";
import Partner from "../../Components/Partner/Partner";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useContext } from "react";
import { CategoryContext } from "../../Hook/CategoryProvider";

const Home = () => {
  //get id
  const { id } = useParams();

  //get data
  const data = useLoaderData();

//   // navigate
//   const navigate = useNavigate();

//   //get context
//   const { selectedCategory, setCategory } = useContext(CategoryContext);

//   //function for handle Change
//   const handleSelect = (e) => {
//     e.preventDefault();

//     const selectedCategory = e.target.value;
//     setCategory(selectedCategory);

//     if (selectedCategory) {
//       navigate(`/home/${selectedCategory}`);
//     }
//   };

  //filtered data
  const filterData = data.filter((d) => d.category === id.toLowerCase());
  console.log(filterData);

  //fake review
  const review = [
    {
      id: 1,
      name: "Tanvir Rehman",
      image: "https://i.ibb.co/HpJ3VmR/man-4140048.png",
      reviews:
        "Outstanding service from start to finish. The eventa team went above and beyond to meet our needs.",
    },
    {
      id: 2,
      name: "Thoufa AKter",
      image: "https://i.ibb.co/HpJ3VmR/man-4140048.png",
      reviews:
        "Outstanding service from start to finish. The eventa team went above and beyond to meet our needs.",
    },
    {
      id: 3,
      name: "Muktila",
      image: "https://i.ibb.co/HpJ3VmR/man-4140048.png",
      reviews:
        "Outstanding service from start to finish. The eventa team went above and beyond to meet our needs.",
    },
  ];

  return (
    <div>
      <Navbar></Navbar>

      <div className="relative">
        <Slider></Slider>
        <div className="w-10/12 md:w-1/2 mx-auto  z-40 left-10 top-[85%]  md:left-[27%] md:-bottom-[15%] md:top-[90%]  absolute  bg-slate-100 shadow-lg rounded-lg">
          <form className="w-full text-yellow-600 p-10 font-semibold" >
            <select className="select w-full select-secondary " >
              <option disabled selected>
                What Are You Looking For
              </option>
              <option>Shopping</option>
              <option>Booking</option>
              <option>Car</option>
            </select>
          </form>
        </div>
      </div>

      <div className="mt-28">
        <Service></Service>
      </div>

      <div className="mt-10 container mx-auto space-y-10">
        <h2 className="text-2xl  text-center font-bold  text-blue-900 divider divider-warning ">
          Memories in Bloom with{" "}
          <span className="text-yellow-500">featured</span>
        </h2>
        <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filterData &&
            filterData.map((data) => <Card key={data.id} data={data}></Card>)}
        </div>

        <div className="text-center divider divider-warning">
          <button className="btn bg-[#b76e79] w-72 text-white btn-outline  ">
            Explore more
          </button>
        </div>
      </div>

      <div className="mt-20 space-y-10">
        <h2 className="text-2xl  text-center font-bold text-blue-900 ">
          Become a part of<span className="text-yellow-500"> Eventa.</span>
        </h2>
        <Partner></Partner>
      </div>

      <div className="mt-10 space-y-5">
        <h2 className="text-2xl  text-center font-bold text-blue-900 ">
          {" "}
          Your Vision, Our <span className="text-yellow-500">Commitment.</span>
        </h2>

        <Marquee speed={100}>
          <Review review={review}></Review>
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
