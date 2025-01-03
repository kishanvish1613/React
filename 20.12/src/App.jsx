import React from "react";
import { useState } from "react";

// components
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";


function App() {

	const realData = [
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Sky Falls', artistName: 'Kiohan', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Demons', artistName: 'Madaara Uchiha', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Gus tas Tu', artistName: 'Saske', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Star Boy', artistName: 'Piyush Kakashi Yadav', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Gangstar', artistName: 'Deepesh', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Old Town', artistName: 'Kishan', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Happy Nation', artistName: 'Kakashi Sensei', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Man Without Love', artistName: 'Orochi Maru', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Sky Falls', artistName: 'Kiohan', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Demons', artistName: 'Madaara Uchiha', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Gus tas Tu', artistName: 'Saske', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Star Boy', artistName: 'Piyush Kakashi Yadav', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Gangstar', artistName: 'Deepesh', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Old Town', artistName: 'Kishan', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Happy Nation', artistName: 'Kakashi Sensei', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Man Without Love', artistName: 'Orochi Maru', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Sky Falls', artistName: 'Kiohan', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Demons', artistName: 'Madaara Uchiha', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Gus tas Tu', artistName: 'Saske', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Star Boy', artistName: 'Piyush Kakashi Yadav', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Gangstar', artistName: 'Deepesh', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Old Town', artistName: 'Kishan', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Happy Nation', artistName: 'Kakashi Sensei', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Man Without Love', artistName: 'Orochi Maru', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Sky Falls', artistName: 'Kiohan', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Demons', artistName: 'Madaara Uchiha', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Gus tas Tu', artistName: 'Saske', added: false},
		{img: 'https://img.freepik.com/free-psd/top-view-cassette-tape-isolated_23-2151856792.jpg?t=st=1735881855~exp=1735885455~hmac=5e09ea434d0abdf1c35a8d98e31d3402e453d403308b896b954664b22be1a7d3&w=826', songName: 'Star Boy', artistName: 'Piyush Kakashi Yadav', added: false},
		
	]


    const handleOnClick = (index) => {
        setDataFn((prev) => {
            return prev.map( (items, itemsIndex) => {
                if(itemsIndex === index) {
                    return {...items, added: !items.added};
                }
                return items;
            })
        })
    }
 
    const [data, setDataFn] = useState(realData);
	
	return(
        <div className="w-full h-full bg-slate-200">
            <Navbar data={data}></Navbar>
            <div className=" flex flex-wrap gap-4 p-16">
                {data.map((items, index) => <Card key={index} values={items} handleOnClickFn={handleOnClick} index={index}></Card>)}
            </div>
		</div>
	)
}

export default App; 