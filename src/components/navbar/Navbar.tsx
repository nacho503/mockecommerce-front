import React from "react";
import logo from "../../assets/images/MockecommerceLogo.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="max-w-[300px] flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-auto w-full object-contain"
              />
            </Link>
          </div>
          <ul className="flex space-x-4 ml-4">
            <li>
              <a href="/">Home</a>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
