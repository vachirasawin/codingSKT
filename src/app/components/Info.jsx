// import from Next.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Info() {
    return (
        <div className = "px-4 border-b border-[#ececec] bg-white">
            <div className = "container mx-auto justify-self-center flex justify-around flex-wrap-reverse items-center gap-4 py-24 max-md:py-4">
                <div className = "w-lg flex flex-col gap-8 max-md:gap-4">
                    <div className = "flex flex-col gap-7 max-md:gap-4">
                        <div>
                            <h1 className = "text-5xl max-md:text-3xl font-bold text-[#171717]">
                                <span>coding</span>
                                <span className = "text-[#1d9dda]">S</span>
                                <span className = "text-[#df69a0]">K</span>
                                <span>T</span>
                            </h1>
                            <h2 className = "text-md max-md:text-xs font-medium">AI พยากรณ์ช่วงของเกรดในอนาคตจากข้อมูลเกรดเดิม</h2>
                        </div>
                        <div className = "text-[#9497a1] text-xl max-md:text-base">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, numquam?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, numquam?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, numquam?
                            </p>
                        </div>
                    </div>
                    <div className = "flex gap-2 max-md:flex-col">
                        <Link href = "/add information" className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-[#171717] text-white hover:bg-white hover:text-[#171717] h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">Add Information</Link>
                        <Link href = "/profile" className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-white text-[#171717] hover:bg-[#171717] hover:text-white h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info