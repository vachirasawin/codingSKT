// import from Next.js
import React from "react";
import "../globals.css";

function Histogram({ data }) {
    const maxHeight = 384;

    return (
        <div className = "px-4 border-b border-[#ececec]">
            <div className = "container mx-auto justify-self-center py-24 max-md:py-4 flex items-center justify-center">
                <div className = "gap-0.5 flex flex-col overflow-x-auto overflow-y-hidden hide-scrollbar">
                    <div className = "border-l border-b border-[#9497a1] w-max px-4 h-96 flex gap-12 items-end">
                        {data.map((data, index) => {
                            const heightLower = data.lower * (maxHeight / 4);
                            const heightUpper = (data.upper - data.lower) * (maxHeight / 4);
                            
                            return (
                                <div key = {index} className = "shadow-xl">
                                    <div className = "bg-[#ffffff] w-12 rounded-t-xl border-2 border-b-0 border-[#606470] flex justify-center items-center min-md:hover:text-[#171717] min-md:text-transparent text-[#171717] transition-all duration-200 font-medium text-xs" style = {{ height: `${heightUpper}px` }}>{data.upper}</div>
                                    <div className = "bg-[#ececec] w-12 border-x-2 border-[#606470] flex justify-center items-center min-md:hover:text-[#171717] min-md:text-transparent text-[#171717] transition-all duration-200 font-medium text-xs" style = {{ height: `${heightLower}px` }}>{data.lower}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className = "border-l border-transparent w-max pt-2 px-4 flex gap-12 bg-[#f7f7f7] z-10">
                        {data.map((data, index) => (
                            <div className = "w-12 text-center flex justify-center items-center gap-2" key = {index}>
                                <i className = {`${(data.title === "Thai" || data.title === "English") && "fa-solid fa-language"} ${data.title === "Math" && "fa-solid fa-calculator"} ${(data.title === "Science" || data.title === "Physics") && "fa-solid fa-atom"} ${data.title === "Chemistry" && "fa-solid fa-flask"} ${data.title === "Biology" && "fa-solid fa-microscope"} ${data.title === "Computer" && "fa-solid fa-computer"} ${data.title === "Robot" && "fa-solid fa-robot"} ${data.title === "Project" && "fa-solid fa-diagram-project"} ${data.title === "Social" && "fa-solid fa-people-group"} ${(data.title === "Social" && data.description === "History / Buddhism") && "fa-solid fa-dharmachakra"} ${data.title === "Health" && "fa-solid fa-book-medical"} ${data.title === "PE" && "fa-solid fa-dumbbell"} ${data.title === "Art" && "fa-solid fa-palette"} ${data.title === "Career" && "hidden"} text-sm`}></i>
                                <div className = "flex flex-col justify-center">
                                    <p className = "text-[#171717] text-[12px] font-semibold">{data.title}</p>
                                    <p className = "text-[#9497a1] text-[8px] font-medium">{data.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Histogram