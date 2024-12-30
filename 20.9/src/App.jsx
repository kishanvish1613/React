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
  const [value, setValue] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="p-4">
      {/* {value.map((val) => {
        return <p>{val}</p>;
      })} */}

      {value.map( val => <p>{val}</p>)}

      <button onClick={() => setValue(() => value.filter((val, index) => index != value.length - 1 ))}>click</button>
    </div>
  );
}

export default App;
