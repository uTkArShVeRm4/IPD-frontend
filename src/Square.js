// src/Square.js
import React, { useState, useEffect } from "react";

const colorVariants = {
  blue: "bg-blue-600 hover:bg-blue-500 border-black",
  red: "bg-red-600 hover:bg-red-500 border-black",
  green: "bg-green-600 hover:bg-green-500 border-black",
  yellow: "bg-yellow-600 hover:bg-yellow-500 border-black",
  orange: "bg-orange-600 hover:bg-orange-500 border-black",
  indigo: "bg-indigo-600 hover:bg-indigo-500 border-black",
  purple: "bg-purple-600 hover:bg-purple-500 border-black",
  cyan: "bg-cyan-600 hover:bg-cyan-500 border-black",
};

const Square = ({ color }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      id={color}
      className={`m-2 flex h-16 w-16 cursor-pointer items-center justify-center ${colorVariants[color]}`}
      onClick={handleClick}
    >
      {clicked ? "Clicked!" : ""}
    </div>
  );
};

export default Square;
