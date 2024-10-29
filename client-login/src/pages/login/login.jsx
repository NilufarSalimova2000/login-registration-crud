import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { toast } from 'react-toastify';
import { saveState } from "../../config/storage";

export const Login = () => {
    const navigate = useNavigate();
    const { handleSubmit, reset, register } = useForm();
    const submit = (data) => {
        request.post("/login", data).then((res) => {
            saveState("user", res.data)
            navigate("/app", {
                replace: true,
            })
        }).catch((error) => {
            toast.error(error.response?.data)
        })
    }
    return (
        <>
            <div className="absolute rounded w-[400px] p-[20px] bg-cyan-200 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Link className="text-[#fff] font-bold hover:text-[blue]" to={"./register"}>Registration</Link>
                <form onSubmit={handleSubmit(submit)} className="pt-[20px]">
                    <div className="mb-[10px]">
                        <input className="rounded w-full p-[10px]" type="email" {...register("email")} placeholder="Email" />
                    </div>
                    <div className="mb-[10px]">
                        <input className="rounded w-full p-[10px]" type="password" {...register("password")} placeholder="Password" />
                    </div>
                    <button className="rounded w-full p-[10px] bg-cyan-400 text-[#fff]">Send</button>
                </form>
            </div>
        </>
    )
}