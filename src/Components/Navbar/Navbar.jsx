import { Link, NavLink } from "react-router-dom";











const Navbar = () => {


    const links = <>
            <li><NavLink to={"/"}>Places</NavLink></li>
    </>





  return (
    <div className="navbar justify-between bg-[#d46a6a] px-10 py-6 text-lg text-white">

      <div className="">
        <Link to={"/"}  className=" font-semibold text-2xl">Eventa</Link>
      </div>

      <div className=" ">

        <ul className="flex items-center gap-5 ">
            {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
