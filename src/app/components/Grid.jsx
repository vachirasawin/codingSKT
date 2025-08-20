// import from Next.js
import React from "react";

function Grid({ data }) {
    const dataLength = data.length;

    return (
        <div className = "px-4 border-b border-[#ececec]">
            <div className = "container mx-auto justify-self-center py-24 max-md:py-4 flex items-center justify-start overflow-x-auto styleScrollbar">
                <div className = "shadow-xl rounded-xl">
                    <div className = "flex">
                        <div className = "border border-r-0 border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 rounded-tl-xl">
                            <i className = "fa-solid fa-book text-base"></i>
                            <div className = "flex flex-col justify-center w-max">
                                <p className = "text-[#171717] text-sm font-semibold">Subjects</p>
                                <p className = "text-[#9497a1] text-[10px] font-medium">วิชา</p>
                            </div>
                        </div>
                        {data.map((data, index) => (
                            <div className = {`border border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 ${(index === dataLength - 1) && "rounded-tr-xl"} ${(index !== dataLength - 1 && dataLength !== 1) && "border-r-0"}`} key = {`${index} - title`}>
                                <i className = {`${(data.title === "Thai" || data.title === "English") && "fa-solid fa-language"} ${data.title === "Math" && "fa-solid fa-calculator"} ${(data.title === "Science" || data.title === "Physics") && "fa-solid fa-atom"} ${data.title === "Chemistry" && "fa-solid fa-flask"} ${data.title === "Biology" && "fa-solid fa-microscope"} ${data.title === "Computer" && "fa-solid fa-computer"} ${data.title === "Robot" && "fa-solid fa-robot"} ${data.title === "Project" && "fa-solid fa-diagram-project"} ${data.title === "Social" && "fa-solid fa-people-group"} ${(data.title === "Social" && data.description === "History / Buddhism") && "fa-solid fa-dharmachakra"} ${data.title === "Health" && "fa-solid fa-book-medical"} ${data.title === "PE" && "fa-solid fa-dumbbell"} ${data.title === "Art" && "fa-solid fa-palette"} ${data.title === "Career" && "hidden"} text-base`}></i>
                                <div className = "flex flex-col justify-center w-max">
                                    <p className = "text-[#171717] text-sm font-semibold">{data.title}</p>
                                    <p className = "text-[#9497a1] text-[10px] font-medium">{data.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className = "flex">
                        <div className = "border border-r-0 border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12">
                            <i className = "fa-solid fa-arrow-down text-base"></i>
                            <div className = "flex flex-col justify-center w-max">
                                <p className = "text-[#171717] text-sm font-semibold">Lower</p>
                                <p className = "text-[#9497a1] text-[10px] font-medium">ต่ำที่สุด</p>
                            </div>
                        </div>
                        {data.map((data, index) => (
                            <div className = {`border border-b-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 ${(index != dataLength - 1 && dataLength !== 1) && "border-r-0"}`} key = {`${index} - lower`}>
                                {data.lower}
                            </div>
                        ))}
                    </div>
                    <div className = "flex">
                        <div className = "border border-r-0 border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 rounded-bl-xl">
                            <i className = "fa-solid fa-arrow-up text-base"></i>
                            <div className = "flex flex-col justify-center w-max">
                                <p className = "text-[#171717] text-sm font-semibold">Upper</p>
                                <p className = "text-[#9497a1] text-[10px] font-medium">สูงที่สุด</p>
                            </div>
                        </div>
                        {data.map((data, index) => (
                            <div className = {`border border-[#9497a1] flex justify-center items-center gap-2 w-42 h-12 ${(index === dataLength - 1) && "rounded-br-xl"} ${(index !== dataLength - 1 && dataLength !== 1) && "border-r-0"}`} key = {`${index} - upper`}>
                                {data.upper}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid