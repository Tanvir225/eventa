import React from "react";
import Lottie from "lottie-react";
import { Button, Input } from "@material-tailwind/react";
import login from "../../../src/animation/Login.json";
import Navbar from "../../Components/Navbar/Navbar";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="w-[80%] m-5 md:w-1/2 px-5 py-5 mx-auto md:min-h-screen bg-base-100 shadow-lg rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-10">Login now</h2>
        <div className="flex  justify-center items-center ">
          <div className="w-[40%] -mt-16 md:-mt-0 ">
            <Lottie animationData={login} className="w-full h-full"></Lottie>
          </div>

          <form className=" flex-grow space-y-6">
            <div className="">
              <Input
                name="email"
                variant="outlined"
                color="blue-gray"
                label="email"
              />
            </div>

            <div className="">
              <Input name="password" variant="outlined" label="password" />
            </div>

            <div className="text-center">
              <Button className="w-full">Submit</Button>
            </div>
          </form>
        </div>

        <div className="divider text-lg font-semibold">Or</div>

        <div className=" text-center space-y-5">
          <p className="text-xl  font-semibold">Continue with</p>
          <div className="flex justify-center gap-5">
            <button className="btn btn-outline md:w-full">
              <FaGoogle></FaGoogle> google
            </button>

            <button className="btn btn-outline md:w-full ">
              <FaFacebook></FaFacebook> FACEBOOK
            </button>
          </div>
        </div>

        <p className="text-center text-xl font-semibold mt-5">Create acoount as a</p>
        <div className="flex w-full mt-5">
          <Link to={"/user-reg"} className="grid btn h-10 flex-grow font-semibold card bg-base-300 rounded-box place-items-center">
            User
          </Link>
          <div className="divider divider-horizontal">OR</div>
          <Link to={"/vendor-reg"} className="btn grid h-10 flex-grow card bg-base-300 font-semibold rounded-box place-items-center">
            Vendor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
