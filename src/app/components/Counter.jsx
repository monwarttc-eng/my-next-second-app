"use client";
import React, { useState } from "react";

const Counter = () => {
  console.log("Counter component render");

  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    console.log("Increase button clicked");
    setCount(count + 1);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Counter: {count}</h2>

      <button onClick={handleIncrease} className="btn bg-blue-500">
        Increase
      </button>
    </div>
  );
};

export default Counter;
