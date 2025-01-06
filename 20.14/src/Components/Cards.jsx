import React from "react";
import Card from "./Card";

function Cards({users, handleRemove}) {
    return (
        <div className="w-[80%] h-max">
            <div className="w-full h-96 flex flex-wrap overflow-auto gap-7 justify-center">
                {users.map((items, index)=> {
                    return <Card key={index} items={items} handleRemove={handleRemove} id={index}></Card>
                })}
            </div>
        </div>
    )
}

export default Cards;