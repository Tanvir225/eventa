import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ContextApi from "../../Hook/ContextApi";
import { AuthContext } from "../../Hook/AuthProvider";









const Navbar = () => {
    //context Api
    const {user,logOut} = ContextApi(AuthContext) 

    //navigate
    const navigate = useNavigate()


    const handleLogout = ()=>{

        if (user) {
          logOut()

          .then(result =>{
            toast.success('logout successful')
          })
          .catch(e=>{
            console.log(e.message);
            toast.error(e.message.slice(10,e.message.length))
          })
          
        }
        else{
            navigate('/login')
        }
    }

    const links = <>
            <li><NavLink to={"/venues"}>Venues</NavLink></li>
            <li className="flex items-center gap-2">
              <img src={user ? user?.photoURL: 'https://i.ibb.co/HpJ3VmR/man-4140048.png'} className="w-10 rounded-full"/>
              <button onClick={handleLogout}>{user ? 'Logout' : 'Login'}</button>
              </li>
    </>





  return (
    <div className="navbar justify-between bg-[#d46a6a] px-10 py-6 text-lg text-white">

      <div className="">
        <Link to={"/"}  className=" font-semibold text-2xl">Eventa</Link>
      </div>

      <div className=" ">

        <ul className="flex items-center gap-10 ">
            {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
