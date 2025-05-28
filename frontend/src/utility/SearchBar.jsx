import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <>
      <div className="mt-2 ">        
        <input type="search" required placeholder="Search" 
        className="border-2 w-100 border-gray-600 p-2 rounded
        md:w-100 lg:w-100" />
      </div>
    </>
  );
}

export default SearchBar;
