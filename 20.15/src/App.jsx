import React from "react";
import {Route, Routes} from "react-router-dom";

import Nav from "./Components/Nav";
import Routing from "./utils/Routing";


function App() {
  return (
    <>
		<Nav></Nav>
		<Routing></Routing>
	</>
  )
}


export default App;