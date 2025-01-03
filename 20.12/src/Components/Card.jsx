import React, { useState } from "react";


function Card({values, handleOnClickFn, index}) {

    const {img, songName, artistName, added} = values;

    return (
        <div className="w-48 h-max bg-zinc-100  rounded-md flex justify-center items-start relative pb-3 mt-8">
            <div className="w-44 h-16 mt-2 flex gap-2">
                <div className="w-24 h-14 bg-white rounded-md overflow-hidden object-center">
                    <img className="w-24 h-14 object-contain" src={img} alt="none" />
                </div>
                <div className="w-full h-14 rounded-md py-1">
                    <div className="text-sm font-semibold">
                        <h1>{songName}</h1>
                    </div>
                    <div className="text-xs">
                        <p>{artistName}</p>
                    </div>
                </div>
                <button onClick={() => handleOnClickFn(index)} className={`absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] whitespace-nowrap ${added === true ? "bg-teal-600" : "bg-orange-600"} py-1 px-2 rounded-full text-xs text-white`}>
                    {added ? "Added" : "Add To Favourites"}
                </button>
            </div>
            <div>

            </div>
        </div>
    )
};


export default Card;