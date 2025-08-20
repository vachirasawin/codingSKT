"use client";

// import from Next.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

function Navbar({ home, signIn, signUp, addInfo, profile, session, information, dashboard }) {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menu]);

    return (
        <div className = "relative">
            <div className = "px-4 border-b border-[#ececec] bg-white z-30 fixed top-0 left-0 w-screen">
                <div className = "container mx-auto justify-self-center flex justify-between items-center h-24">
                    <div className = "flex items-center gap-2">
                        <Image src = "/logo.png" unoptimized alt = "codingSKT Logo" width = {1000} height = {1000} className = "w-11"/>
                        <h1 className = "text-2xl font-bold text-[#171717]">
                            <span>coding</span>
                            <span className = "text-[#1d9dda]">S</span>
                            <span className = "text-[#df69a0]">K</span>
                            <span>T</span>
                        </h1>
                    </div>
                    <div className = "flex text-sm font-medium text-[#9497a1] gap-8 max-lg:hidden">
                        <Link href = "/" className = {`${home && "text-[#171717] hover:underline hover:underline-offset-4"} hover:bg-[#171717] hover:text-white transition-all duration-200 h-10 px-4 rounded-xl hover:shadow-md flex justify-center items-center`}>Home</Link>
                        {session && (
                            <>
                                <Link href = "/profile" className = {`${profile && "text-[#171717] hover:underline hover:underline-offset-4"} hover:bg-[#171717] hover:text-white transition-all duration-200 h-10 px-4 rounded-xl hover:shadow-md flex justify-center items-center`}>Profile</Link>
                                <Link href = "/add information" className = {`${addInfo && "text-[#171717] hover:underline hover:underline-offset-4"} hover:bg-[#171717] hover:text-white transition-all duration-200 h-10 px-4 rounded-xl hover:shadow-md flex justify-center items-center`}>Add Information</Link>
                                <Link href = "/dashboard" className = {`${dashboard && "text-[#171717] hover:underline hover:underline-offset-4"} hover:bg-[#171717] hover:text-white transition-all duration-200 h-10 px-4 rounded-xl hover:shadow-md flex justify-center items-center`}>Dashboard</Link>
                            </>
                        )}
                        <Link href = "/information" className = {`${information && "text-[#171717] hover:underline hover:underline-offset-4"} hover:bg-[#171717] hover:text-white transition-all duration-200 h-10 px-4 rounded-xl hover:shadow-md flex justify-center items-center`}>Information</Link>
                    </div>
                    {!session ? (
                        <Link href = {`/${signIn ? "signup" : "signin"}`} className = {`shadow-md w-28 h-10 flex justify-center items-center font-medium rounded-xl text-sm border-2 border-[#171717] ${(signIn || signUp) ? "bg-white text-[#171717]" : "bg-[#171717] text-white"} max-lg:hidden`}>{signIn ? "Sign Up" : "Sign In"}</Link>
                    ) : (
                        <div onClick = {() => signOut()} className = {`shadow-md w-28 h-10 flex justify-center items-center font-medium rounded-xl text-sm bg-[#f55555] text-white max-lg:hidden`}>Sign Out</div>
                    )}
                    <div onClick = {() => setMenu(!menu)} className = {`w-10 h-10 flex justify-center items-center rounded-xl text-base border-2 border-[#171717] ${menu ? "bg-white text-[#171717]" : "bg-[#171717] text-white"} min-lg:hidden`}><i className = "fa-solid fa-bars"></i></div>
                </div>
            </div>
            <div className = {`fixed w-screen h-[calc(100vh-6rem)] flex flex-col gap-8 bg-white p-4 left-0 z-20 border-t border-[#ececec] ${menu ? ((home || information) ? "opacity-100" : "translate-y-24 opacity-100") : "-translate-y-[calc(100vh-6rem)] opacity-100"} transform transition-all duration-500 ease-in-out min-lg:hidden`}>
                <div className = "flex flex-col text-sm font-medium text-[#9497a1] gap-8">
                    <Link href = "/" className = {home && "text-[#171717]"}>Home</Link>
                    {session && (
                        <>
                            <Link href = "/profile" className = {profile && "text-[#171717]"}>Profile</Link>
                            <Link href = "/add information" className = {addInfo && "text-[#171717]"}>Add Information</Link>
                            <Link href = "/dashboard" className = {dashboard && "text-[#171717]"}>Dashboard</Link>
                        </>
                    )}
                    <Link href = "/information" className = {information && "text-[#171717]"}>Inforamtion</Link>
                </div>
                {!session ? (
                    <Link href = {`/${signIn ? "signup" : "signin"}`} className = {`shadow-md w-full h-10 flex justify-center items-center font-medium rounded-xl text-sm border-2 border-[#171717] ${(signIn || signUp) ? "bg-white text-[#171717]" : "bg-[#171717] text-white"}`}>{signIn ? "Sign Up" : "Sign In"}</Link>
                ) : (
                    <div onClick = {() => signOut()} className = {`shadow-md w-full h-10 flex justify-center items-center font-medium rounded-xl text-sm border-2 border-[#f55555] bg-[#f55555] text-white`}>Sign Out</div>
                )}
            </div>
        </div>
    )
}

export default Navbar
