import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";
import { MdLogin } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { GoDotFill } from "react-icons/go";

function Navbar(props) {
  const [mblUlShow, SetMblUlShow] = useState(false);

  const handleMobileShow = () => {
    SetMblUlShow(!mblUlShow);
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
      <NavLink className="text-[#D5FFD0] " to="/dashboard">
        Dashboard
      </NavLink>
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
            <h3 className="text-[#279EFF] text-2xl">TaskJET</h3>
          </div>
          <div>
            <MdLogin className="w-6 h-6 lg:w-12 lg:h-12 text-[#279EFF] font-bold" />
          </div>
        </div>
        <ul className={`mbl-ul ${mblUlShow && "mbl-ul-show"} `}>{navlinks}</ul>
      </div>
      {/* ----------------- mobile device navbar end--------------- */}

      {/* <!-- ========== Large device navbar========== --> */}

      <div className=" hidden lg:block  shadow relative ">
        <div className="flex text-white justify-center gap-20 items-center py-5">
          <div>
            <h3 className="text-[#279EFF] text-2xl">TaskJET</h3>
          </div>

          <ul className="flex gap-16 text-lg">{navlinks}</ul>

          <Link to='/login'>
            <MdLogin className="w-6 h-6 lg:w-8 lg:h-8 text-[#279EFF] font-bold" />
          </Link>
        </div>
      </div>

      {/* <!-- ========== END Large device navbar========== --> */}
    </div>
  );
}

export default Navbar;
