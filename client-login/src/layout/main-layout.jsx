import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export const MainLayout = () => {
    const user = Cookies.get("user");
    if(!user) {
        return <Navigate replace to={"/"} />
    }
    return (
        <>
            <header className="py-[50px] bg-[pink]">
                <div className="container"><h1 className="text-[#fff]">Header</h1></div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}