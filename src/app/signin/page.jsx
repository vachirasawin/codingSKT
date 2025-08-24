"use client";

// import from Next.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

// import from components
import Navbar from "../components/Navbar";
import Message from "../components/Message";

function page() {
    const { data: session } = useSession();
    if (session) redirect ("/");
        
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    
    const router = useRouter();

    //Define input field
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    //Define alert message
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
    const [alert, setAlert] = useState(false);

    const resetAlert = () => {
        setAlert(false);
        setMessage("");
        setType("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setAlert(true);
            setMessage("Please complete all inputs.");
            setType("error");
            return;
        }

        try {
            const response = await signIn("credentials", {
                email, password, redirect: false
            })

            if (response.error) {
                setAlert(true);
                setMessage("Invalid credentials");
                setType("error");
                return;
            }

            redirect("/");
        } catch (error) {
            setAlert(true);
            setMessage(error);
            setType("error");
            return;
        }
    };

    return (
        <div>
            <Navbar signIn/>
            <div className = "p-4">
                <form onSubmit = {handleSubmit} className = "container mx-auto justify-self-center flex flex-col items-center gap-4 h-[calc(100vh-12rem)] mt-24 justify-center">
                    <div className = "bg-white rounded-2xl shadow-md" data-aos = "fade-up">
                        <div className = "flex flex-col gap-4 p-4 md:p-8">
                            <Message message = {message} type = {type} alert = {alert}/>
                            <div className = "flex flex-col gap-2">
                                <p className = "font-semibold">Email</p>
                                <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                    <div className = "w-12 flex justify-center items-center border-r border-[#ececec]">
                                        <i className = "fa-solid fa-at"></i>
                                    </div>
                                    <input onChange = {(e) => {setEmail(e.target.value); resetAlert();}} type = "email" className = "w-48 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "Email Address"/>
                                </div>
                            </div>
                            <div className = "flex flex-col gap-2">
                                <p className = "font-semibold">Password</p>
                                <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                    <div onClick = {() => setShowPassword(!showPassword)} className = "w-12 flex justify-center items-center border-r border-[#ececec]">
                                        <i className = {`fa-solid ${showPassword ? "fa-lock-open" : "fa-lock"}`}></i>
                                    </div>
                                    <input onChange = {(e) => {setPassword(e.target.value); resetAlert();}} type = {showPassword ? "text" : "password"} className = "w-48 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "Password"/>
                                </div>
                            </div>
                            <div className = "flex justify-center gap-x-2 text-sm">
                                <p>Don't have an account yet?</p><Link href = "signup" className = "text-blue-500">Sign Up</Link>
                            </div>
                            <div className = "flex gap-4 max-xxs:flex-col">
                                <button type = "submit" className = "w-1/2 max-xxs:w-full py-2 bg-[#171717] border-2 border-[#171717] hover:bg-white hover:text-[#171717] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center">Sign In</button>
                                <button type = "reset" onClick = {() => {setShowPassword(false); resetAlert();}} className = "w-1/2 max-xxs:w-full py-2 bg-[#f55555] border-2 border-[#f55555] hover:bg-white hover:text-[#f55555] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center">Cancel</button>
                            </div>
                        </div>
                        <div className = "flex h-12 border-t border-[#ececec] w-[19.0625rem] max-md:w-full">
                            <div onClick = {() => signIn("github")} className = "w-1/3 rounded-bl-2xl border-r border-[#ececec] flex justify-center items-center text-[#171717] hover:bg-[#171717] hover:text-white transition-all duration-200">
                                <i className = "fa-brands fa-github"></i>
                            </div>
                            <div onClick = {() => signIn("google")} className = "w-1/3 border-r border-[#ececec] flex justify-center items-center text-[#171717] hover:bg-[#171717] hover:text-white transition-all duration-200">
                                <i className = "fa-brands fa-google"></i>
                            </div>
                            <div onClick = {() => signIn("facebook")} className = "w-1/3 rounded-br-2xl flex justify-center items-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200">
                                <i className = "fa-brands fa-facebook"></i>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page