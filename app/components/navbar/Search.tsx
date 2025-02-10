import React from "react";

const Search = () => {
  return (
    <div className=" flex items-center ">
      <input
        type="text"
        className="w-full p-2 text-gray-700 rounded-l-lg focus:outline-none"
        placeholder="Search"
      />
      <button className="bg-yellow-800 p-2 h-full w-20 rounded-r-lg">
        Search
      </button>
    </div>
  );
};

export default Search;
