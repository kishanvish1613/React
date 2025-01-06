import React from "react";


function Card({items, handleRemove, id}) {

    return (
        <div className="w-44 h-max bg-slate-50 rounded-md flex flex-col overflow-hidden items-center p-2 gap-1">
            <div className="w-14 h-14 flex justify-center items-center overflow-hidden object-contain bg-zinc-300 rounded-full">
                <img className="object-cover" src={items.image} alt="" />
            </div>
            <div className="text-xl">
                <p>{items.name}</p>
            </div>
            <div className="flex justify-center items-center text-xs">
                <p>{items.email}</p>
            </div>
            <div className="text-xs leading-1 tracking-tight text-center font-semibold">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis deserunt expedita?</p>
            </div>
            <button onClick={() => handleRemove(id)} className="bg-red-600 rounded-sm py-1 px-3 text-sm text-white mt-2">Remove it</button>
        </div>
    )
}

export default Card;