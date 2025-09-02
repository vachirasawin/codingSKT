"use client";

// import from Next.js
import React from "react";
import { useSession } from "next-auth/react";

// import from components
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Card from "./components/Card";
import ReviewInbox from "./components/ReviewInbox";

function page() {
    const { data: session } = useSession();

    const contents = [
        {
            title: "หัวข้อการรีวิว",
            image: "logo",
            extension: "png",
            content: "รีวิว",
            description: "first name & last name",
            link: "-"
        },
        {
            title: "หัวข้อการรีวิว",
            image: "logo",
            extension: "png",
            content: "รีวิว",
            description: "first name & last name",
            link: "-"
        },
        {
            title: "หัวข้อการรีวิว",
            image: "logo",
            extension: "png",
            content: "รีวิว",
            description: "first name & last name",
            link: "-"
        },
        {
            title: "หัวข้อการรีวิว",
            image: "logo",
            extension: "png",
            content: "รีวิว",
            description: "first name & last name",
            link: "-"
        },
        {
            title: "หัวข้อการรีวิว",
            image: "logo",
            extension: "png",
            content: "รีวิว",
            description: "first name & last name",
            link: "-"
        },
        {
            title: "หัวข้อการรีวิว",
            image: "logo",
            extension: "png",
            content: "รีวิว",
            description: "first name & last name",
            link: "-"
        }
    ]
    
    return (
        <div>
            <Navbar home/>
            <Title/>
            <Info/>
            <Card contents = {contents} subTitle = "User" title = "Reviews" inverse description = "รีวิวจากผู้ใช้งาน" h = "84"/>
            <ReviewInbox/>
            <Footer home session = {session}/>
        </div>
    )
}

export default page