import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Index from "../Pages/Index/Index";



const myCreatedRoute = createBrowserRouter([
    {   
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Index></Index>
            },
        ]
    }
]);

export default myCreatedRoute;