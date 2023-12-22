import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";
import { MdLogin } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { MdAccountBox } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import { FaAngleDown } from "react-icons/fa";

function Navbar(props) {
  const { user, loading, logOutUser } = useAuth();
  const [mblUlShow, SetMblUlShow] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);

  const handleMobileShow = () => {
    SetMblUlShow(!mblUlShow);
  };

  const handleAccountClick = () => {
    setAccountDropdown(!accountDropdown);
  };

  const handleLogOut = () => {
    logOutUser().then((result) => console.log("logged out"));
  };

  const navlinks = (
    <>
      <NavLink className="text-[#D5FFD0] " to="/">
        Home
      </NavLink>
      <NavLink className="text-[#D5FFD0] " to="/about">
        About Us
      </NavLink>
      <NavLink className="text-[#D5FFD0] " to="/contact">
        Contact Us
      </NavLink>
      {!user?.email ? (
        loading ? (
          "..."
        ) : (
          ""
        )
      ) : (
        <NavLink className="text-[#D5FFD0]" to={`/dashboard`}>
          Dashboard
        </NavLink>
      )}
      {user?.email && (
        <div className="lg:hidden">
          <button
            onClick={handleLogOut}
            className="px-2 py-1 hvr-bounce-to-top border-2 mx-auto w-full z-10 ">
            Logout
          </button>
        </div>
      )}
    </>
  );

  return (
    <div className="ubuntu-font ">
      {/* ----------------- mobile device navbar start--------------- */}
      <div>
        <div className="flex lg:hidden justify-between pr-5 items-center ">
          <div onClick={handleMobileShow} className="icon">
            {mblUlShow ? (
              <ImCross className="w-6 h-6" />
            ) : (
              <FaAlignJustify className="w-6 h-6" />
            )}
          </div>
          <div>
            <Link to='/' className="text-[#279EFF] text-2xl">TaskJET</Link>
          </div>
          {!user ? (
            loading ? (
              "..."
            ) : (
              <Link to="/login">
                <MdLogin className="w-6 h-6 lg:w-12 lg:h-12 text-[#279EFF] font-bold" />
              </Link>
            )
          ) : (
            <div>
              <img
                src={user?.photoURL}
                className="w-9 h-9 border-4 rounded-full border-[#279EFF]"
              />
            </div>
          )}
        </div>
        <ul className={`mbl-ul ${mblUlShow && "mbl-ul-show"} `}>{navlinks}</ul>
      </div>
      {/* ----------------- mobile device navbar end--------------- */}

      {/* <!-- ========== Large device navbar========== --> */}

      <div className=" hidden lg:block  shadow relative ">
        <div className="flex text-white justify-center gap-20 items-center py-5">
          <div>
            <Link to='/' className="text-[#279EFF] text-2xl">TaskJET</Link>
          </div>

          <ul className="flex gap-16 text-lg">{navlinks}</ul>

          {!user ? (
            loading ? (
              "..."
            ) : (
              <Link to="/login">
                <MdLogin className="w-6 h-6 lg:w-8 lg:h-8 text-[#279EFF] font-bold" />
              </Link>
            )
          ) : (
            <div className="relative">
              <button
                onClick={handleAccountClick}
                className="text-[#D5FFD0] text-lg">
                Account <FaAngleDown className="inline" />
              </button>
              {accountDropdown && (
                <div className="absolute mt-2 text-[#40F8FF] p-2 w-44 rounded shadow bg-[#0C356A]">
                  {/* Dropdown menu items go here */}
                  <div className="px-5 flex gap-2 items-center">
                      <img
                      src={user?.photoURL}
                      className="w-9 h-9 border-4 rounded-full border-[#279EFF]"
                    />
                    {user?.displayName}
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="px-2 py-1 hvr-bounce-to-top border-2 mx-auto w-full my-3">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* <!-- ========== END Large device navbar========== --> */}
    </div>
  );
}

export default Navbar;
