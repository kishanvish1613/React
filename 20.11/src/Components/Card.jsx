import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

// function Card({text, color}) {
//   return (
//     <button className={`px-2 py-2 ${color} text-white text-sm rounded-md m-2`}>{text}</button>
//   );
// } 




//       Card({name, img, profession}) // another way to accept values.
function Card({values, handleClick, index}) {

    const {name, profession, img, friends} = values; 

    return (
        <div className="w-56 h-64 bg-zinc-200 rounded-md overflow-hidden">
            <div className="h-40 bg-zinc-400 w-full overflow-hidden">
                <img className="w-56 h-40 object-cover object-center" src={img} alt="" />
            </div>
            <div className="p-2">
                <div className="font-semibold">
                    <p>{name}</p>
                </div>
                <div className="text-sm">
                    <p>{profession}</p>
                </div>
                <button className={`text-sm py-1 px-4 mt-2 ${friends ? "bg-red-500" : "bg-blue-500"} rounded-sm text-white`} onClick={() => handleClick(index)}>{friends ? "Friend" : "Add Friend"}</button>
            </div>
        </div>
    );
}

export default Card;


// props use hote hai aapke components ko reusable banaane ke liye, consider karo aapke paas ek button hai and aapko us button ko alag alag jagah daalna hai app mein, to aap ek button component banaaye and uska data hard coded karne ki jagah parent component se send karde and child component par use kar le
