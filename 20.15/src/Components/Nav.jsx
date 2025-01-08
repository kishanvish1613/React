import React from "react";
import {NavLink} from "react-router-dom"

function Nav() {
    return (
        <div className="w-full h-max p-4 bg-zinc-300 flex justify-center items-center gap-10">
			<NavLink style={(e) => { return {color: e.isActive ? "orange" : "", fontWeight: e.isActive ? "bold" : ""}}} to="/">Home</NavLink>
			<NavLink style={(e) => { return {color: e.isActive ? "orange" : "", fontWeight: e.isActive ? "bold" : ""}}} to="/about">About</NavLink>
			<NavLink style={(e) => { return {color: e.isActive ? "orange" : "", fontWeight: e.isActive ? "bold" : ""}}} to="/contact">Contact</NavLink>
		</div>


        // Add multiple css properties

        // < className={(e) => {
        //     return [
        //         e.isActive ? "text-red-200" : "",
        //         e.isActive ? "font-bold" : "",
        //     ].join(" ");
        // }}>About</>
    )
}

export default Nav;