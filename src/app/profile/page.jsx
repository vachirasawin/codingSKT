"use client";

// import from Next.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";


// import from components
import Navbar from "../components/Navbar";
import Message from "../components/Message";

function page() {
    const { data: session } = useSession();
    if (!session) redirect ("/");
    
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    //Define input field
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        if (session?.user) {
            const name = session.user.name.split(" ")
            setFirstName(name[0] || "");
            setLastName(name[1] || "");
            setUsername(session.user.username || "");
            setEmail(session.user.email || "");
        }
    }, [session]);

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

        if (password != confirmPassword) {
            setAlert(true);
            setMessage("Passwords do not match.");
            setType("error");
            return;
        }
        
        if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
            setAlert(true);
            setMessage("Please complete all inputs.");
            setType("error");
            return;
        }
    }

    return (
        <div>
            <Navbar profile/>
            <div className = "p-4">
                <form onSubmit = {handleSubmit} className = "container mx-auto justify-self-center flex flex-col items-center gap-4 md:h-[calc(100vh-12rem)] mt-24 justify-center">
                    <div className = "bg-white p-4 md:p-8 rounded-2xl flex flex-col gap-8 max-md:w-full shadow-md" data-aos = "fade-up">
                        <Message message = {message} type = {type} alert = {alert}/>
                        <div className = "flex justify-center items-center gap-8 max-md:flex-col max-md:w-full">
                            <div className = "flex flex-col gap-4 max-md:w-full max-md:items-center">
                                <Image src = "/profile.png" unoptimized width = {1000} height = {1000} alt = "Profile" className = "w-48"/>
                                <div className = "flex flex-col gap-2 max-md:flex-row w-full">
                                    <button type = "submit" onClick = {() => {resetAlert();}} className = "w-full py-2 bg-[#171717] border-2 border-[#171717] hover:bg-white hover:text-[#171717] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center">Edit Profile</button>
                                    <button type = "reset" onClick = {() => {setShowPassword(false); setShowConfirmPassword (false); resetAlert();}} className = "w-full py-2 bg-[#f55555] border-2 border-[#f55555] hover:bg-white hover:text-[#f55555] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center">Cancel</button>
                                </div>
                            </div>
                            <div className = "md:w-0.5 md:h-full h-0.5 w-full bg-[#ececec] rounded-xl"></div>
                            <div className = "flex flex-col gap-4 max-md:w-full">
                                <div className = "flex gap-4 max-md:flex-col">
                                    <div className = "flex flex-col gap-2">
                                        <p className = "font-semibold">First Name</p>
                                        <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                            <input value = {firstName} onChange = {(e) => {setFirstName(e.target.value); resetAlert();}} type = "text" className = "w-60 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "First Name"/>
                                        </div>
                                    </div>
                                    <div className = "flex flex-col gap-2">
                                        <p className = "font-semibold">Last Name</p>
                                        <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                            <input value = {lastName} onChange = {(e) => {setLastName(e.target.value); resetAlert();}} type = "text" className = "w-60 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "Last Name"/>
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
                                            <input value = {username} onChange = {(e) => {setUsername(e.target.value); resetAlert();}} type = "text" className = "w-48 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "Username"/>
                                        </div>
                                    </div>
                                    <div className = "flex flex-col gap-2">
                                        <p className = "font-semibold">Email</p>
                                        <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                            <div className = "w-12 flex justify-center items-center border-r border-[#ececec]">
                                                <i className = "fa-solid fa-at"></i>
                                            </div>
                                            <input value = {email} onChange = {(e) => {setEmail(e.target.value); resetAlert();}} type = "email" className = "w-48 max-md:w-full px-2 outline-none font-medium text-sm" placeholder = "Email Address"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page