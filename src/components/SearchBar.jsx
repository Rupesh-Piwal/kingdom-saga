import React from "react";

const SearchBar = () => {
  return (
    <div className="flex gap-5 mt-[50px] items-center justify-center ">
      <input
        className="border border-gray-400 outline-none py-1 w-[300px]"
        type="text"
      />
      <button className="bg-gray-600 px-4 py-1.5 rounded text-white">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
