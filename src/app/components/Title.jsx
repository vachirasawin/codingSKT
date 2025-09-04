// import from Next.js
import React from "react";
import Image from "next/image";

function Title() {
    return (
        <div className = "mt-24 relative">
            <Image src = "/class.png" alt = "class" width = {1920} height = {1080} unoptimized className = "w-full h-44 lg:h-64 object-cover"/>
            <div className = "absolute inset-0 bg-black opacity-40"></div>
            <div className ="absolute inset-0 flex items-center justify-center p-4 text-center container mx-auto justify-self-center px-4">
                <h1 className = "text-3xl lg:text-5xl font-extrabold text-white drop-shadow-md">
                    การพยากรณ์ช่วงของผลการเรียนของผู้เรียนในอนาคต
                </h1>
            </div>
        </div>
    )
}

export default Title