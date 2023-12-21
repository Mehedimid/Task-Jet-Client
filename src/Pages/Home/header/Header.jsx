import { Link } from "react-router-dom";
import "./header.css"

function Header(props) {
    return (
        <div className="border-4 border-black banner min-h-screen flex justify-center items-center flex-col">
       
          <div className="content">
            <h1 className="title-font text-3xl lg:text-4xl text-center mx-2">Supercharge Your Productivity</h1>
          </div>
          <p className="hidden lg:block w-11/12 md:w-1/2 text-center my-5 text-[#D5FFD0]">
          At TaskJET, Premier Task Management Solution for Students. Dive into a world of effortless organization with our user-friendly to-do lists, designed to simplify your life. Join us today and discover the art of streamlined living!
          </p>

          <p className="lg:hidden w-11/12 md:w-1/2 text-center my-5 text-[#D5FFD0] text-sm">
          Premier Task Management Solution for Students experience with our user-friendly to-do lists
          </p>

          <div>
            <Link to='/register' className="btn-common hvr-bounce-to-top">Let's Explore</Link>
          </div>
            
        </div>
    );
}

export default Header;