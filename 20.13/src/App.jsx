import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

// form handling in react, there are multiple ways to do
// 1. useRef
// 2. controlled components
// 3. react hook form


// useRef: useRef is a React hook that allows you to directly access and interact with DOM elements or store mutable values without causing the component to re-render.

// function App() {

//     const name = useRef(null);
//     const age = useRef(null);
//     const email = useRef(null);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(name.current.value, age.current.value, email.current.value);
        
//     }

//     return (
//         <div className="p-10" onSubmit={handleSubmit}>
//             <form action="">
//                 <input ref={name} type="text" placeholder="name"/>
//                 <input ref={age} type="text" placeholder="age"/>
//                 <input ref={email} type="email" placeholder="email"/>
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }


// controlled components: Controlled components in React are input elements (like text fields, checkboxes, etc.) whose values are fully controlled by the component's state. This means React is in charge of keeping track of the input's value, rather than the DOM.

// function App() {

//     const [value, setValue] = useState({name: "", email: ""});

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(value);
        
//     }

//     return (
//         <div className="p-10">
//             <form action="" onClick={handleSubmit}>
//                 <input onChange={(event) => setValue({...value, name: event.target.value})} type="text" placeholder="name"/>
//                 <input onChange={(event) => setValue({...value, email: event.target.value})} type="email" placeholder="email"/>
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }


// react hook form: React Hook Form is a library for managing forms in React. It simplifies how you handle form inputs, validation, and submission, making your forms easier to manage and more efficient.

function App() {

    const {register, handleSubmit} = useForm()

    return (
        <div className="p-10">
            <form action="" onSubmit={handleSubmit(data => console.log(data))}>
                <input {...register('name')} type="text" placeholder="Name"/>
                <input {...register('email')} type="email" placeholder="Email"/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default App;