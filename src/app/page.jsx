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

function page() {
    const { data: session } = useSession();

    let typeAdmin = false;
    if (session?.user?.email === "vachirasawin.mah@gmail.com") {
        typeAdmin = true;
    };
    
    return (
        <div>
            <Navbar home/>
            <Title/>
            <Info/>
            <Count/>
            <ReviewCard/>
            <ReviewInbox/>
            <Footer home typeAdmin session = {session}/>
        </div>
    )
}

export default page