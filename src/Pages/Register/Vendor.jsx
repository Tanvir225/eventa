import { Button, Checkbox, Input, Option, Select } from "@material-tailwind/react";
import Lottie from "lottie-react";

import { Link, useNavigate } from "react-router-dom";
import register from "../../../src/animation/register.json";
import Navbar from "../../Components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import ContextApi from "../../Hook/ContextApi";
import { AuthContext } from "../../Hook/AuthProvider";
import { updateProfile } from "firebase/auth";

const Vendor = () => {


  // useContext api
  const { createUser } = ContextApi(AuthContext)

  //navigate
  const navigate = useNavigate()


  // submit vendor form
  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const photo = formData.get('photo');
    const password = formData.get('password');

    //call context api
    createUser(email, password)
      .then(result => {
        const user = result.user
        console.log(user);

        //update profile
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
        toast.success('user created successfully')
        navigate('/login')

      })
      .catch(e => {
        console.log(e.message);
        toast.error(e.message.slice(10, e.message.length))
      })

  }










  return (
    <>
      <Helmet>
        <title>Eveta | Vendor - Reg</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="bg-base-100 w-[80%] mx-auto md:w-1/2 shadow-lg rounded lg px-10 py-10 space-y-6 m-5">
        <p className="text-2xl text-center font-bold divider">
          {" "}
          Vendor Registration
        </p>

        <div className="flex items-center ">
          <div className="w-[40%] -mt-16">
            <Lottie animationData={register} className="w-full h-full"></Lottie>
          </div>

          <form onSubmit={handleSubmit} className="flex-grow space-y-5">
            <div>
              <Input variant="outlined" label="Your name" name="name" />
            </div>

            <div>
              <Input variant="outlined" type="email" label="email" name="email" />
            </div>

            <div>
              <Input variant="outlined" label="phone" name="phone" />
            </div>

            <div>
              <Input variant="outlined" label="Photo - Url" name="photo" />
            </div>

            <div>
              <Select label="Select Vendor Type" success>
                <Option>Booking</Option>
                <Option>Shopping</Option>
                <Option>Car</Option>

              </Select>
            </div>

            <div>
              <Input variant="outlined" type="password" label="password" name="password" />
            </div>

            <div>
              <Checkbox
                color="indigo"
                variant="outlined"
                label="Allow terms and condition"
                name="terms"
              />
            </div>

            <div>
              <Button type="submit" className="w-full">Submit</Button>
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

export default Vendor;
