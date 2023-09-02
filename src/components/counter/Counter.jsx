"use client"
import { decrement, increment } from "@/redux/slices/counterSlice";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'


const Counter = () => {
    const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="text-center space-y-5">
      <h1 className="text-2xl font-semibold">Counter App By Redux</h1>
      <p className="text-xl">{count}</p>
      <div className="flex gap-5">
        <button onClick={() => dispatch(increment())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
