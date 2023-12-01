import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Main = () => {
    const location = useLocation()
    return (
        <div>
            <Outlet></Outlet>
            <div style={{display:location?.pathname === '/' ? 'none' : 'block'}}>
                <Footer ></Footer>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;