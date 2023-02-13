import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  // TODO: search Endpoint
  const handleSearchInput = () => {
    console.log(input);
    setInput("");
  };
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="focus:outline-none font-semibold
        bg-transparent border-2 border-zinc-500  rounded-sm py-1 px-2 -ml-10"
      />
      <button onClick={handleSearchInput} id="button">
        <MagnifyingGlassIcon className="h-8 w-8 ml-2 " />
      </button>
    </div>
  );
};

export default SearchBar;
