import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Index from "../Pages/Index/Index";
import Home from "../Pages/Home/Home";



const myCreatedRoute = createBrowserRouter([
    {   
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Index></Index>
            },

            {
                path:"/:id",
                element: <Home></Home>,
                loader:()=> fetch('/data.json')
            },
        ]
    }
]);

export default myCreatedRoute;