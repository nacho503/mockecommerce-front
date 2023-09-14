import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/MockecommerceLogo.png";

const Logo: React.FC = () => {
  return (
    <div className="max-w-[300px] flex-shrink-0 relative">
      <Link to="/" className="group relative">
        <div className="group-hover:bg-blue-700 p-2 rounded-full transition-bg duration-300">
          <img src={logo} alt="Logo" className="h-auto w-full object-contain" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
