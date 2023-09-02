"use client"
import React from "react";

const Counter = () => {
  return (
    <div className="text-center space-y-5">
      <h1 className="text-2xl font-semibold">Counter App By Redux</h1>
      <p className="text-xl">0</p>
      <div className="flex gap-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Increment
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
