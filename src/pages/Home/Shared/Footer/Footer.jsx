import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.jpg";
import SocialIcon from "./SocialIcon";
const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer p-10 bg-black text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-evenly">
          <div>
            <img className="w-20 h-25 mb-10 rounded-2xl" src={logo} alt="" />
            <p>
              College Campign
              <br />
              Providing reliable source in College
            </p>
          </div>

          <div>
            <ul>
              <li>
                <Link to="/" className="link link-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link link-hover">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link link-hover">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/campegin" className="link link-hover">
                  Campegin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/" className="link link-hover">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link to="/" className="link link-hover">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/" className="link link-hover">
                  Cookie policy
                </Link>
              </li>
              <li>
                <Link to="/" className="link link-hover">
                  Camping
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <SocialIcon></SocialIcon>
          </div>
        </div>
        <p className="bg-black text-white text-center p-8">
          © 2023 Good Sports. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
