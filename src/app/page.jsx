"use client";

// import from Next.js
import React from "react";
import { useSession } from "next-auth/react";

// import from components
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Title from "./components/Title";

function page() {
    const { data: session } = useSession();
    
    return (
        <div>
            <Navbar home session = {session}/>
            <Title/>
            <Info/>
        </div>
    )
}

export default page