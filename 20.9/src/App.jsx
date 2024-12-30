import React from "react";
import { useState } from "react";

function App() {
  // 5.
  // const [value, setValue] = useState({ name: "kish", isBanned: true });

  // return (
  //   <div className="p-4">
  //     <p>name: {value.name}</p>
  //     <p>isBanned: {value.isBanned.toString()}</p>
  //     <button className={`px-5 py-2 ${value.isBanned ? "bg-blue-400" : "bg-red-400"} mt-2 rounded-md`} onClick={() => setValue({ ...value, isBanned: !value.isBanned })}>click</button>
  //   </div>
  // );

  // 6.
  // const [value, setValue] = useState([1, 2, 3, 4, 5]);

  // return (
  //   <div className="p-4">
  //     {/* {value.map((val) => {
  //       return <p>{val}</p>;
  //     })} */}

  //     {value.map( val => <p>{val}</p>)}

  //     <button onClick={() => setValue(() => value.filter((val, index) => index != value.length - 1 ))}>click</button>
  //   </div>
  // );

	// 7. remove index no=2 element
	//   const [value, setValue] = useState([1, 2, 3, 4, 5]);

	//   return (
	//     <div className="p-4">
	// 		{value.map((val, index) => <p>{val}</p>)}
	// 		<button onClick={() => setValue(() => value.filter((val, index) => index != 2))}>click</button>
	//     </div>
	//   );

	// 8. remove the 'element/2==0'
	// const [value, setValue] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

	// return (
	// 	<div className="p-4">
	// 		{value.map((val, index) => <p>{val}</p>)}
	// 		<button className="px-6 py-2 bg-blue-500 rounded-md" onClick={() => setValue(() => value.filter((val, index) => val % 2 != 0))}>click</button>
	// 	</div>
	// );

	// 9. add a number in last index
	// const [value, setValue] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

	// return (
	// 	<div className="p-4">
	// 		{value.map((val, index) => <p>{val}</p>)}
	// 		<button className="px-6 py-2 bg-blue-500 rounded-md" onClick={() => setValue([...value, 9])}>click</button>
	// 	</div>
	// );

	// 10. print multiple obj value 
	const [value, setValue] = useState([
		{name: 'kish', age: 12},
		{name: 'vish', age: 22},
		{name: 'kioh', age: 45},
	]);

	return (
		<div className="p-4">
			{value.map( (item) => <p>name: {item.name} age:{item.age}</p> )}
			<button onClick={() => setValue(() => value.map(item => item.name === 'vish' ? ({name: 'vish', age: 2999}) : item ))}>click</button>
		</div>
	);
}

export default App;
 