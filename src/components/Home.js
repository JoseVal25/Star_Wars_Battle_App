import React from "react";
import NavBar from "./NavBar";
import Cards from "./Cards/Cards";
import List from "./List/List";

const Home = () => {
  return (
    <div>
      <div className="flex flex-1 items-center justify-center h-20">
        <h3 className="text-5xl">Logo Title | Star Wars</h3>
      </div>
      <div className="flex items-center justify-around mt-10">
        {/* NavBar Left*/}
        <NavBar left={true} />
        {/* Navbar Right */}
        <NavBar left={false} />
      </div>
      <Cards />

      <List />
    </div>
  );
};

export default Home;
