// import from Next.js
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";

function Footer({ home, signIn, signUp, addInfo, profile, dashboard, session, aboutUs, privacyPolicy, userGuide, faq, news, ourTeam }) {
    return (
        <div className = "px-4 border-t border-[#607D94] bg-[#002B4E]">
            <div className = "container mx-auto justify-self-center flex flex-wrap gap-4 justify-around py-8 max-md:py-4 text-white">
                <div className = "flex flex-col gap-2">
                    <div className = "flex items-center gap-2">
                        <Image src = "/logo.png" unoptimized alt = "codingSKT Logo" width = {1000} height = {1000} className = "w-11"/>
                        <h1 className = "text-2xl font-bold">
                            <span>coding</span>
                            <span className = "text-[#1d9dda]">S</span>
                            <span className = "text-[#df69a0]">K</span>
                            <span>T</span>
                        </h1>
                    </div>
                    <p className = "text-xs font-medium text-[#9497a1]">version 1.9.25.1</p>
                </div>
                <div className = "flex gap-8">
                    <div className = "flex flex-col gap-4">
                        <h1 className = "font-semibold text-sm">Quick link</h1>
                        <div className = "flex flex-col gap-2 text-xs font-medium text-[#9497a1]">
                            <Link href = "/" className = {`${home && "text-white"}`}>Home</Link>
                            <Link href = "/about us" className = {`${aboutUs && "text-white"}`}>About Us</Link>
                            {session ? (
                                <>
                                    <Link href = "/add information" className = {`${addInfo && "text-white"}`}>Add Information</Link>
                                    <Link href = "/profile" className = {`${profile && "text-white"}`}>Profile</Link>
                                    <Link href = "/dashboard" className = {`${dashboard && "text-white"}`}>Dashboard</Link>
                                </>
                            ) : (
                                <>
                                    <Link href = "/signin" className = {`${signIn && "text-white"}`}>Sign In</Link>
                                    <Link href = "/signup" className = {`${signUp && "text-white"}`}>Sign Up</Link>
                                </>
                            )}
                            <Link href = "/privacy policy" className = {`${privacyPolicy && "text-white"}`}>Privacy Policy</Link>
                        </div>
                    </div>
                    <div className = "flex flex-col gap-4">
                        <h1 className = "font-semibold text-sm">Information</h1>
                        <div className = "flex flex-col gap-2 text-xs font-medium text-[#9497a1]">
                            <Link href = "/user guide" className = {`${userGuide && "text-white"}`}>User Guide</Link>
                            <Link href = "/faqs" className = {`${faq && "text-white"}`}>FAQ</Link>
                            <Link href = "/news" className = {`${news && "text-white"}`}>News</Link>
                            <Link href = "/our team" className = {`${ourTeam && "text-white"}`}>Our Team</Link>
                        </div>
                    </div>
                    <div className = "flex flex-col gap-4">
                        <h1 className = "font-semibold text-sm">Contact info</h1>
                        <div className = "flex flex-col gap-2 text-xs font-medium text-[#9497a1]">
                            <p>tiyasak.srm@sk-thonburi.ac.th</p>
                            <p>ratchanon.tri@sk-thonburi.ac.th</p>
                            <p>vachirasawin.mah@sk-thonburi.ac.th</p>
                            <p>aiyakarn.pho@sk-thonburi.ac.th</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer