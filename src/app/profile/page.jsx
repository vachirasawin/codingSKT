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
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(session.user.image || "/profile.png");
    const [imageFile, setImageFile] = useState(null);
    const id = session.user.id;

    useEffect(() => {
        if (session?.user) {
            if (session.user.firstName || session.user.lastName) {
                setFirstName(session.user.firstName || "");
                setLastName(session.user.lastName || "");
            } else if (session.user.name) {
                const parts = session.user.name.split(" ");
                setFirstName(parts[0] || "");
                setLastName(parts.slice(1).join(" ") || "");
            }

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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setImageFile(file);
        }
    }

    const handleReset = async (e) => {
        if (session.user.firstName || session.user.lastName) {
            setFirstName(session.user.firstName || "");
            setLastName(session.user.lastName || "");
        } else if (session.user.name) {
            const parts = session.user.name.split(" ");
            setFirstName(parts[0] || "");
            setLastName(parts.slice(1).join(" ") || "");
        }

        setEmail(session.user.email || "");
        setImage(session.user.profileImageUrl || "/profile.png");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!firstName || !lastName || !email) {
            setAlert(true);
            setMessage("Please complete all inputs.");
            setType("error");
            return;
        }

        if (imageFile) {
            const formData = new FormData();
            formData.append("image", imageFile);
            formData.append("userId", session.user.id);

            const response = await fetch("/api/profile/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (response.ok) {
                setImage(data.user.profileImageUrl);
                setMessage("Profile updated successfully!");
                setType("success");
                setAlert(true);
            } else {
                setMessage(data.message || "Error uploading image");
                setType("error");
                setAlert(true);
            }
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
                                <Image src = {image} unoptimized width = {1000} height = {1000} alt = "Profile" className = "w-48 rounded-full"/>
                                <label className="w-48 flex justify-center items-center text-center font-medium py-2 text-xs border-2 border-[#9497a1] bg-[#ececec] rounded-xl cursor-pointer">
                                    Add Image
                                    <input type="file" className="hidden" onChange={handleImageChange} accept="image/*"/>
                                </label>
                                <div className = "flex flex-col gap-2 max-md:flex-row w-48">
                                    <button type = "submit" onClick = {() => {resetAlert();}} className = "w-full py-2 bg-[#171717] border-2 border-[#171717] hover:bg-white hover:text-[#171717] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center">Edit Profile</button>
                                    <button type = "reset" onClick = {() => {handleReset(); resetAlert();}} className = "w-full py-2 bg-[#f55555] border-2 border-[#f55555] hover:bg-white hover:text-[#f55555] transition-all duration-200 rounded-xl text-white text-sm font-medium text-center">Cancel</button>
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
                                <div className = "flex flex-col gap-2">
                                    <p className = "font-semibold">Email</p>
                                    <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                                        <div className = "w-12 flex justify-center items-center border-r border-[#ececec]">
                                            <i className = "fa-solid fa-at"></i>
                                        </div>
                                        <input value = {email} onChange = {(e) => {setEmail(e.target.value); resetAlert();}} type = "email" className = "w-full px-2 outline-none font-medium text-sm" placeholder = "Email Address"/>
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
