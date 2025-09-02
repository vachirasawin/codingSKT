// import from Next.js
import React, { useEffect } from "react";
import "../globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Histogram({ data, bg }) {
    const maxHeight = 384;

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className = "px-4" data-aos = "fade-up">
            <div className = "container mx-auto justify-self-center py-24 max-md:py-4 flex items-center justify-center">
                <div className = "flex gap-2 overflow-x-auto overflow-y-hidden styleScrollbar max-w-full w-full min-w-0">
                    <div className = "h-96 text-[12px] text-[#9497a1] font-medium flex flex-col">
                        <div className = "h-1/8 text-end"><p>4</p></div>
                        <div className = "h-1/8 text-end"><p>3.5</p></div>
                        <div className = "h-1/8 text-end"><p>3</p></div>
                        <div className = "h-1/8 text-end"><p>2.5</p></div>
                        <div className = "h-1/8 text-end"><p>2</p></div>
                        <div className = "h-1/8 text-end"><p>1.5</p></div>
                        <div className = "h-1/8 text-end"><p>1</p></div>
                        <div className = "h-1/8 text-end"><p>0</p></div>
                    </div>
                    <div className = "gap-0.5 flex flex-col mb-4">
                        <div className = "border-l border-b border-[#9497a1] min-w-fit px-4 h-96 flex gap-12 items-end">
                            {data.map((data, index) => {
                                const heightLower = data.lower * (maxHeight / 4);
                                const heightUpper = (data.upper - data.lower) * (maxHeight / 4);
                                
                                return (
                                    <div key = {index} data-aos = "fade-up" data-aos-delay = {index * 100} data-aos-duration = "500">
                                        <div className = "bg-[#ffffff] w-12 rounded-t-xl border-2 border-b-0 border-[#606470] flex justify-center items-center min-md:hover:text-[#171717] min-md:text-transparent text-[#171717] transition-all duration-200 font-medium text-xs" style = {{ height: `${heightUpper}px` }}>{data.upper}</div>
                                        <div className = "bg-[#ececec] w-12 border-x-2 border-[#606470] flex justify-center items-center min-md:hover:text-[#171717] min-md:text-transparent text-[#171717] transition-all duration-200 font-medium text-xs" style = {{ height: `${heightLower}px` }}>{data.lower}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className = {`border-l border-transparent min-w-fit pt-2 px-4 flex gap-12 z-10 ${bg}`}>
                            {data.map((data, index) => (
                                <div className = "w-12 text-center flex flex-col items-center gap-2" key = {index}>
                                    <i className = {`${(data.title === "Thai" || data.title === "English") && "fa-solid fa-language"} ${data.title === "Math" && "fa-solid fa-calculator"} ${(data.title === "Science" || data.title === "Physics") && "fa-solid fa-atom"} ${data.title === "Chemistry" && "fa-solid fa-flask"} ${data.title === "Biology" && "fa-solid fa-microscope"} ${data.title === "Computer" && "fa-solid fa-computer"} ${data.title === "Robot" && "fa-solid fa-robot"} ${data.title === "Project" && "fa-solid fa-diagram-project"} ${data.title === "Social" && "fa-solid fa-people-group"} ${(data.title === "Social" && data.description === "History / Buddhism") && "fa-solid fa-dharmachakra"} ${data.title === "Health" && "fa-solid fa-book-medical"} ${data.title === "PE" && "fa-solid fa-dumbbell"} ${data.title === "Art" && "fa-solid fa-palette"} ${data.title === "Subject" && "fa-solid fa-book"} ${data.title === "Career" && "hidden"} text-sm`}></i>
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
        </div>
    )
}

export default Histogram