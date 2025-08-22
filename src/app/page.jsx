"use client";

// import from Next.js
import React from "react";

// import from components
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Title from "./components/Title";
import Footer from "./components/Footer";

function page() {
    
    return (
        <div>
            <Navbar home/>
            <Title/>
            <Info/>
            <Footer home/>
        </div>
    )
}

export default page