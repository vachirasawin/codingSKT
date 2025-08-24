"use client";

// import from Next.js
import React from "react";
import { useSession } from "next-auth/react";

// import from components
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Title from "./components/Title";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

function page() {
    const { data: session } = useSession();
    
    return (
        <div>
            <Navbar home/>
            <Title/>
            <Info/>
            <Footer home session = {session}/>
        </div>
    )
}

export default page