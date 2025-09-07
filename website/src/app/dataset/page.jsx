"use client";

// import from Next.js
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import TitleFooter from "../components/TitleFooter";
import Histogram from "../components/Histogram";

function page() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const contentsGPASubject = [
        ["Thai", 277],
        ["English - Basic", 277],
        ["English - Additional", 277],
        ["Math - Basic", 277],
        ["Math - Additional", 277],
        ["Science", 277],
        ["Physics", 277],
        ["Chemistry", 277],
        ["Biology", 277],
        ["Computer", 277],
        ["Robot", 176],
        ["Project", 97],
        ["Social", 277],
        ["Social - History / Buddhism", 277],
        ["Health", 277],
        ["PE", 277],
        ["Art", 277],
        ["Career", 298]
    ];
    const contentsGPASubjectMissing = [
        ["Thai", 208],
        ["English - Basic", 208],
        ["English - Additional", 208],
        ["Math - Basic", 208],
        ["Math - Additional", 208],
        ["Science", 208],
        ["Physics", 208],
        ["Chemistry", 208],
        ["Biology", 208],
        ["Computer", 208],
        ["Robot", 309],
        ["Project", 388],
        ["Social", 208],
        ["Social - History / Buddhism", 208],
        ["Health", 208],
        ["PE", 208],
        ["Art", 208],
        ["Career", 298]
    ];
    const contentsCreditsStudied = [
        ["Semister 1", 485],
        ["Semister 2", 485],
        ["Semister 3", 449],
        ["Semister 4", 449],
        ["Semister 5", 417],
        ["Semister 6", 417]
    ];
    const contentsCreditsStudiedMissing = [
        ["Semister 1", 0],
        ["Semister 2", 0],
        ["Semister 3", 36],
        ["Semister 4", 36],
        ["Semister 5", 68],
        ["Semister 6", 68]
    ];
    const contentsCreditsEarned = [
        ["Semister 1", 485],
        ["Semister 2", 485],
        ["Semister 3", 449],
        ["Semister 4", 449],
        ["Semister 5", 417],
        ["Semister 6", 417]
    ];
    const contentsCreditsEarnedMissing = [
        ["Semister 1", 0],
        ["Semister 2", 0],
        ["Semister 3", 36],
        ["Semister 4", 36],
        ["Semister 5", 68],
        ["Semister 6", 68]
    ];
    const contentsGPA = [
        ["Semister 1", 485],
        ["Semister 2", 485],
        ["Semister 3", 449],
        ["Semister 4", 449],
        ["Semister 5", 417],
        ["Semister 6", 417]
    ];
    const contentsGPAMissing = [
        ["Semister 1", 0],
        ["Semister 2", 0],
        ["Semister 3", 36],
        ["Semister 4", 36],
        ["Semister 5", 68],
        ["Semister 6", 68]
    ];
    
    return (
        <div>
            <Navbar dataset/>
            <Title/>
            <TitleFooter title = "Dataset" description = "ชุดข้อมูลที่ใช้ในการสร้างโมเดล"/>
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
                                    ภายในชุดข้อมูลที่ใช้ในการสร้างโมเดลมีข้อมูลต่าง ๆ ได้แก่ ชื่อวิชา เกรดเฉลี่ยรายวิชา หน่วยกิตรายวิชา หน่วยกิตที่เรียน หน่วยกิตที่ได้ และเกรดเฉลี่ยรวม
                                </p>
                                <p>
                                    ไม่มีการใช้ข้อมูลส่วนตัวอื่น ๆ ได้แก่ ชื่อจริง นามสกุล รหัสประจำตัวนักเรียน ในการสร้างโมเดล
                                </p>
                            </div>
                        </div>
                        <div className = "flex gap-2 max-md:flex-col" data-aos = "fade-up">
                            <a download href = "/dataset.csv" className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-[#171717] text-white hover:bg-white hover:text-[#171717] h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">Download Dataset (csv)</a>
                            <Link href = "https://docs.google.com/spreadsheets/d/14AVTqTjFpizkUYRNChTZEBuRqEnWDXt5j4BaY6go-hs/edit?usp=sharing" className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-white text-[#171717] hover:bg-[#171717] hover:text-white h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">Open Dataset</Link>
                        </div>
                    </div>
                    <div className = "w-max h-max p-4 rounded-2xl shadow-md bg-white" data-aos = "fade-up">
                        <Image src = "/Regression.png" unoptimized width = {2373} height = {1311} className = "object-contain w-lg max-lg:w-full web" alt = "AI"/>
                    </div>
                </div>
            </div>
            <Histogram data = {contentsGPASubject} bg = "bg-[#f7f7f7]" title = "Non-Missing" subTitle = "Subject GPA" description = "เกรดเฉลี่ยรายวิชา ที่มีค่า" dataset/>
            <Histogram data = {contentsGPASubjectMissing} bg = "bg-[#f7f7f7]" title = "Missing" subTitle = "Subject GPA" description = "เกรดเฉลี่ยรายวิชา ที่ไม่มีค่า" dataset/>
            <Histogram data = {contentsCreditsStudied} bg = "bg-[#f7f7f7]" title = "Non-Missing" subTitle = "Credits Studied" description = "หน่วยกิตที่เรียน ที่มีค่า" dataset/>
            <Histogram data = {contentsCreditsStudiedMissing} bg = "bg-[#f7f7f7]" title = "Missing" subTitle = "Credits Studied" description = "หน่วยกิตที่เรียน ที่ไม่มีค่า" dataset/>
            <Histogram data = {contentsCreditsEarned} bg = "bg-[#f7f7f7]" title = "Non-Missing" subTitle = "Credits Earned" description = "หน่วยกิตที่ได้ ที่มีค่า" dataset/>
            <Histogram data = {contentsCreditsEarnedMissing} bg = "bg-[#f7f7f7]" title = "Missing" subTitle = "Credits Earned" description = "หน่วยกิตที่ได้ ที่ไม่มีค่า" dataset/>
            <Histogram data = {contentsGPA} bg = "bg-[#f7f7f7]" title = "Non-Missing" subTitle = "GPA" description = "เกรดเฉลี่ยรวม ที่มีค่า" dataset/>
            <Histogram data = {contentsGPAMissing} bg = "bg-[#f7f7f7]" title = "Missing" subTitle = "GPA" description = "เกรดเฉลี่ยรวม ที่ไม่มีค่า" dataset/>
            <Footer dataset/>
        </div>
    )
}

export default page
