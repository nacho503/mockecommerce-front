import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const searchBarStyle = {
    width: "600px", // Set the width to 600px
  };

  return (
    <div className="flex items-center bg-gray-200 rounded-full p-3">
      <input
        type="text"
        style={searchBarStyle} // Apply the custom style here
        className="w-full sm:w-96 bg-transparent focus:outline-none text-lg"
        placeholder="Search for everything at Mockecommerce online and in store"
      />
      <div className="bg-yellow-500 text-white p-2 rounded-full">
        <FontAwesomeIcon icon={faSearch} className="fa-lg text-black" />
      </div>
    </div>
  );
};

export default SearchBar;
