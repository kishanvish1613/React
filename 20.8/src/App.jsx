import React, { useState } from "react";

function App () {
	// beginner

	// const [value, setValue] = useState(false);
    // return (
    //     <div>
    //         <p>{value.toString()}</p>
	// 		<button onClick={() => setValue(!value)}>change</button>
    //     </div>
    // );

	// intermediate

	// const [value, setValue] = useState(12);
	// return (
	// 	<div>
	// 		<h1>{value}</h1>
	// 		<button onClick={() => setValue((prev) => prev+1)}>inc</button>
	// 	</div>
	// )

	// advanced

	const [val, setVal] = useState(
		{name: 'kiohan', isBanned: false},
	)

	return (
		<div>
			<h1>Name: {val.name}</h1>
			<h2>isBanned: {val.isBanned.toString()}</h2>
			<button onClick={() => setVal({...val, isBanned: !val.isBanned})}>change</button>
		</div>
	)
}

import React from "react";
import { useState } from "react";

function App () {

	// 1. Basic
	// const [value, setValue] = useState(10);

	// return (
	// 	<div>
	// 		<p>{value}</p>
	// 		<button onClick={() => {setValue(20)}}>click</button>
	// 	</div>
	// )


	// // 2. Basic
	// const [banned, setBanned] = useState(false);
	
	// return (
	// 	<div>
	// 		<p>{banned.toString()}</p>
	// 		// ! - ka ulta/opposite ---------
	// 		<button onClick={() => {setBanned(!banned)}}>click</button>
	// 	</div>
	// )


	// 3. Intermediate
	// const [value, setValue] = useState(13);
	
	// return (
	// 	<div>
	// 		<p>{value}</p>
	// 		<button onClick={() => setValue((prev) => prev+1)}>click</button>
	// 	</div>
	// )

	// 4. object
	const [value, setValue] = useState({name: 'kish', isBanned: false});
	
	return (
		<div>
			<p>name: {value.name}</p>
			<p>isBanned: {value.isBanned.toString()}</p>
			<button onClick={() => setValue({...value, isBanned: !value.isBanned})}>click</button>
		</div>
	)

	// useState conti..

	
};


export default App;