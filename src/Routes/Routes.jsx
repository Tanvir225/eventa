import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Index from "../Pages/Index/Index";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import User from "../Pages/Register/User";
import Vendor from "../Pages/Register/Vendor";
import Venues from "../Pages/Venues/Venues";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details/Details";




const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Index></Index>
            },

            {
                path: "/home/:id",
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },

            {
                path: "/login",
                element: <Login></Login>,

            },

            {
                path: "/user-reg",
                element: <User></User>,

            },

            {
                path: "/vendor-reg",
                element: <Vendor></Vendor>,

            },

       

            {
                path: "/:category/venues",
                element: <PrivateRoute>
                    <Venues></Venues>
                </PrivateRoute>,
                loader: () => fetch('/data.json')

            },
            {
                path: "/:id/details",
                element: <PrivateRoute>
                   <Details></Details>
                </PrivateRoute>,
                loader: () => fetch('/data.json')

            },
        ]
    }
]);

export default myCreatedRoute;