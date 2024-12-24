import React from "react";
import Card from "./Components/Card";

function App () {
    const abc = ["kishan", "Kiohan", "krishna"];

    return (
        <div className="w-full h-lvh flex justify-center items-center gap-10">
           {/* {abc.map((name, index) => (
                <div key={index} className="px-4 py-4 bg-slate-300 rounded-md w-fit mt-6">
                    {name}
                </div>
           ))} */}
           <Card></Card>
        </div>
    );
}


export default App;