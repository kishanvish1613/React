import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Card() {
  const [val, setVal] = useState(true);

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center border-2">
      <div className="relative w-80 h-44 bg-slate-500 rounded-md overflow-hidden">
        
        <img className={`w-full h-full transition-transform duration-500 ${ val === false ? "-translate-x-0" : "-translate-x-full" } object-cover select-none`} src="https://images.unsplash.com/photo-1722608194903-aef277617d1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="First"/>

        <img className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${ val === false ? "-translate-x-full" : "translate-x-0 select-none"} object-cover`} src="https://images.unsplash.com/photo-1733398378174-a8f3b1559451?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Second" />

        <span onClick={() => setVal((prev) => !prev)} className="p-2 cursor-pointer text-white absolute bottom-2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 bg-[#dadada8b]">
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
}

export default Card;
