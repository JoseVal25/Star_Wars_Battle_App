import React from "react";

const Random = ({ teamColor, handleRandom }) => {
  return (
    <div
      onClick={handleRandom}
      className="hover:cursor-pointer relative flex items-center justify-center"
    >
      <div
        className={`h-10 w-10 rotate-60" id="cube ${
          teamColor ? "bg-blue-700" : "bg-red-700"
        } `}
      />
      <p className=" absolute text-2xl font-bold z-10 text-white">?</p>
    </div>
  );
};

export default Random;
