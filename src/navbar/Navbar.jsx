import { NavLink } from "react-router-dom";
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
      <li className="text-[#DFF6FF]">
        <NavLink>Home</NavLink>
      </li>
      <li className="text-[#DFF6FF]">
        <NavLink>Home</NavLink>
      </li>
      <li className="text-[#DFF6FF]">
        <NavLink>Home</NavLink>
      </li>
      <li className="text-[#DFF6FF]">
        <NavLink>Home</NavLink>
      </li>
    </>
  );

  return (
    <div className="ubuntu-font">
      {/* ----------------- mobile device navbar start--------------- */}
      <div>
        <div className="flex lg:hidden justify-between pr-5 items-center bg-[#06283D]">
          <div onClick={handleMobileShow} className="icon">
            {mblUlShow ? (
              <ImCross className="w-6 h-6" />
            ) : (
              <FaAlignJustify className="w-6 h-6" />
            )}
          </div>
          <div>
            <h3 className="text-[#47B5FF] text-2xl">TaskJET</h3>
          </div>
          <div>
            <MdLogin className="w-6 h-6 lg:w-12 lg:h-12 text-[#47B5FF] font-bold" />
          </div>
        </div>
        <ul className={`mbl-ul ${mblUlShow && "mbl-ul-show"}`}>{navlinks}</ul>
      </div>
      {/* ----------------- mobile device navbar end--------------- */}

      {/* <!-- ========== Large device navbar========== --> */}

      <div className="bg-[#06283D] hidden lg:block w-10/12 mx-auto shadow relative">
        <div className="flex text-white justify-center gap-20 items-center py-5">
          <div>
            <h3 className="text-[#47B5FF] text-2xl">TaskJET</h3>
          </div>

          <ul className="flex gap-16 text-lg">{navlinks}</ul>

          <div>
            <MdLogin className="w-6 h-6 lg:w-8 lg:h-8 text-[#47B5FF] font-bold" />
          </div>
        </div>

        <div className="absolute w-full h-full top-0 ">
        <div className="relative">
        <GoDotFill className="text-white any" />
        </div>
        </div>
      </div>

      {/* <!-- ========== END Large device navbar========== --> */}
    </div>
  );
}

export default Navbar;
