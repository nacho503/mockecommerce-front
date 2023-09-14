import React from "react";
import Logo from "./logo/Logo";
import DepartmentMenu from "./departmentsMenu/DepartmentsMenu";
import SearchBar from "./searchbar/SearchBar";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Logo />
          <DepartmentMenu />
          <div className="flex-grow"></div>
        </div>
        <SearchBar />
        <ul className="flex space-x-4 ml-4">
          <li>
            <a href="/">Home</a>
          </li>
          {/* Add more navigation links here */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
