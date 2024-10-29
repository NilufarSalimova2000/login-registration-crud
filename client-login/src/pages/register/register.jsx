import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const Register = () => {
    const { handleSubmit, reset, register } = useForm();
    const navigate = useNavigate();
    const submit = (data) => {
        request.post("/register", data).then((res) => {
            if(res.status == 200 || res.status > 200){
                navigate("/");
            }
        }).catch((error) => {
            toast.error(error.response?.data)
        })
    }
    return (
        <>
            <div className="absolute rounded w-[400px] p-[20px] bg-cyan-200 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <form onSubmit={handleSubmit(submit)} className="pt-[20px]">
                    <div className="mb-[10px]">
                        <input className="rounded w-full p-[10px]" type="email" {...register("email")} placeholder="Email" />
                    </div>
                    <div className="mb-[10px]">
                        <input className="rounded w-full p-[10px]" type="password" {...register("password")} placeholder="Password" />
                    </div>
                    <div className="mb-[10px]">
                        <input className="rounded w-full p-[10px]" type="text" {...register("name")} placeholder="Name" />
                    </div>
                    <button className="rounded w-full p-[10px] bg-cyan-400 text-[#fff]">Send</button>
                </form>
            </div>
        </>
    )
}