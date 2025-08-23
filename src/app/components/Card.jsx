// import from Next.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ contents, title, subTitle, description, h, inverse, downloadType, downloadTitle }) {
    return (
        <div className = "px-4 border-b border-[#ececec] bg-[#f7f7f7]">
            <div className = {`container mx-auto justify-self-center flex flex-col gap-8 max-md:gap-4 pt-24 max-md:pt-8`}>
                <div className = "flex justify-center w-full">
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
                <div className = "flex overflow-x-auto styleScrollbar gap-4 pb-24 max-md:pb-8">
                    {contents.map((content, index) => (
                        <div key = {content.title} className = "shadow-md bg-white rounded-lg">
                            <div className = {`py-11 px-8 flex flex-col gap-7 min-w-72 ${h}`}>
                                {content.image !== "-" ? (
                                    <div className = "border border-[#ececec] w-16 h-16 flex justify-center items-center rounded-xl aspect-square">
                                        <Image src = {`/${content.image}.${content.extension}`} alt = {content.title} width = {content.width} height = {content.height} unoptimized className = "object-contain w-8"/>
                                    </div>
                                ) : content.symbol !== "-" && (
                                    <div className = "border border-[#ececec] w-16 h-16 flex justify-center items-center rounded-xl aspect-square text-xl">
                                        <i className = {content.symbol}></i>
                                    </div>
                                )}
                                <div className = "flex flex-col gap-4">
                                    <div className = "flex flex-col">
                                        <h1 className = "text-xl font-bold">{content.title}</h1>
                                        <p className = "text-[#9497a1] text-xs font-medium">{content.description}</p>
                                    </div>
                                    <p className = "font-normal text-[#9497a1]">{content.content}</p>
                                </div>
                            </div>
                            {content.link !== "-" && (
                                downloadType ? (
                                    downloadTitle ? (
                                        <a download href = {content.link} className = "flex justify-center items-center bg-blue-500 border-2 border-blue-500 text-white hover:text-blue-500 hover:bg-white transition-all duration-200 rounded-b-lg h-10 text-sm font-medium">Download {downloadTitle}</a>
                                    ) : (
                                        <a download href = {content.link} className = "flex justify-center items-center bg-blue-500 border-2 border-blue-500 text-white hover:text-blue-500 hover:bg-white transition-all duration-200 rounded-b-lg h-10 text-sm font-medium">Download {content.title}</a>
                                    )
                                ) : (
                                    <Link target = "_blank" href = {content.link} className = "flex justify-center items-center bg-blue-500 border-2 border-blue-500 text-white hover:text-blue-500 hover:bg-white transition-all duration-200 rounded-b-lg h-10 text-sm font-medium">Go to {content.title}</Link>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card