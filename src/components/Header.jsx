import React from "react";
import CardFilter from "./CardFilter";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div>
      <CardFilter />
      <SearchBar />
    </div>
  );
};

export default Header;
