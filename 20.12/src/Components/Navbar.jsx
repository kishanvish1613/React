import React from "react";


function Navbar ({data}) {
    return (
        <div className="w-full h-14 flex justify-center items-center">
            <div className="w-3/4 h-14 flex justify-between items-center">
                <div className="text-orange-600 font-semibold">
                    <h1>Orange</h1>
                </div>
                <div className="flex justify-between items-center gap-2 py-1 px-2 bg-orange-600 text-white text-xs font-semibold rounded-md">
                    <p>Favourites</p>
                    <span className="bg-[#dadada3b] px-1 rounded-md">
                        <p>{data.filter(item => item.added).length}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;