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

    const contentsML = [
        {
            title: "Classification",
            image: "-",
            extension: "-",
            content: "ใช้กับปัญหาที่คำตอบอยู่ในรูปหมวดหมู่ (Class) โดยผลลัพธ์ที่นำไปสอนต้องเป็นค่าที่ไม่ต่อเนื่อง",
            description: "Supervised Learning",
            width: "-",
            height: "-",
            link: "/machine-learning.pdf",
            symbol: "fa-solid fa-brain",
            main: "true"
        },
        {
            title: "Regression",
            image: "-",
            extension: "-",
            content: "ใช้กับปัญหาที่คำตอบอยู่ในรูปตัวเลขต่อเนื่อง โดยผลลัพธ์ที่นำไปสอนต้องเป็นค่าที่ต่อเนื่อง",
            description: "Supervised Learning",
            width: "-",
            height: "-",
            link: "/machine-learning.pdf",
            symbol: "fa-solid fa-brain",
            main: "-",
        },
        {
            title: "Clustering",
            image: "-",
            extension: "-",
            content: "แบ่งข้อมูลออกเป็นกลุ่ม (Clusters) ตามคุณสมบัติ (Feature) ที่คล้ายกันเพื่อหาความสัมพันธ์แฝงในข้อมูล",
            description: "Unsupervised Learning",
            width: "-",
            height: "-",
            link: "/machine-learning.pdf",
            symbol: "fa-solid fa-brain",
            main: "-"
        },
        {
            title: "Dimensionality Reduction",
            image: "-",
            extension: "-",
            content: "การลดจำนวนคุณสมบัติ (Features) ของข้อมูลให้เหลือเท่าที่จำเป็น เพื่อทำให้ประมวลผลเร็วขึ้น",
            description: "Unsupervised Learning",
            width: "-",
            height: "-",
            link: "/machine-learning.pdf",
            symbol: "fa-solid fa-brain",
            main: "-"
        },
        {
            title: "Association Rule Learning",
            image: "-",
            extension: "-",
            content: "การหาความสัมพันธ์ระหว่างรายการข้อมูล (สิ่งใดเกิดร่วมกันบ่อย)",
            description: "Unsupervised Learning",
            width: "-",
            height: "-",
            link: "/machine-learning.pdf",
            symbol: "fa-solid fa-brain",
            main: "-"
        },
        {
            title: "Model-Based",
            image: "-",
            extension: "-",
            content: "Agent พยายามสร้าง Model เพื่อทำนายสิ่งที่จะเกิดเมื่อทำบางสิ่ง",
            description: "Reinforcement Learning",
            width: "-",
            height: "-",
            link: "/machine-learning.pdf",
            symbol: "fa-solid fa-brain",
            main: "-"
        },
        {
            title: "Model-Free",
            image: "-",
            extension: "-",
            content: "Agent เรียนรู้การกระทำที่ดีที่สุดโดยไม่ต้องสร้าง Model",
            description: "Reinforcement Learning",
            width: "-",
            height: "-",
            link: "/machine-learning.pdf",
            symbol: "fa-solid fa-brain",
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
            <Card contents = {contentsML} subTitle = "Why We Use" title = "Supervised Learning" inverse downloadType downloadTitle = "reference source" description = "ทำไมถึงเลือกใช้ Supervised Learning เพื่อพยากรณ์ช่วงของผลการเรียนของผู้เรียนนอนาคต" h = "h-80"/>
            <Footer ourTeam session = {session}/>
        </div>
    )
}

export default page
