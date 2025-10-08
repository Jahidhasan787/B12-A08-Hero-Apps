import React from "react";
import logo from '../../assets/logo.png'
import { Github } from "lucide-react";



const Navbar = () => {

    const links = <>
    <li className="m-2">Home</li>
    <li className="m-2">Apps</li>
    <li className="m-2">Installation</li>
    </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm md:px-[40px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img src={logo} alt="" className="w-[2rem] h-[2rem]"/>HERO.IO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><Github /> Contribute</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
