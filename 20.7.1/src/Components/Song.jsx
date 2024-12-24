import React from "react";


function Song () {
    const data = [
        {name: 'abc', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti veniam inventore.',},
        {name: 'xyz', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti veniam inventore.',}
    ]

    const onClickDownloadBtn = () => {
        alert('kya chal raha hai');
    }

    return (
        <div className="w-full h-lvh bg-zinc-100 flex justify-center items-center gap-4">
            {data.map((elem , index) => (
                <div className="w-80 h-max bg-zinc-300 rounded-md p-2">
                    <h3 className="font-semibold">{elem.name}</h3>
                    <p className="text-sm mt-1">{elem.desc}</p>
                    <button onClick={onClickDownloadBtn} className="text-sm text-slate-100 bg-blue-600 px-2 py-1 mt-2 rounded">Download</button>
                </div>
            ))
            }
        </div>
    )
}

export default Song;