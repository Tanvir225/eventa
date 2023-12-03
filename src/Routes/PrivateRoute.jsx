
import { AuthContext } from "../Hook/AuthProvider";
import Loading from "../../src/animation/intro.json"
import Lottie from "lottie-react";
import ContextApi from "../Hook/ContextApi";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    //get context
    const {user,loading} = ContextApi(AuthContext)


    //location
    const location = useLocation()

    if (loading) {
        return <div className="w-52 h-52 mx-auto flex flex-col min-h-screen items-center justify-center"><Lottie animationData={Loading} className="w-full h-full "></Lottie></div>
    }

    if (user) {
        return children
    }

    
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;