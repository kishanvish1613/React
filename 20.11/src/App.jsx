import React from "react";
import { useState } from "react";

// components
import Card from "./Components/Card";


function App() {

	const data = [
		{name: 'kish', profession: 'Coder', img:'https://images.unsplash.com/photo-1518611540400-6b85a0704342?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
		{name: 'Manish', profession: 'Doctor', img:'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
		{name: 'Ritesh', profession: 'Artist', img:'https://images.unsplash.com/photo-1674572392130-1d36223d9673?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
		{name: 'Yash', profession: 'Writer', img:'https://images.unsplash.com/photo-1628499636754-3162d34ca39c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
	]

	return(
		// <div>
		// 	<Card text='Know more' color='bg-blue-600'></Card>
		// 	<Card text='Download' color='bg-red-600'></Card>
		// </div>

		<div className="w-full h-screen bg-zinc-200 flex justify-center items-center gap-4">
			{data.map((items, index) => <Card values={items}></Card>)}
		</div>
	)
}

export default App;