import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/LOGO (2).png"
const Navbar = () => {
    const Manu = <>
        <li><NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-blue-700 text-white" : "hover:bg-blue-700 hover:text-white"
            }
        >
            Blog
        </NavLink></li>
        <li><NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-blue-700 text-white" : "hover:bg-blue-700 hover:text-white"
            }
        >
            Offer
        </NavLink></li>
        <li><NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-blue-700 text-white" : "hover:bg-blue-700 hover:text-white"
            }
        >
            Airlines
        </NavLink></li>
        <li><NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-blue-700 text-white" : "hover:bg-blue-700 hover:text-white"
            }
        >
            About
        </NavLink></li>

    </>
    return (
        <div className="navbar max-w-7xl fixed  border p-4 lg:px-20 bg-white bg-opacity-95    ">
            <div className="navbar-start"> 
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Manu}
                    </ul>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3 text-lg font-semibold">
                    {Manu}
                </ul>
            </div>
            <div className="navbar-end">
                <a className=" text-xl font-semibold bg-blue-700 rounded-lg py-2 px-4 text-center text-white">Sign In</a>
            </div>
        </div>
    );
};

export default Navbar;