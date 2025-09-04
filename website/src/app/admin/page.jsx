"use client";

// import from Next.js
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

// import from components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TitleFooter from "../components/TitleFooter";
import Title from "../components/Title";
import ReviewCard from "../components/ReviewCard";

function page() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        AOS.init({ duration: 1000 });   
    }, []);

    useEffect(() => {
        if (!session || session.user.email !== "vachirasawin.mah@gmail.com") {
            router.push("/");
        }
    }, [session, router])
    
    return (
        <div>
            <Navbar admin/>
            <Title/>
            <TitleFooter title = "Admin" description = "ควบคุมเว็บแอปพลิเคชัน"/>
            <ReviewCard admin/>
            <Footer admin session = {session}/>
        </div>
    )
}

export default page
