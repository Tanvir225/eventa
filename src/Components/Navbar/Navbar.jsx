import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";









const Navbar = () => {

    const user = true || ''
    const navigate = useNavigate()

    const handleLogout = ()=>{
        if (user) {
          toast.success('logout successfull')
        }
        else{
            navigate('/login')
        }
    }

    const links = <>
            <li><NavLink to={"/"}>Venues</NavLink></li>
            <li className="flex items-center gap-2">
              <img src="https://i.ibb.co/HpJ3VmR/man-4140048.png" className="w-10 rounded-full"/>
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
