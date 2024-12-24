import React from "react";

function Card() {

    const data = [
        {img:'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', para:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, labore.', btnlink:'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', inStock: true },       
        {img:'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', para:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, labore.', btnlink:'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', inStock: false },       
        {img:'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', para:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, labore.', btnlink:'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', inStock: true },       
    ]

    return (
        data.map((elem, index) => (
            <div className="w-52 h-max border-2 rounded-md bg-zinc-700 text-white overflow-hidden">
                <div className="w-full bg-slate-200 h-32">
                    <img src={elem.img} alt="" />
                </div>
                <div className="p-1">
                    <div className="py-2 text-sm">
                        <p>{elem.para}</p>
                    </div>
                    <div className={`w-fit rounded-sm p-1 px-2 text-xs ${elem.inStock ? " bg-sky-400" : " bg-red-400"} cursor-pointer text-black`}>
                        <p><a href={elem.btnlink}>{elem.inStock ? "Instock" : "Out of stock"}</a></p>
                    </div>
                </div>
            </div>
        ))
    )
};

export default Card;