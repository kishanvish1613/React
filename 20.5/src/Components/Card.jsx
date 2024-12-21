import React from "react";

function Card () {
    return (
        <div className="w-full h-screen bg-zinc-300">
            <div className="w-52 h-60 border-2 rounded-md absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] overflow-hidden">
                <div className="w-full h-30">
                    <img src="https://images.unsplash.com/photo-1733690567161-326d5294d3bb?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
                </div>
                <div className="px-2 py-1 font-semibold">
                    <p>Travel & Tourism</p>
                </div>
                <div className="px-2 text-sm">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem repudiandae alias itaque!</p>
                </div>
            </div>
        </div>
    )
}

export default Card;