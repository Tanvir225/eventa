import React from "react";
import { Button, Checkbox, Input } from "@material-tailwind/react";
import Lottie from "lottie-react";
import register from "../../../src/animation/register.json";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";








const User = () => {

  // submit user form
  const handleSubmit = (e)=>{

    e.preventDefault();

    const formData = new FormData(e.target)
    const email = formData.get('email');
      console.log(email);
      console.log('object');
  }

















  return (
    <>
      <Helmet>
        <title>Eveta | User - Reg</title>
      </Helmet>

      <Navbar></Navbar>
      <div className="bg-base-100 w-[80%] mx-auto md:w-1/2 shadow-lg rounded lg px-10 py-10 space-y-6 m-5">
        <p className="text-2xl text-center font-bold divider">
          User Registration
        </p>

        <div className="flex items-center justify-between gap-5 ">
          <div className="w-[40%] -mt-16">
            <Lottie animationData={register} className="w-full h-full"></Lottie>
          </div>

          <form onSubmit={handleSubmit} className="flex-grow space-y-5">
            <div>
              <Input variant="outlined" label="Your name" type="text" name="name" />
            </div>

            <div>
              <Input variant="outlined" type="email" required label="email" name="email" />
            </div>

            <div>
              <Input variant="outlined" type="tel" label="phone" name="phone" />
            </div>

            <div>
              <Input variant="outlined" type="text" label="Photo - Url" name="photo" />
            </div>

            <div>
              <Input variant="outlined" type="password" label="password" name="password" />
            </div>

            <div>
              <Checkbox
                color="indigo"
                variant="outlined"
                label="Allow terms and condition"
                name="password"
              />
            </div>

            <div>
              <Button className="w-full">Submit</Button>
            </div>
          </form>
        </div>

        <p className="text-center">
          Already have an acoount ?{" "}
          <Link to={"/login"} className="italic font-semibold underline">
            login
          </Link>
        </p>
      </div>
    </>
  );
};

export default User;
