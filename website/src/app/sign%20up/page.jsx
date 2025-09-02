"use client";

// import from Next.js
import React, { useState } from "react";
import Link from "next/link";

// import from components
import Navbar from "../components/Navbar";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";

function page() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setError(true);
            setSuccess(false);
            setErrorMessage("Passwords do not match.");
            return;
        }

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError(true);
            setSuccess(false);
            setErrorMessage("Please complete all inputs.");
            return;
        }
    }

    return (
        <div>
            <Navbar signUp/>
            <div className = "p-4">
                <form onSubmit = {handleSubmit} className = "container mx-auto justify-self-center flex flex-col items-center gap-4 min-md:h-[calc(100vh-12rem)] mt-24 justify-center">
                    <div className = "flex flex-col gap-4 max-md:w-full bg-white p-4 md:px-8 rounded-2xl">
                        <ErrorMessage message = {errorMessage} error = {error}/>
                        <SuccessMessage message = {successMessage} success = {success}/>
                        <div className = "flex gap-4 max-md:flex-col">
                            <div className = "flex flex-col gap-2">
                                <p className = "font-semibold">First Name</p>
                                <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                    <input onChange = {(e) => setFirstName(e.target.value)} type = "text" className = "w-60 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "First Name"/>
                                </div>
                            </div>
                            <div className = "flex flex-col gap-2">
                                <p className = "font-semibold">Last Name</p>
                                <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                    <input onChange = {(e) => setLastName(e.target.value)} type = "text" className = "w-60 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "Last Name"/>
                                </div>
                            </div>
                        </div>
                        <div className = "flex gap-4 max-md:flex-col">
                            <div className = "flex flex-col gap-2">
                                <p className = "font-semibold">Username</p>
                                <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                    <div className = "w-12 flex justify-center items-center border-r border-[#ececec]">
                                        <i className = "fa-solid fa-user"></i>
                                    </div>
                                    <input onChange = {(e) => setUsername(e.target.value)} type = "text" className = "w-48 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "Username"/>
                                </div>
                            </div>
                            <div className = "flex flex-col gap-2">
                                <p className = "font-semibold">Email</p>
                                <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                    <div className = "w-12 flex justify-center items-center border-r border-[#ececec]">
                                        <i className = "fa-solid fa-at"></i>
                                    </div>
                                    <input onChange = {(e) => setEmail(e.target.value)} type = "email" className = "w-48 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "Email Address"/>
                                </div>
                            </div>
                        </div>
                        <div className = "flex gap-4 max-md:flex-col">
                            <div className = "flex flex-col gap-2">
                                <p className = "font-semibold">Password</p>
                                <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                    <div className = "w-12 flex justify-center items-center border-r border-[#ececec]">
                                        <i className = "fa-solid fa-lock"></i>
                                    </div>
                                    <input onChange = {(e) => setPassword(e.target.value)} type = "password" className = "w-48 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "Password"/>
                                </div>
                            </div>
                            <div className = "flex flex-col gap-2">
                                <p className = "font-semibold">Confirm Password</p>
                                <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                    <div className = "w-12 flex justify-center items-center border-r border-[#ececec]">
                                        <i className = "fa-solid fa-lock"></i>
                                    </div>
                                    <input onChange = {(e) => setConfirmPassword(e.target.value)} type = "password" className = "w-48 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "Confirm Password"/>
                                </div>
                            </div>
                        </div>
                        <div className = "flex justify-center gap-x-2 text-sm">
                            <p>Already have an account?</p><Link href = "/sign in" className = "text-blue-500">Sign In</Link>
                        </div>
                        <div className = "flex gap-4 max-xxs:flex-col">
                            <button type = "submit" className = "w-1/2 max-xxs:w-full py-2 bg-[#171717] border-2 border-[#171717] hover:bg-white hover:text-[#171717] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center">Sign Up</button>
                            <button type = "reset" className = "w-1/2 max-xxs:w-full py-2 bg-[#f55555] border-2 border-[#f55555] hover:bg-white hover:text-[#f55555] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page