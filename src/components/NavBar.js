import React from "react";
import Random from "./Header/Random";
import SearchBar from "./Header/SearchBar";

const NavBar = ({ left }) => {
  return (
    <div className="flex flex-col h-10">
      <div className="flex items-center justify-center space-x-12 h-10">
        <SearchBar />

        {/* Random */}
        <Random teamColor={left} />
      </div>
    </div>
  );
};

export default NavBar;
