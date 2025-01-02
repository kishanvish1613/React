import React from "react";
import { useState } from "react";

// components
import Card from "./Components/Card";


function App() {

	const data = [
		{name: 'Deepesh', profession: 'Coder', img:'https://images.unsplash.com/photo-1518611540400-6b85a0704342?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends: false},
		{name: 'Piyush', profession: 'Doctor', img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends: false},
		{name: 'Denzil', profession: 'Artist', img:'https://images.unsplash.com/photo-1674572392130-1d36223d9673?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends: false},
		{name: 'Sujeet', profession: 'Writer', img:'https://images.unsplash.com/photo-1628499636754-3162d34ca39c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends: false},
	]

	const[realData, setRealData] = useState(data);

	const handleFriendsBtn = (dataIndex) => {
		setRealData((prev) => {
			return prev.map((item, index) => {
				if(index === dataIndex) {
					return {...item, friends: !item.friends}
				}
				return item;
			})
		})
	};

	return(

		// <div>
		//	<Card text='Know more' color='bg-blue-600'></Card>
		// 	<Card text='Download' color='bg-red-600'></Card>
		// </div>

		<div className="w-full h-screen flex justify-center items-center gap-10">
			{realData.map( (items, index) => (
				// <Card name={items.name} img={items.img} profession={items.profession}></Card>
				<Card values={items} index={index} handleClick={handleFriendsBtn}></Card>
			))}
		</div>
	)
}

export default App;