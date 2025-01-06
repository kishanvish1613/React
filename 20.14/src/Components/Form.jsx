import React from "react";
import { useForm } from "react-hook-form";


function Form({handleFormSubmitData}) {

    const {register, handleSubmit, reset} = useForm();

    const handleFormdata = (data) => {
        handleFormSubmitData(data);
        reset()
    }

    return (
        <div className="mt-10">
            <form className="flex gap-2" action="" onSubmit={handleSubmit(handleFormdata)}>
                <input {...register('name')} className="w-32 px-1 font-semibold outline-none rounded-md" type="text" placeholder="Name"/>
                <input {...register('email')} className="w-32 px-1 font-semibold outline-none rounded-md" type="text" placeholder="Email"/>
                <input {...register('image')} className="w-32 px-1 font-semibold outline-none rounded-md" type="text" placeholder="Img"/>
                <input className="px-4 py-1 text-white font-semibold bg-blue-400 rounded-sm" type="submit" />
            </form>
        </div>
    )
}

export default Form;