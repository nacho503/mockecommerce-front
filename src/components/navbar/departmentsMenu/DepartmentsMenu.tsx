import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";

const DepartmentMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex bg-blue-500 text-white p-2 rounded-full transition-bg duration-300 hover:bg-blue-700"
      >
        <FontAwesomeIcon icon={faThLarge} className="text-white fa-lg mr-2" />{" "}
        <span className="font-bold">Departments</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 p-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {/* Render your list of categories here */}
          <ul>
            <li>Clothing</li>
            <li>Jewelry</li>
            <li>Electronics</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DepartmentMenu;
