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


export default App;