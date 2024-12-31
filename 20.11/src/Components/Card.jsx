import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

// function Card({text, color}) {
//   return (
//     <button className={`px-2 py-2 ${color} text-white text-sm rounded-md m-2`}>{text}</button>
//   );
// } 


function Card({values}) {
    const {name, profession, img} = values
    return (
      <div className="w-52 bg-white rounded-md overflow-hidden">
        <div className="w-full h-40 bg-slate-200 overflow-hidden object-contain">
            <img className="w-full h-full object-cover" src={`${img}`} alt="" />
        </div>
        <div className="p-1.5 font-semibold">
            <div className="text-sm mt-2">
                <h1>{name}</h1>
            </div>
            <div className="text-xs mt-1">
                <h5>{profession}</h5>
            </div>
            <button className="px-2 py-1 bg-blue-600 rounded-sm text-xs text-white mt-2" onClick={() => alert('hey')}>Add Friend</button>
        </div>
      </div>
    );
}

export default Card;


// props use hote hai aapke components ko reusable banaane ke liye, consider karo aapke paas ek button hai and aapko us button ko alag alag jagah daalna hai app mein, to aap ek button component banaaye and uska data hard coded karne ki jagah parent component se send karde and child component par use kar le
