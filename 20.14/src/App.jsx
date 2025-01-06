import React, { useState } from "react";

// Components
import Cards from "./Components/Cards";
import Form from "./Components/Form";


function App() {

    const [users, setUsers] = useState([]);

    const handleFormSubmitData = (data) => {
        setUsers([...users, data])
    }

    const handleRemove = (id) => {
        setUsers(() => users.filter((item, index) => index != id))
    }

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center flex-col">
        <Cards users={users} handleRemove={handleRemove}></Cards>
        <Form handleFormSubmitData={handleFormSubmitData}></Form>
    </div>
  )
}

export default App;
