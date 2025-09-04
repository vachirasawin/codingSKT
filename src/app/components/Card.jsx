// import from Next.js
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function Card({ contents, title, subTitle, description, h, inverse, downloadType, downloadTitle, typeAdmin, onDelete }) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className = "px-4 border-b border-[#ececec] bg-[#f7f7f7]">
            <div className = {`container mx-auto justify-self-center flex flex-col gap-8 max-md:gap-4 pt-24 max-md:pt-8 justify-center items-center`}>
                <div className = "flex justify-center w-full" data-aos = "fade-up">
                    <div className = "flex flex-col gap-2 text-center w-full justify-center items-center">
                        <div className = {`flex justify-center items-center gap-2.5 ${inverse && "flex-row-reverse flex-wrap-reverse"} flex-wrap`}>
                            <h1 className = "text-4xl font-bold max-md:text-2x text-blue-500">{title}</h1>
                            {subTitle !== "-" && (
                                <h1 className = "text-4xl font-bold max-md:text-2x">{subTitle}</h1>
                            )}
                        </div>
                        <p className = "text-[#9497a1] text-lg max-md:text-sm w-lg max-sm:w-full">{description}</p>
                    </div>
                </div>
                <div className = "flex overflow-x-auto styleScrollbar gap-4 pb-24 max-md:pb-8 text-[#171717] max-w-full" data-aos = "fade-up">
                    {contents.map((content, index) => (
                        <div className = "flex flex-col" key = {`${content.title} - ${index}`}>
                            <div className = {`shadow-md bg-white ${typeAdmin ? "rounded-t-lg" : "rounded-lg"}`}>
                                <div className = {`py-11 px-8 flex flex-col gap-7 min-w-72 max-w-72 ${h}`}>
                                    {content.image !== "-" ? (
                                        <div className = "border border-[#ececec] w-16 h-16 min-w-16 min-h-16 flex justify-center items-center rounded-xl aspect-square px-4">
                                            <div className = "w-8 h-8 relative">
                                                <Image src = {content.extension !== "-" ? `/${content.image}.${content.extension}` : `${content.image}`} alt = {content.title} unoptimized fill className = {`object-contain ${content.extension === "-" && "rounded-full"}`}/>
                                            </div>
                                        </div>
                                    ) : content.symbol !== "-" && (
                                        <div className = "border border-[#ececec] w-16 h-16 min-w-16 min-h-16 flex justify-center items-center rounded-xl aspect-square text-xl">
                                            <i className = {content.symbol}></i>
                                        </div>
                                    )}
                                    <div className = "flex flex-col gap-4">
                                        <div className = "flex flex-col">
                                            <h1 className = {`text-xl font-bold ${content.main === "true" && "text-blue-500"}`} dangerouslySetInnerHTML = {{ __html: content.title }}></h1>
                                            <p className = "text-[#9497a1] text-xs font-medium" dangerouslySetInnerHTML = {{ __html: content.description }}></p>
                                        </div>
                                        <div className = "font-normal text-[#9497a1]" dangerouslySetInnerHTML = {{ __html: content.content }}></div>
                                    </div>
                                </div>
                                {content.link !== "-" && (
                                    downloadType ? (
                                        downloadTitle ? (
                                            <a download href = {content.link} className = "flex justify-center items-center bg-blue-500 border-2 border-blue-500 text-white hover:text-blue-500 hover:bg-white transition-all duration-200 rounded-b-lg h-10 text-sm font-medium" dangerouslySetInnerHTML={{ __html: `Download ${downloadTitle}` }}></a>
                                        ) : (
                                            <a download href = {content.link} className = "flex justify-center items-center bg-blue-500 border-2 border-blue-500 text-white hover:text-blue-500 hover:bg-white transition-all duration-200 rounded-b-lg h-10 text-sm font-medium" dangerouslySetInnerHTML={{ __html: `Download ${content.title}` }}></a>
                                        )
                                    ) : (
                                        <Link target = "_blank" href = {content.link} className = "flex justify-center items-center bg-blue-500 border-2 border-blue-500 text-white hover:text-blue-500 hover:bg-white transition-all duration-200 rounded-b-lg h-10 text-sm font-medium" dangerouslySetInnerHTML={{ __html: `Go to ${content.title}` }}></Link>
                                    )
                                )}
                            </div>
                            {typeAdmin && (
                                <div onClick = {() => onDelete(content.id)} className = {`rounded-b-lg flex justify-center items-center bg-[#f55555] h-12 text-white border-2 transition-all duration-200 border-[#f55555] hover:bg-white hover:text-[#f55555]`}>
                                    <i className = "fa-solid fa-xmark"></i>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card