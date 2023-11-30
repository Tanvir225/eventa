import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";


const Main = () => {
    const location = useLocation()
    return (
        <div>
            <Outlet></Outlet>
            <div style={{display:location?.pathname === '/' ? 'none' : 'block'}}>
                <Footer ></Footer>
            </div>
        </div>
    );
};

export default Main;