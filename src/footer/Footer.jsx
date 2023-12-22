import icon1 from "../assets/facebook.png"
import icon2 from "../assets/youtube.png"
import icon3 from "../assets/twitter.png"
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="bg-black">
      <footer className="footer p-10 w-10/12 mx-auto text-[#D5FFD0]">
        <aside>

          <p>
            TaskJET Task Management Service.
            <br />
            Elevating Student Success through Seamless Task Management
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <Link to='/facebook'><img src={icon1} className="w-8" /></Link>
            <Link to='/youtube'><img src={icon2} className="w-8" /></Link>
            <Link to='/twitter'><img src={icon3} className="w-8" /></Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
