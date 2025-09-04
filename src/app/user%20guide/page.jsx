"use client";

// import from Next.js
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import TitleFooter from "../components/TitleFooter";
import Footer from "../components/Footer";
import ReviewInbox from "../components/ReviewInbox";
import ReviewCard from "../components/ReviewCard";

function page() {
    const { data: session } = useSession();

    let typeAdmin = false;
    if (session?.user?.email === "vachirasawin.mah@gmail.com") {
        typeAdmin = true;
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const contents = [
        {
            title: "Title",
            image: "-",
            extension: "-",
            content: "Content",
            description: "Description",
            width: "-",
            height: "-",
            link: "-",
            symbol: "-",
            main: "-"
        }
    ];
    
    return (
        <div>
            <Navbar userGuide/>
            <Title/>
            <TitleFooter title = "User Guide" description = "คู่มือการใช้งานเว็บแอปพลิเคชัน"/>
            <div className = "px-4 border-b border-[#ececec] bg-white">
                <div className = "container mx-auto justify-self-center flex justify-around flex-wrap-reverse items-center gap-16 max-md:gap-8 py-24 max-md:py-4">
                    <div className = "w-lg flex flex-col gap-8 max-md:gap-4">
                        <div className = "flex flex-col gap-7 max-md:gap-4">
                            <div data-aos = "fade-up">
                                <h1 className = "text-5xl max-md:text-3xl font-bold text-[#171717]">
                                    <span>coding</span>
                                    <span className = "text-[#1d9dda]">S</span>
                                    <span className = "text-[#df69a0]">K</span>
                                    <span>T</span>
                                </h1>
                                <h2 className = "text-md max-md:text-xs font-medium">AI พยากรณ์ช่วงของเกรดในอนาคตจากข้อมูลเกรดเดิม</h2>
                                <div className = "w-36 border-2 border-blue-500 rounded-md mt-2"></div>
                            </div>
                            <div className = "text-[#9497a1] text-xl max-md:text-base" data-aos = "fade-up">
                                <p>
                                    การพยากรณ์ช่วงของเกรดในอนาคตของผู้เรียนโดยแสดงผลเป็นช่วงโดยมีจุดต่ำสุดและจุดสูงสุด
                                </p>
                                <p>
                                    โดยใช้ AI สาขา Machine Learning ประเภท Supervised Learning แบบ Regression ในการพยากรณ์
                                </p>
                                <p>
                                    โดยใช้ข้อมูลจากชื่อวิชา เกรดเฉลี่ยรายวิชา หน่วยกิตรายวิชา หน่วยกิตที่เรียน หน่วยกิตที่ได้ และเกรดเฉลี่ยรวมในการพัฒนา AI
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image src = "/AI.jpg" unoptimized width = {2000} height = {1300} className = "object-contain w-lg max-lg:w-full rounded-2xl shadow-md" alt = "AI" data-aos = "fade-up"/>
                </div>
            </div>
            <ReviewCard/>
            <ReviewInbox/>
            <Footer typeAdmin userGuide session = {session}/>
        </div>
    )
}

export default page
