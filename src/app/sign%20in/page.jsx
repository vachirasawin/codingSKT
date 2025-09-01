"use client";

// import from Next.js
import React, { useState } from "react";
import Link from "next/link";

// import from components
import Navbar from "../components/Navbar";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";

function page() {
    return (
        <div>
            <Navbar signIn/>
            <div className = "p-4">
                <form className = "container mx-auto justify-self-center flex flex-col items-center gap-4 h-[calc(100vh-12rem)] mt-24 justify-center">
                    <div className = "flex flex-col gap-4 max-md:w-full bg-white p-4 md:p-8 rounded-2xl">
                        <ErrorMessage message = "Error message"/>
                        <SuccessMessage message = "Success message"/>
                        <div className = "flex flex-col gap-2">
                            <p className = "font-semibold">Email</p>
                            <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                <div className = "w-12 flex justify-center items-center border-r border-[#ececec]">
                                    <i className = "fa-solid fa-at"></i>
                                </div>
                                <input type = "email" className = "w-48 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "Email Address"/>
                            </div>
                        </div>
                        <div className = "flex flex-col gap-2">
                            <p className = "font-semibold">Password</p>
                            <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                <div className = "w-12 flex justify-center items-center border-r border-[#ececec]">
                                    <i className = "fa-solid fa-lock"></i>
                                </div>
                                <input type = "password" className = "w-48 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "Password"/>
                            </div>
                        </div>
                        <div className = "flex justify-center gap-x-2 text-sm">
                            <p>Don't have an account yet?</p><Link href = "sign up" className = "text-blue-500">Sign Up</Link>
                        </div>
                        <div className = "flex gap-4 max-xxs:flex-col">
                            <button type = "submit" className = "w-1/2 max-xxs:w-full py-2 bg-[#171717] border-2 border-[#171717] hover:bg-white hover:text-[#171717] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center">Sign In</button>
                            <button type = "reset" className = "w-1/2 max-xxs:w-full py-2 bg-[#f55555] border-2 border-[#f55555] hover:bg-white hover:text-[#f55555] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page