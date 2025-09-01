"use client";

// import from Next.js
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Card from "../components/Card";
import Footer from "../components/Footer";

function page() {
    const { data: session } = useSession();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const contents = [
        {
            title: "Train-Test AI",
            image: "-",
            extension: "-",
            content: "ใช้ข้อมูลส่วนตัวทางการเรียน ได้แก่ ชื่อวิชา เกรดเฉลี่ยรายวิชา หน่วยกิตรายวิชา หน่วยกิตที่เรียน หน่วยกิตที่ได้ เกรดเฉลี่ยรวม โดยไม่มีการระบุชื่อ",
            description: "การฝึกและสอนโมเดล",
            width: "-",
            height: "-",
            link: "-",
            symbol: "fa-solid fa-brain",
            main: "-"
        },
        {
            title: "User Data for Prediction",
            image: "-",
            extension: "-",
            content: "ใช้ข้อมูลส่วนของผู้ใช้ ได้แก่ ชื่อวิชา เกรดเฉลี่ยรายวิชา หน่วยกิตรายวิชา หน่วยกิตที่เรียน หน่วยกิตที่ได้ เกรดเฉลี่ยรวม โดยไม่มีการระบุชื่อ",
            description: "การใช้ข้อมูลของผู้ใช้เพื่อการพยากรณ์",
            width: "-",
            height: "-",
            link: "-",
            symbol: "fa-solid fa-database",
            main: "-"
        }
    ];
    
    return (
        <div>
            <Navbar/>
            <Title/>
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
                        {session && (
                            <div className = "flex gap-2 max-md:flex-col" data-aos = "fade-up">
                                <Link href = "/add information" className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-[#171717] text-white hover:bg-white hover:text-[#171717] h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">Add Information</Link>
                                <Link href = "/profile" className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-white text-[#171717] hover:bg-[#171717] hover:text-white h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">Profile</Link>
                            </div>
                        )}
                    </div>
                    <Image src = "/AI.jpg" unoptimized width = {2000} height = {1300} className = "object-contain w-lg max-lg:w-full rounded-2xl shadow-md" alt = "AI" data-aos = "fade-up"/>
                </div>
            </div>
            <Card contents = {contents} title = "Privacy Notice" description = "ข้อกำหนดการใช้ข้อมูลส่วนตัวของผู้เรียนและผู้ใช้" h = "h-86"/>
            <Footer privacyNotice session = {session}/>
        </div>
    )
}

export default page
