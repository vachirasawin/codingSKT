"use client";

// import from Next.js
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

// import from components
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Title from "./components/Title";
import Footer from "./components/Footer";
import ReviewInbox from "./components/ReviewInbox";
import ReviewCard from "./components/ReviewCard";
import Count from "./components/Count";
import Card from "./components/Card";

function page() {
    const { data: session } = useSession();

    const contentsPredict = [
        {
            title: "Sign In / Sign Up",
            image: "-",
            extension: "-",
            content: "เข้าสู่ระบบเพื่อทำการกรอกข้อมูล",
            description: "เข้าสู่ระบบ",
            width: "-",
            height: "-",
            link: "/signin",
            symbol: "fa-solid fa-arrow-right-to-bracket"
        },
        {
            title: "Add Information",
            image: "-",
            extension: "-",
            content: "เพิ่มข้อมูลเกรดรายวิชาและหน่วยกิตรายวิชา เพื่อทำการพยากรณ์",
            description: "เพิ่มข้อมูล",
            width: "-",
            height: "-",
            link: "/add-information",
            symbol: "fa-solid fa-plus"
        },
        {
            title: "Dashboard",
            image: "-",
            extension: "-",
            content: "ดูการพยากรณ์เกรดในเทอมต่อไปจากผลลัพธ์ของโมเดล",
            description: "พยากรณ์เกรดในเทอมต่อไป",
            width: "-",
            height: "-",
            link: "/dashboard",
            symbol: "fa-solid fa-eye"
        }
    ]
    
    return (
        <div>
            <Navbar home/>
            <Title/>
            <Info/>
            <Card contents = {contentsPredict} title = "How To Predict" subTitle = "GPA" description = "วิธีการพยากรณ์เกรดในเทอมต่อไป" h = "h-70"/>
            <Count/>
            <ReviewCard/>
            <ReviewInbox/>
            <Footer home/>
        </div>
    )
}

export default page