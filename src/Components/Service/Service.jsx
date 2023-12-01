import Marquee from "react-fast-marquee";
import shopping from "../../../src/animation/shopping.json";
import booking from "../../../src/animation/intro.json";
import rental from "../../../src/animation/rental.json";
import wedding from "../../../src/animation/wedding.json";
import Lottie from "lottie-react";

const Service = () => {
  return (
    <div className="space-y-3 mt-10">

      <h2 className="text-3xl  mb-10 text-blue-950 text-center font-bold">
        Excellence in Every Service,
        
        <span className="text-yellow-500"> Every Time.</span>
      </h2>

      <Marquee speed={100}  pauseOnClick>
        <div className="flex justify-center items-center gap-16 ml-5">
          <div className="flex flex-col justify-center items-center bg-blue-50 p-5 shadow-lg rounded-lg">
            <Lottie animationData={booking} style={{ height: 150 }}></Lottie>
            <p className="font-semibold text-lg  px-4 py-2 ">Booking</p>
          </div>

          <div className="flex flex-col justify-center items-center  bg-blue-50 p-5 shadow-lg rounded-lg">
            <Lottie animationData={shopping} style={{ height: 150 }}></Lottie>
            <p className="font-semibold text-lg  px-4 py-2 ">Shopping</p>
          </div>

          <div className="flex flex-col justify-center items-center  bg-blue-50 p-5 shadow-lg rounded-lg">
            <Lottie animationData={rental} style={{ height: 150 }}></Lottie>
            <p className="font-semibold text-lg  px-4 py-2 ">Wedding Car</p>
          </div>

          <div className="flex flex-col justify-center items-center  bg-blue-50 p-5 shadow-lg rounded-lg">
            <Lottie animationData={wedding} style={{ height: 150 }}></Lottie>
            <p className="font-semibold text-lg  px-4 py-2 ">Happy Wedding</p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Service;
