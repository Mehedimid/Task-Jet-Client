import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import home from "../../assets/house.png";
import { FaHome, FaTasks, FaUserShield } from "react-icons/fa";
import { VscDiffAdded } from "react-icons/vsc";

function DashNav(props) {
  const { user } = useAuth();
  const email = user?.email;

  const navlinks = (
    <>
      <Link className="text-lg font-semibold" to={`/dashboard`}>
        <FaUserShield className="inline" /> Activity
      </Link>
      <Link
        className="text-lg font-semibold"
        to={`/dashboard/${email}/my-task`}>
        <FaTasks className="inline" /> My Task
      </Link>
      <Link
        className="text-lg font-semibold"
        to={`/dashboard/${email}/add-task`}>
        <VscDiffAdded className="inline" /> Add Task
      </Link>
    </>
  );

  return (
    <div className="bg-[#279EFF]">
      <div className="navbar text-black sizing mx-auto">
        {/* navbar start  */}
        <Link to="/" className="navbar-start">
          <FaHome className="text-4xl" />
        </Link>

        {/* mobile device center */}
        <div className="dropdown">
          {/* mobile device start nav */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-black bg-opacity-70  text-white text-center rounded-box w-40 py-5">
            {navlinks}
          </ul>
        </div>

        {/* large device center nav  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-base">
            {navlinks}
          </ul>
        </div>

        {/* navbar end  */}
        <div className="navbar-end">
          <div className="flex flex-col items-center justify-center">
            <img src={user?.photoURL} className="w-12 border-2 border-white" />
            <p className="hidden md:block mt-1 text-[#D5FFD0] font-semibold">
              {user?.displayName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashNav;
