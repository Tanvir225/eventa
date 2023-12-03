import React from "react";
import Lottie from "lottie-react";
import { Button, Input } from "@material-tailwind/react";
import login from "../../../src/animation/Login.json";
import Navbar from "../../Components/Navbar/Navbar";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ContextApi from "../../Hook/ContextApi";
import { AuthContext } from "../../Hook/AuthProvider";
import toast from "react-hot-toast";
import { useContext } from "react";
import { CategoryContext } from "../../Hook/CategoryProvider";





const Login = () => {

    //get Location
    const location = useLocation()
    console.log(location);

    //navigatie
    const navigate = useNavigate()

    //call contextapi
    const {logInUser,google} = ContextApi(AuthContext)
    const {selectedCategory} = useContext(CategoryContext)

    //handle Login
    const handleLogin = (e)=>{
      e.preventDefault()

      const formData = new FormData(e.currentTarget);
      const email = formData.get('email');
      const password = formData.get('password');

      //check user
      logInUser(email,password)
      .then(result=>{
        const user = result.user
        toast.success('Login successful')
        navigate(location?.state ? location.state : `/home/${selectedCategory}`)

      })
      .catch(e=>{
        toast.error(e.message.slice(10,e.message.length))
      })
    }

    //handle media
    const handleMedia = (media)=>{
        media()
        .then(result=>{
          const user = result.user
          toast.success('login successful')
          navigate(location?.state ? location.state : `/home/${selectedCategory}`)
        })
        .catch(e=>{
          console.log(e.message);
          toast.error(e.message.slice(10,e.message.length))
        })
    }




  return (
    <div>
      <Helmet>
        <title>Eveta | Login</title>
      </Helmet>

      <Navbar></Navbar>

      <div className="w-[80%] m-5 md:w-1/2 px-5 py-5 mx-auto md:min-h-screen bg-base-100 shadow-lg rounded-lg flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold divider">Login now</h2>
        <div className="flex  justify-center items-center ">
          <div className="w-[40%] -mt-16 md:-mt-0 ">
            <Lottie animationData={login} className="w-full h-full"></Lottie>
          </div>

          <form onSubmit={handleLogin} className=" flex-grow space-y-6">
            <div className="">
              <Input
                name="email"
                variant="outlined"
                color="blue-gray"
                label="email"
                type="email"
                required
              />
            </div>

            <div className="">
              <Input name="password" type="password" variant="outlined" label="password" />
            </div>

            <div className="text-center">
              <Button type="submit" className="w-full">Submit</Button>
            </div>
          </form>
        </div>

        <div className="divider text-lg font-semibold">Or</div>

        <div className=" text-center space-y-5">
          <p className="text-xl  font-semibold">Continue with</p>
          <div className="flex justify-center gap-5">
            <button onClick={()=>handleMedia(google)} className="btn btn-outline md:w-full">
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
