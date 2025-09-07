// import from Next.js
import React, { useEffect } from "react";
import "../globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Histogram({ data, bg, title, subTitle, inverse, description, predict, information, gpa, dataset, info }) {
    const maxHeight = 384;
    const countArray = [0, 0, 0, 0, 0];
    let count = 0;

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    
    if (!Array.isArray(data)) return null;
    for (let i = 0; i < data.length; i++) {
        for (let j = 2; j < data[i].length; j++) {
            countArray[j - 2] = countArray[j - 2] + Number(data[i][j]);
        }
    }

    for (let i = 0; i < countArray.length; i++) {
        if (countArray[i] !== 0) count = count + 1;
    }

    return (
        <div className = {`px-4 ${!info && "border-b border-[#ececec]"}`}>
            <div className = "container mx-auto justify-self-center flex flex-col items-center justify-center gap-8 max-md:gap-4 py-24 max-md:py-8">
                <div className = "flex justify-center w-full" data-aos = "fade-up">
                    <div className = "flex flex-col gap-2 text-center w-full justify-center items-center">
                        <div className = {`flex justify-center items-center gap-2.5 flex-wrap ${inverse && "flex-row-reverse"}`}>
                            <h1 className = "text-4xl font-bold max-md:text-2x text-blue-500">{title}</h1>
                            <h1 className = "text-4xl font-bold max-md:text-2x">{subTitle}</h1>
                        </div>
                        <p className = "text-[#9497a1] text-lg max-md:text-sm w-lg max-sm:w-full">{description}</p>
                    </div>
                </div>
                <div className = "flex gap-2 overflow-x-auto overflow-y-hidden styleScrollbar max-w-full w-max min-w-0" data-aos = "fade-up">
                    {dataset ? (
                        <div className = "h-96 text-[12px] text-[#9497a1] font-medium flex flex-col">
                            <div className = "h-1/11 text-end"><p>500</p></div>
                            <div className = "h-1/11 text-end"><p>450</p></div>
                            <div className = "h-1/11 text-end"><p>400</p></div>
                            <div className = "h-1/11 text-end"><p>350</p></div>
                            <div className = "h-1/11 text-end"><p>300</p></div>
                            <div className = "h-1/11 text-end"><p>250</p></div>
                            <div className = "h-1/11 text-end"><p>200</p></div>
                            <div className = "h-1/11 text-end"><p>150</p></div>
                            <div className = "h-1/11 text-end"><p>100</p></div>
                            <div className = "h-1/11 text-end"><p>50</p></div>
                            <div className = "h-1/11 text-end"><p>0</p></div>
                        </div>
                    ) : (
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
                    )}
                    <div className = "gap-0.5 flex flex-col mb-4 w-max">
                        <div className = "border-l border-b border-[#9497a1] min-w-fit px-4 h-96 flex gap-12 items-end">
                            {information && (
                                data.map((data, index) => {
                                    const member = Number(gpa + 1);
                                    const height = data[member] * (maxHeight / 4);
                                    
                                    return (
                                        <div key = {index} data-aos = "fade-up" data-aos-delay = {index * 100} data-aos-duration = "500">
                                            <div className = "bg-[#ffffff] w-12 rounded-t-xl border-2 border-b-0 border-[#606470] flex justify-center items-center min-md:hover:text-[#171717] min-md:text-transparent text-[#171717] transition-all duration-200 font-medium text-xs" style = {{ height: `${height}px`}}>{data[member]}</div>
                                        </div>
                                    )
                                })
                            )}
                            {predict && (
                                data.map((data, index) => {
                                    if (!Array.isArray(data)) return null;
                                    const height = (data.slice(2, 7).reduce((sum, val) => sum + Number(val), 0) / count) * (maxHeight / 4);
                                    
                                    return (
                                        <div key = {index} data-aos = "fade-up" data-aos-delay = {index * 100} data-aos-duration = "500">
                                            <div className = "bg-[#ffffff] w-12 rounded-t-xl border-2 border-b-0 border-[#606470] flex justify-center items-center min-md:hover:text-[#171717] min-md:text-transparent text-[#171717] transition-all duration-200 font-medium text-xs" style = {{ height: `${height}px`}}>{data.slice(2, 7).reduce((sum, val) => sum + Number(val), 0) / count}</div>
                                        </div>
                                    )
                                })
                            )}
                            {dataset && (
                                data.map((data, index) => {
                                    const height = data[1] * (maxHeight / 500);
                                    
                                    return (
                                        <div key = {index} data-aos = "fade-up" data-aos-delay = {index * 100} data-aos-duration = "500">
                                            <div className = "bg-[#ffffff] w-12 rounded-t-xl border-2 border-b-0 border-[#606470] flex justify-center items-center min-md:hover:text-[#171717] min-md:text-transparent text-[#171717] transition-all duration-200 font-medium text-xs" style = {{ height: `${height}px`}}>{data[1]}</div>
                                        </div>
                                    )
                                })
                            )}
                            {(!information && !predict && !dataset) && (
                                data.map((data, index) => {
                                    const height = data[1] * (maxHeight / 4);
                                    
                                    return (
                                        <div key = {index} data-aos = "fade-up" data-aos-delay = {index * 100} data-aos-duration = "500">
                                            <div className = "bg-[#ffffff] w-12 rounded-t-xl border-2 border-b-0 border-[#606470] flex justify-center items-center min-md:hover:text-[#171717] min-md:text-transparent text-[#171717] transition-all duration-200 font-medium text-xs" style = {{ height: `${height}px`}}>{data.h}</div>
                                        </div>
                                    )
                                })
                            )}
                        </div>
                        <div className = {`border-l border-transparent min-w-fit pt-2 px-4 flex gap-12 z-10 ${bg}`}>
                            {data.map((data, index) => {
                                const parts = data[0] ? data[0].split(" - ") : ["", ""];

                                return (
                                    <div className = "w-12 text-center flex flex-col items-center gap-2" key = {index}>
                                        <i className = {`${(parts[0] === "Thai" || parts[0] === "English") && "fa-solid fa-language"} ${parts[0] === "Math" && "fa-solid fa-calculator"} ${(parts[0] === "Science" || parts[0] === "Physics") && "fa-solid fa-atom"} ${parts[0] === "Chemistry" && "fa-solid fa-flask"} ${parts[0] === "Biology" && "fa-solid fa-microscope"} ${parts[0] === "Computer" && "fa-solid fa-computer"} ${parts[0] === "Robot" && "fa-solid fa-robot"} ${parts[0] === "Project" && "fa-solid fa-diagram-project"} ${parts[0] === "Social" && "fa-solid fa-people-group"} ${(parts[0] === "Social" && data.description === "History / Buddhism") && "fa-solid fa-dharmachakra"} ${parts[0] === "Health" && "fa-solid fa-book-medical"} ${parts[0] === "PE" && "fa-solid fa-dumbbell"} ${parts[0] === "Art" && "fa-solid fa-palette"} ${parts[0] === "Subject" && "fa-solid fa-book"} ${parts[0] === "Career" && "hidden"} text-sm`}></i>
                                        <div className = "flex flex-col justify-center">
                                            <p className = "text-[#171717] text-[12px] font-semibold">{parts[0]}</p>
                                            <p className = "text-[#9497a1] text-[8px] font-medium">{parts[1]}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Histogram