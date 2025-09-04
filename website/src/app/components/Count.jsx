"use client";

// import from Next.js
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Count({ slug }) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [views, setViews] = useState(0);
    useEffect(() => {
        fetch(`/api/views/${slug}`)
            .then(res => res.json())
            .then(data => setViews(data.views));
    }, [slug]);

    const [users, setUsers] = useState(0);
    useEffect(() => {
        fetch("/api/users")
            .then(res => res.json())
            .then(data => setUsers(data.totalUsers));
    }, []);

    const [reviews, setReviews] = useState(0);
    useEffect(() => {
        fetch("/api/reviews")
            .then(res => res.json())
            .then(data => setReviews(data.totalReviews));
    }, []);

    const content = [
        {
            title: "Views",
            description: "จำนวนการเข้าชม",
            count: views
        },
        {
            title: "Users",
            description: "จำนวนผู้ใช้งาน",
            count: users
        },
        {
            title: "Reviews",
            description: "จำนวนการรีวิว",
            count: reviews
        }
    ]

    return (
        <div className = "px-4 border-b border-[#ececec] bg-[#ffffff]">
            <div className = "container mx-auto justify-self-center flex justify-center items-center flex-col gap-8 max-md:gap-4 py-24 max-md:py-8">
                <div data-aos = "fade-up" className = "w-full">
                    <h1 className = "text-5xl max-md:text-3xl font-bold text-[#171717]">
                        <span>coding</span>
                        <span className = "text-[#1d9dda]">S</span>
                        <span className = "text-[#df69a0]">K</span>
                        <span>T</span>
                    </h1>
                    <h2 className = "text-md max-md:text-xs font-medium">ข้อมูลสถิติการใช้งานเว็บแอปพลิเคชัน</h2>
                    <div className = "w-36 border-2 border-blue-500 rounded-md mt-2"></div>
                </div>
                <div className = "full w-full flex flex-wrap gap-4 justify-around items-center" data-aos = "fade-up">
                    {content.map((data, index) => (
                        <div key = {data.title} className = "flex flex-col gap-4">
                            <div>
                                <h1 className = "text-2xl text-[#171717] font-bold">{data.title}</h1>
                                <p className = "font-medium text-[#9497a1]">{data.description}</p>
                            </div>
                            <h1 className = "text-blue-500 text-6xl">{data.count}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Count
