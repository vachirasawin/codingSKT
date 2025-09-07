"use client";

// import from Next.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Grid({ data }) {
    if (!data || !Array.isArray(data)) return null;

    const dataLength = data.length;
    
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className = "px-4 border-b border-[#ececec]">
            <div className = "container mx-auto justify-self-center flex flex-col justify-center items-center gap-8 max-md:gap-4 py-24 max-md:py-8">
                <div className = "flex justify-center w-full" data-aos = "fade-up">
                    <div className = "flex flex-col gap-2 text-center w-full justify-center items-center">
                        <div className = "flex justify-center items-center gap-2.5 flex-wrap">
                            <h1 className = "text-4xl font-bold max-md:text-2x text-blue-500">GPA</h1>
                            <h1 className = "text-4xl font-bold max-md:text-2x">Data</h1>
                        </div>
                        <p className = "text-[#9497a1] text-lg max-md:text-sm w-lg max-sm:w-full">ข้อมูลเกรดของผู้ใช้</p>
                    </div>
                </div>
                <div className = "w-full flex items-center justify-start overflow-x-auto styleScrollbar" data-aos = "fade-up">
                    <div>
                        <div className = "flex">
                            <div className = "border border-r-0 border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 rounded-tl-xl">
                                <i className = "fa-solid fa-book text-base"></i>
                                <div className = "flex flex-col justify-center w-max">
                                    <p className = "text-[#171717] text-sm font-semibold">Subjects</p>
                                    <p className = "text-[#9497a1] text-[10px] font-medium">วิชา</p>
                                </div>
                            </div>
                            {data.map((data, index) => {
                                const parts = data[0] ? data[0].split(" - ") : ["", ""];
                                
                                return (
                                    <div className = {`border border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 ${(index === dataLength - 1) && "rounded-tr-xl"} ${(index !== dataLength - 1 && dataLength !== 1) && "border-r-0"}`} key = {`${index} - title`}>
                                        <i className = {`${(parts[0] === "Thai" || parts[0] === "English") && "fa-solid fa-language"} ${parts[0] === "Math" && "fa-solid fa-calculator"} ${(parts[0] === "Science" || parts[0] === "Physics") && "fa-solid fa-atom"} ${parts[0] === "Chemistry" && "fa-solid fa-flask"} ${parts[0] === "Biology" && "fa-solid fa-microscope"} ${parts[0] === "Computer" && "fa-solid fa-computer"} ${parts[0] === "Robot" && "fa-solid fa-robot"} ${parts[0] === "Project" && "fa-solid fa-diagram-project"} ${parts[0] === "Social" && "fa-solid fa-people-group"} ${(parts[0] === "Social" && data.description === "History / Buddhism") && "fa-solid fa-dharmachakra"} ${parts[0] === "Health" && "fa-solid fa-book-medical"} ${parts[0] === "PE" && "fa-solid fa-dumbbell"} ${parts[0] === "Art" && "fa-solid fa-palette"} ${parts[0] === "Career" && "hidden"} text-base`}></i>
                                        <div className = "flex flex-col justify-center w-max">
                                            <p className = "text-[#171717] text-sm font-semibold">{parts[0]}</p>
                                            {parts[1] !== "" && (
                                                <p className = "text-[#9497a1] text-[10px] font-medium">{parts[1]}</p>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className = "flex">
                            <div className = "border border-r-0 border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12">
                                <div className = "flex flex-col justify-center w-max">
                                    <p className = "text-[#171717] text-sm font-semibold">Credit</p>
                                    <p className = "text-[#9497a1] text-[10px] font-medium">หน่วยกิต</p>
                                </div>
                            </div>
                            {data.map((data, index) => (
                                <div className = {`border border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 ${(index != dataLength - 1 && dataLength !== 1) && "border-r-0"}`} key = {`${index} - lower`}>
                                    {data[1]}
                                </div>
                            ))}
                        </div>
                        <div className = "flex">
                            <div className = "border border-r-0 border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12">
                                <i className = "fa-solid fa-1 text-base"></i>
                                <div className = "flex flex-col justify-center w-max">
                                    <p className = "text-[#171717] text-sm font-semibold">GPA 1</p>
                                    <p className = "text-[#9497a1] text-[10px] font-medium">เกรดเทอมที่ 1</p>
                                </div>
                            </div>
                            {data.map((data, index) => (
                                <div className = {`border border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 ${(index != dataLength - 1 && dataLength !== 1) && "border-r-0"}`} key = {`${index} - lower`}>
                                    {data[2]}
                                </div>
                            ))}
                        </div>
                        <div className = "flex">
                            <div className = "border border-r-0 border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12">
                                <i className = "fa-solid fa-2 text-base"></i>
                                <div className = "flex flex-col justify-center w-max">
                                    <p className = "text-[#171717] text-sm font-semibold">GPA 2</p>
                                    <p className = "text-[#9497a1] text-[10px] font-medium">เกรดเทอมที่ 2</p>
                                </div>
                            </div>
                            {data.map((data, index) => (
                                <div className = {`border border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 ${(index != dataLength - 1 && dataLength !== 1) && "border-r-0"}`} key = {`${index} - lower`}>
                                    {data[3]}
                                </div>
                            ))}
                        </div>
                        <div className = "flex">
                            <div className = "border border-r-0 border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12">
                                <i className = "fa-solid fa-3 text-base"></i>
                                <div className = "flex flex-col justify-center w-max">
                                    <p className = "text-[#171717] text-sm font-semibold">GPA 3</p>
                                    <p className = "text-[#9497a1] text-[10px] font-medium">เกรดเทอมที่ 3</p>
                                </div>
                            </div>
                            {data.map((data, index) => (
                                <div className = {`border border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 ${(index != dataLength - 1 && dataLength !== 1) && "border-r-0"}`} key = {`${index} - lower`}>
                                    {data[4]}
                                </div>
                            ))}
                        </div>
                        <div className = "flex">
                            <div className = "border border-r-0 border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12">
                                <i className = "fa-solid fa-4 text-base"></i>
                                <div className = "flex flex-col justify-center w-max">
                                    <p className = "text-[#171717] text-sm font-semibold">GPA 4</p>
                                    <p className = "text-[#9497a1] text-[10px] font-medium">เกรดเทอมที่ 4</p>
                                </div>
                            </div>
                            {data.map((data, index) => (
                                <div className = {`border border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 ${(index != dataLength - 1 && dataLength !== 1) && "border-r-0"}`} key = {`${index} - lower`}>
                                    {data[5]}
                                </div>
                            ))}
                        </div>
                        <div className = "flex">
                            <div className = "border border-r-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 rounded-bl-xl">
                                <i className = "fa-solid fa-5 text-base"></i>
                                <div className = "flex flex-col justify-center w-max">
                                    <p className = "text-[#171717] text-sm font-semibold">GPA 5</p>
                                    <p className = "text-[#9497a1] text-[10px] font-medium">เกรดเทอมที่ 5</p>
                                </div>
                            </div>
                            {data.map((data, index) => (
                                <div className = {`border border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 ${(index === dataLength - 1) && "rounded-br-xl"} ${(index !== dataLength - 1 && dataLength !== 1) && "border-r-0"}`} key = {`${index} - upper`}>
                                    {data[6]}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid