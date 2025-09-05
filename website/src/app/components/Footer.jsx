// import from Next.js
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";

function Footer({ home, signIn, signUp, addInfo, profile, dashboard, session, aboutUs, privacyPolicy, userGuide, faq, news, ourTeam, models, linearRegression, polynomialRegression, regularizedLinearRegressionRidge, decisionTreeRegression, admin, typeAdmin }) {
    const [quickLink, setQuickLink] = useState(false);
    const [information, setInformation] = useState(false);
    const [modelsPage, setModelsPage] = useState(false);
    const [contactInfo, setContactInfo] = useState(false);

    return (
        <div className = "px-4 border-t border-[#607D94] bg-[#002B4E]">
            <div className = "container mx-auto justify-self-center flex flex-wrap gap-4 justify-around py-8 max-md:py-4 text-white max-md:flex-col">
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
                    <p className = "text-xs font-medium text-[#9497a1]">version 5.9.25.1</p>
                </div>
                <div className = "flex gap-8 max-md:flex-col max-md:gap-4">
                    <div className = "flex flex-col gap-4 max-md:border-b border-[#f7f7f7] pb-4">
                        <div className = "flex justify-between items-center">
                            <h1 className = "font-semibold text-sm">Quick Link</h1>
                            <div className = {`md:hidden h-4 w-4 flex justify-center items-center transition-all duration-500 ${quickLink && "rotate-180"}`} onClick = {() => setQuickLink(!quickLink)}>
                                <i className = "fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                        <div className = {`flex flex-col gap-2 text-xs font-medium text-[#9497a1] max-md:pl-4 ${quickLink ? "max-md:flex" : "max-md:hidden"}`}>
                            <Link href = "/" className = {`${home && "text-white"}`}>Home</Link>
                            <Link href = "/about-us" className = {`${aboutUs && "text-white"}`}>About Us</Link>
                            {session ? (
                                <>
                                    <Link href = "/add-information" className = {`${addInfo && "text-white"}`}>Add Information</Link>
                                    <Link href = "/profile" className = {`${profile && "text-white"}`}>Profile</Link>
                                    <Link href = "/dashboard" className = {`${dashboard && "text-white"}`}>Dashboard</Link>
                                    {typeAdmin && (
                                        <Link href = "/admin" className = {`${admin && "text-white"}`}>Admin</Link>
                                    )}
                                </>
                            ) : (
                                <>
                                    <Link href = "/signin" className = {`${signIn && "text-white"}`}>Sign In</Link>
                                    <Link href = "/signup" className = {`${signUp && "text-white"}`}>Sign Up</Link>
                                </>
                            )}
                        </div>
                    </div>
                    <div className = "flex flex-col gap-4 max-md:border-b border-[#f7f7f7] pb-4">
                        <div className = "flex justify-between items-center">
                            <h1 className = "font-semibold text-sm">Information</h1>
                            <div className = {`md:hidden h-4 w-4 flex justify-center items-center transition-all duration-500 ${information && "rotate-180"}`} onClick = {() => setInformation(!information)}>
                                <i className = "fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                        <div className = {`flex flex-col gap-2 text-xs font-medium text-[#9497a1] max-md:pl-4 ${information ? "max-md:flex" : "max-md:hidden"}`}>
                            <Link href = "/user%20guide" className = {`${userGuide && "text-white"}`}>User Guide</Link>
                            <Link href = "/faqs" className = {`${faq && "text-white"}`}>FAQs</Link>
                            <Link href = "/news" className = {`${news && "text-white"}`}>News</Link>
                            <Link href = "/our%20team" className = {`${ourTeam && "text-white"}`}>Our Team</Link>
                            <Link href = "/privacy%20policy" className = {`${privacyPolicy && "text-white"}`}>Privacy Policy</Link>
                        </div>
                    </div>
                    <div className = "flex flex-col gap-4 max-md:border-b border-[#f7f7f7] pb-4">
                        <div className = "flex justify-between items-center">
                            <h1 className = "font-semibold text-sm">Models</h1>
                            <div className = {`md:hidden h-4 w-4 flex justify-center items-center transition-all duration-500 ${modelsPage && "rotate-180"}`} onClick = {() => setModelsPage(!modelsPage)}>
                                <i className = "fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                        <div className = {`flex flex-col gap-2 text-xs font-medium text-[#9497a1] max-md:pl-4 ${modelsPage ? "max-md:flex" : "max-md:hidden"}`}>
                            <Link href = "/models" className = {`${models && "text-white"}`}>Models</Link>
                            <Link href = "/models/linear%20regression" className = {`${linearRegression && "text-white"}`}>Linear Regression</Link>
                            <Link href = "/models/polynomial%20regression" className = {`${polynomialRegression && "text-white"}`}>Polynomial Regression</Link>
                            <Link href = "/models/regularized%20linear%20regression%20(ridge)" className = {`${regularizedLinearRegressionRidge && "text-white"}`}>Regularized Linear Regression (Ridge)</Link>
                            <Link href = "/models/decision%20tree%20regression" className = {`${decisionTreeRegression && "text-white"}`}>Decision Tree Regression</Link>
                        </div>
                    </div>
                    <div className = "flex flex-col gap-4 max-md:border-b border-[#f7f7f7] pb-4">
                        <div className = "flex justify-between items-center">
                            <h1 className = "font-semibold text-sm">Contact Info</h1>
                            <div className = {`md:hidden h-4 w-4 flex justify-center items-center transition-all duration-500 ${contactInfo && "rotate-180"}`} onClick = {() => setContactInfo(!contactInfo)}>
                                <i className = "fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                        <div className = {`flex flex-col gap-2 text-xs font-medium text-[#9497a1] max-md:pl-4 ${contactInfo ? "max-md:flex" : "max-md:hidden"}`}>
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