// src/App.js
import React, { useState } from "react";
import Square from "./Square";

const App = () => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "cyan",
  ];
  const [sequence, setSequence] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateRandomSequence = () => {
    const newSequence = Array.from(
      { length: 3 },
      () => colors[Math.floor(Math.random() * colors.length)],
    );
    setSequence(newSequence);
  };

  const animateSequence = async () => {
    setIsAnimating(true);

    for (const color of sequence) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for 1 second
      // Highlight the square by toggling a class (you can define a "glow" class in your CSS)
      // For simplicity, we'll use a temporary background color change
      const element = document.getElementById(color);
      console.log(element);
      element?.classList.toggle("ring-4");
      element?.classList.toggle("ring-yellow-100");
      element?.classList.toggle("blur-sm");
      await new Promise((resolve) => setTimeout(resolve, 500)); // Highlight duration
      element?.classList.toggle("ring-4");
      element?.classList.toggle("ring-yellow-100");
      element?.classList.toggle("blur-sm");
    }

    setIsAnimating(false);
  };

  return (
    <div className="min-h-screen bg-black p-4 text-white">
      <div className="flex flex-wrap">
        {colors.map((color, index) => (
          <Square key={index} color={color} />
        ))}
      </div>

      <button
        className="mt-4 cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => {
          if (!isAnimating) {
            generateRandomSequence();
            console.log(sequence);
            animateSequence();
          }
        }}
      >
        Generate and Animate
      </button>
    </div>
  );
};

export default App;
