"use client";

// import from Next.js
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import AOS from "aos";
import "aos/dist/aos.css";

function ReviewInbox() {
    const { data: session } = useSession();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    //Define input field
    const [review, setReview] = useState("");
    const [names, setNames] = useState(() => {
        if (session?.user) {
            return `${session.user.firstName} ${session.user.lastName}`;
        }
        return "";
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const responseReview = await fetch("/api/review", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ review, name: names, image: session.user.image || "/profile.png", typeInfo: "review" })
            });
            if (responseReview.ok) {
                const form = e.target;
                form.reset();
            }
        } catch (error) {
            console.log(error)
            return;
        }
    }

    return (
        <>
            {session && (
                <div className = "px-4 border-b border-[#ececec] bg-[#f7f7f7]">
                    <div className = "container mx-auto justify-self-center flex flex-col gap-8 max-md:gap-4 pt-24 max-md:pt-8 justify-center items-center">
                        <div className = "flex justify-center w-full" data-aos = "fade-up">
                            <div className = "flex flex-col gap-2 text-center w-full justify-center items-center">
                                <div className = "flex justify-center items-center gap-2.5 flex-wrap">
                                    <h1 className = "text-4xl font-bold max-md:text-2x text-blue-500">Review</h1>
                                    <h1 className = "text-4xl font-bold max-md:text-2x">Inbox</h1>
                                </div>
                                <p className = "text-[#9497a1] text-lg max-md:text-sm w-lg max-sm:w-full">กล่องข้อความรีวิว</p>
                            </div>
                        </div>
                        <form onSubmit = {handleSubmit} className = "pb-24 max-md:pb-8 text-[#171717] w-full flex justify-center items-center max-md:flex-col" data-aos = "fade-up">
                            <div className = "h-16 w-16 bg-blue-500 flex rounded-l-xl justify-center items-center text-lg text-white font-medium max-md:hidden border-4 border-blue-500 md:hover:bg-white md:hover:text-blue-500 transition-all duration-200">
                                <i className = "fa-solid fa-inbox"></i>
                            </div>
                            <input type = "text" onChange = {(e) => setReview(e.target.value)} className = "h-16 max-md:h-12 flex justify-center items-start outline-none border-2 md:border-x-0 max-md:rounded-t-xl max-md:border-b-0 border-[#ececec] w-lg max-md:w-full px-6 text-lg font-medium max-md:text-base focus-within:border-blue-500 transition-all duration-200 max-md:px-4" placeholder = "Write your review (max 110 characters)" maxLength = "110"/>
                            <div className = "flex max-md:flex-row md:flex-row w-full md:w-auto">
                                <div className = "h-12 w-1/2 bg-blue-500 rounded-bl-xl flex justify-center items-center text-lg text-white font-medium md:hidden">
                                    <i className = "fa-solid fa-inbox"></i>
                                </div>
                                <button type = "submit" className = "h-16 w-16 max-md:h-12 max-md:w-1/2 bg-[#171717] md:rounded-r-xl max-md:rounded-br-xl flex justify-center items-center text-lg text-white font-medium border-4 border-[#171717] md:hover:bg-white md:hover:text-[#171717] transition-all duration-200">
                                    <i className = "fa-solid fa-arrow-up"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default ReviewInbox